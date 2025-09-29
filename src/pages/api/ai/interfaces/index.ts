import type { NextApiRequest, NextApiResponse } from 'next';

export interface CareerRequestBody {
  email: string;
  firstName: string;
  interests: string[];
  skills: string[];
  personalityTraits: string[];
}

export interface CareerResponse {
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

// Add this default export
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(404).json({ error: 'This is a types-only file' })
}