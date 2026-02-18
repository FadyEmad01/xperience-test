// src/lib/validations/application.ts
import { z } from 'zod';

// Egyptian mobile number regex
// Valid formats: 01012345678, +201012345678, 201012345678
// Must start with 010, 011, 012, or 015
const egyptianMobileRegex = /^(?:\+?20)?(?:0)?1[0125]\d{8}$/;

export const applicationSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: 'Full name must be at least 3 characters' })
    .max(50, { message: 'Full name must be less than 50 characters' })
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, {
      message: 'Full name can only contain letters and spaces',
    }),
  
  mobileNumber: z
    .string()
    .regex(egyptianMobileRegex, {
      message: 'Please enter a valid Egyptian mobile number (e.g., 01012345678)',
    })
    .transform((val) => {
      // Normalize to format: +201XXXXXXXXX
      const cleaned = val.replace(/\D/g, '');
      if (cleaned.startsWith('20')) {
        return `+${cleaned}`;
      }
      if (cleaned.startsWith('0')) {
        return `+20${cleaned.slice(1)}`;
      }
      return `+20${cleaned}`;
    }),
  
  additionalDetails: z
    .string()
    .max(500, { message: 'Additional details must be less than 500 characters' })
    .optional(),
});

export type ApplicationSchemaType = z.infer<typeof applicationSchema>;