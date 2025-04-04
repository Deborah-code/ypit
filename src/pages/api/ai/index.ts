import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY || "" });

interface CareerRequestBody {
  firstName: string;
  email: string;
  interests: string[];
  skills: string[];
  personalityTraits: string[];
}

interface CareerResponse {
  response: {
    summary: {
      primaryStrengths: string[];
      careerDirection: string;
      developmentAreas: string[];
    };
    careerMatches: {
      role: string;
      matchScore: number;
      description: string;
      requiredSkills: string[];
    }[];
    learningPath: {
      immediateSteps: string[];
      longTermGoals: string[];
      recommendedResources: {
        type: string;
        links: string[];
      }[];
    };
  };
}

/**
 * Validates the incoming request body.
 */
const validateRequestBody = (body: any): CareerRequestBody | null => {
  const { firstName, email, interests, skills, personalityTraits } = body;
  if (!firstName || !email || !interests || !skills || !personalityTraits) {
    return null;
  }
  return { firstName, email, interests, skills, personalityTraits };
};

/**
 * Calls OpenAI API to generate career recommendations.
 */
const getCareerRecommendations = async (userProfile: CareerRequestBody) => {
  const prompt = `You are an advanced career path recommendation system specializing in technology and digital careers.
  Analyze the provided user profile and generate detailed, personalized career recommendations.
  
  Consider these aspects:
  1. Match interests and personality traits to suitable work environments
  2. Align technical and soft skills with potential roles
  3. Identify gaps between current skills and career requirements
  4. Suggest specific, actionable learning paths
  
  Format your response as raw JSON with the following structure:
  {
    "summary": {
      "primaryStrengths": ["..."],
      "careerDirection": "...",
      "developmentAreas": ["..."]
    },
    "careerMatches": [
      {
        "role": "...",
        "matchScore": "...",
        "description": "...",
        "requiredSkills": ["..."]
      }
    ],
    "learningPath": {
      "immediateSteps": ["..."],
      "longTermGoals": ["..."],
      "recommendedResources": [{"type": "...", "links": ["..."]}]
    }
  }
  Ensure the data returned is raw JSON with no markdown syntax.
  `;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    temperature: 0.7,
    messages: [
      { role: "system", content: prompt },
      {
        role: "user",
        content: `Please analyze this profile for ${userProfile.firstName}:
        Interests: ${userProfile.interests}
        Skills: ${userProfile.skills}
        Personality Traits: ${userProfile.personalityTraits.join(", ")}`,
      },
    ],
  });

  return JSON.parse(completion.choices[0].message.content || "{}");
};

/**
 * Formats the AI response into the expected structure.
 */
const formatCareerResponse = (data: any): CareerResponse => {
  return {
    response: {
      summary: {
        primaryStrengths: data.summary.primaryStrengths || [],
        careerDirection: data.summary.careerDirection || "",
        developmentAreas: data.summary.developmentAreas || [],
      },
      careerMatches: data.careerMatches?.map((match: any) => ({
        role: match.role,
        matchScore: match.matchScore,
        description: match.description,
        requiredSkills: match.requiredSkills,
      })) || [],
      learningPath: {
        immediateSteps: data.learningPath.immediateSteps || [],
        longTermGoals: data.learningPath.longTermGoals || [],
        recommendedResources: data.learningPath.recommendedResources || [],
      },
    },
  };
};

/**
 * Updates or creates the user record in Prisma.
 */
const updateOrCreateUserProfile = async (
  email: string,
  userProfile: CareerRequestBody,
  aiResponse: any
) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  const updatedData = {
    interests:  [...existingUser!.interests, ...userProfile.interests],
    skills: [...existingUser!.skills, ...userProfile.skills],
    personalityTraits: [...existingUser!.personalityTraits, ...userProfile.personalityTraits],
    primaryStrengths: aiResponse.summary.primaryStrengths,
    careerDirection: aiResponse.summary.careerDirection,
    developmentAreas: aiResponse.summary.developmentAreas,
    careerMatches: aiResponse.careerMatches,
    learningPath: aiResponse.learningPath
  };

  if (existingUser) {
    await prisma.user.update({
      where: { email },
      data: updatedData,
    });
  } else {
    await prisma.user.create({
      data: {
        email,
        name: userProfile.firstName, // Ensure `name` is included
        interests: updatedData.interests,
        skills: updatedData.skills,
        personalityTraits: updatedData.personalityTraits,
        primaryStrengths: updatedData.primaryStrengths,
        careerDirection: updatedData.careerDirection,
        developmentAreas: updatedData.developmentAreas,
        careerMatches: updatedData.careerMatches,
        learningPath: updatedData.learningPath
      },
    });
  }
};

/**
 * Handles the API request.
 */
export default async function CareerPathRequestHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Validate request body
    const body = validateRequestBody(req.body);
    if (!body) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Get AI-generated career recommendations
    const aiResponse = await getCareerRecommendations(body);
    if (!aiResponse) {
      return res.status(500).json({
        error: "We have trouble getting a response at this time",
      });
    }

    // Format the response
    const formattedResponse = formatCareerResponse(aiResponse);

    // Save to the database
    await updateOrCreateUserProfile(body.email, body, aiResponse);

    // Send back the formatted response
    res.status(200).json(formattedResponse);
  } catch (error) {
    console.error("Error in career path recommendation:", error);
    res.status(500).json({
      error: "An error occurred while processing your career recommendation request.",
    });
  }
}
