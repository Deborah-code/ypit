import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const apiKey = `${process.env.OPEN_AI_API_KEY}`
interface CareerRequestBody {
  firstName: string;
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

const openai = new OpenAI({
  apiKey: apiKey,
});

export default async function CareerPathRequestHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = req.body as CareerRequestBody;
    const { firstName, interests, skills, personalityTraits } = body;

    if (!interests || !skills || !personalityTraits) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const userProfile = {
      interests: interests.join(", "),
      skills: skills.join(", "),
      personalityTraits: personalityTraits.join(", "),
    };

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.7,
      messages: [
        {
          role: "system",

          content: `You are an advanced career path recommendation system specializing in technology and digital careers. 
          Analyze the provided user profile and generate detailed, personalized career recommendations.
          
          Consider these aspects in your analysis:
          1. Match interests and personality traits to suitable work environments
          2. Align technical and soft skills with potential roles
          3. Identify gaps between current skills and career requirements
          4. Suggest specific, actionable learning paths
          
          Use the following interface as a guide to structure your raw JSON response:
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

          Format your response as the following raw JSON data:
          {
            "summary": {
              "primaryStrengths": ["primary strengths"],
              "careerDirection": "career direction",
              "developmentAreas": ["development areas"]
            },
            "careerMatches": [
              {
                "role": "role",
                "matchScore": "match score",
                "description": "description",
                "requiredSkills": ["required skills"]
              }
            ],
            "learningPath": {
              "immediateSteps": ["immediate steps"],
              "longTermGoals": ["long term goals"],
              "recommendedResources": [{
                type: 'type of resource';
                links: ['link to resource'];
              }]
            }
          }
          Ensure the data returned is raw json with no markdown syntax
          `
        },
        {
          role: "user",
          content: `Please analyze this profile for ${firstName}:
          Interests: ${userProfile.interests}
          Skills: ${userProfile.skills}
          Personality Traits: ${userProfile.personalityTraits}`,
        },
      ],
      // response_format: { type: "json_object" },
    });

    // console.log('before', completion.choices[0].message.content)

    const responseMessage = JSON.parse(completion.choices[0].message.content || "{}");
    console.log('after', responseMessage)

    // Format and structure the response
    const formattedResponse:CareerResponse= {
      response: {
        summary: {
          primaryStrengths: responseMessage.summary.primaryStrengths,
          careerDirection: responseMessage.summary.careerDirection,
          developmentAreas: responseMessage.summary.developmentAreas,
        },
        careerMatches: responseMessage.careerMatches.map((match: any) => ({
          role: match.role,
          matchScore: match.matchScore,
          description: match.description,
          requiredSkills: match.requiredSkills,
        })),
        learningPath: {
          immediateSteps: responseMessage.learningPath.immediateSteps,
          longTermGoals: responseMessage.learningPath.longTermGoals,
          recommendedResources: responseMessage.learningPath.recommendedResources,
        },
      },
    };

    console.log(JSON.stringify(formattedResponse, null, 2), 'this is formatted')
    res.status(200).json(formattedResponse);
  } catch (error) {
    console.error("Error in career path recommendation:", error);
    res.status(500).json({ 
      error: "An error occurred while processing your career recommendation request." 
    });
  }
}