// src/types/course.ts
export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  totalHours: number;
  hasInternship: boolean;
  category?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

export interface ApplicationFormData {
  fullName: string;
  mobileNumber: string;
  additionalDetails?: string;
}