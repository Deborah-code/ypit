export interface CareerRecommendation {
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
  }
  
  export interface UserProfile {
    firstName: string;
    email: string;
    interests: string[];
    skills: string[];
    personalityTraits: string[];
  }
  