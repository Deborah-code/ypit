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
