export interface DNASequencePredictionDataObj {
  ASPD_Psychopathy_Level: string;
  Alcohol_Consumption: string;
  Body_Odor: string;
  Depression_Level: string;
  Diabetic_Level: string;
  Ear_Shape: string;
  Ethnicity: string;
  Eye_Color: string;
  Face_Shape: string;
  Gender: string;
  Hair_Color: string;
  Handedness: string;
  Heart_Disease_Rate: string;
  Nose_Shape: string;
  Nose_Size: string;
  Reaction_Time: string;
  Sickness: string;
  Skin_Color: string;
  Sleep_Pattern: string;
  Sugar_Level: string;
  Violent_Behavior_Level: string;
}

export interface PerpetratorCreateDataObj {
  name: string;
  nic: string;
  description: string;
  age: string;
  pastCriminalRecords: string;
  dna: string;
  gender: string;
  fileIds: string[];
}

export interface PerpetratorDetailsObj {
  id: number;
  name: string;
  nic: string;
  description: string;
  age: string;
  pastCriminalRecords: string;
  dna: string;
  gender: string;
  files: {
    id: number;
    fileName: string | null;
    fileUrl: string;
    suspicionId: number;
  }[];
  createdAt: string;
  updatedAt: string;
  createdById: null;
}

export interface PerpetratorCardDetailsObj {
  id: number;
  name: string;
  nic: string;
  age: string;
  gender: string;
  files: {
    id: number;
    fileName: string | null;
    fileUrl: string;
    suspicionId: number;
  }[];
}

export interface GeneratedPerpetratorImagesObj {
  front: string;
  left: string;
  right: string;
}

// {
//   "front": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-QhTHbyx95oCV4C2bAsbAB236/user-enXfHJrYc9V4lGbrgX6TWC2t/img-iAL1jI2tm18uQgFHlTWcO60p.png?st=2025-03-24T02%3A15%3A03Z&se=2025-03-24T04%3A15%3A03Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-03-24T00%3A51%3A40Z&ske=2025-03-25T00%3A51%3A40Z&sks=b&skv=2024-08-04&sig=%2BbZHlYXPtu9SZigXMvvUf6BGzmpfA/05ckcvkOTocsM%3D",
//   "left": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-QhTHbyx95oCV4C2bAsbAB236/user-enXfHJrYc9V4lGbrgX6TWC2t/img-1l69lenRZpoFLaOh0xosFN6q.png?st=2025-03-24T02%3A14%3A59Z&se=2025-03-24T04%3A14%3A59Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-03-23T15%3A59%3A51Z&ske=2025-03-24T15%3A59%3A51Z&sks=b&skv=2024-08-04&sig=Ypk%2BpwGhR/CpvTJTwuqWq93B7rCzwjhhQxUbmo40nC0%3D",
//   "right": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-QhTHbyx95oCV4C2bAsbAB236/user-enXfHJrYc9V4lGbrgX6TWC2t/img-OSdIQaSc4Qzf0GI8ERNFPxIh.png?st=2025-03-24T02%3A14%3A59Z&se=2025-03-24T04%3A14%3A59Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-03-24T02%3A59%3A03Z&ske=2025-03-25T02%3A59%3A03Z&sks=b&skv=2024-08-04&sig=tOKTVYzuVp%2BnEBp1NGOozUEtutShHiSOPbXGcRJOpj4%3D"
// }

export interface authUserDetailsObj {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}
