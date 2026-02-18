// src/components/course/ApplicationForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, CheckCircle2, User, Phone, FileText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

import {
  applicationSchema,
  ApplicationSchemaType,
} from '@/lib/validations/application';

interface ApplicationFormProps {
  courseTitle: string;
  onSuccess?: () => void;
  onBack?: () => void;
}

export function ApplicationForm({
  courseTitle,
  onSuccess,
  onBack,
}: ApplicationFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplicationSchemaType>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: '',
      mobileNumber: '',
      additionalDetails: '',
    },
  });

  const onSubmit = async (data: ApplicationSchemaType) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Application submitted:', {
      course: courseTitle,
      ...data,
    });
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      reset();
      onSuccess?.();
    }, 2000);
  };

  return (
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 15,
              delay: 0.1,
            }}
          >
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
          >
            Application Submitted!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 dark:text-gray-400"
          >
            We'll contact you soon about "{courseTitle}"
          </motion.p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Course Title Header */}
          <div className="text-center pb-4 border-b border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Applying for
            </p>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {courseTitle}
            </h3>
          </div>

          {/* Full Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <Label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"
            >
              <User className="h-4 w-4" />
              Full Name
            </Label>
            <div className="relative">
              <Input
                id="fullName"
                placeholder="Enter your full name"
                className={`
                  h-12 px-4 rounded-xl
                  bg-gray-50 dark:bg-gray-900
                  border-gray-200 dark:border-gray-700
                  focus:border-blue-500 focus:ring-blue-500/20
                  transition-all duration-200
                  ${errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
                `}
                {...register('fullName')}
              />
            </div>
            <AnimatePresence>
              {errors.fullName && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm text-red-500 flex items-center gap-1"
                >
                  {errors.fullName.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Mobile Number Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <Label
              htmlFor="mobileNumber"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Mobile Number
            </Label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-500">
                <span className="text-lg">🇪🇬</span>
                <span className="text-sm font-medium">+20</span>
              </div>
              <Input
                id="mobileNumber"
                type="tel"
                placeholder="1012345678"
                className={`
                  h-12 pl-24 pr-4 rounded-xl
                  bg-gray-50 dark:bg-gray-900
                  border-gray-200 dark:border-gray-700
                  focus:border-blue-500 focus:ring-blue-500/20
                  transition-all duration-200
                  ${errors.mobileNumber ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
                `}
                {...register('mobileNumber')}
              />
            </div>
            <AnimatePresence>
              {errors.mobileNumber && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm text-red-500"
                >
                  {errors.mobileNumber.message}
                </motion.p>
              )}
            </AnimatePresence>
            <p className="text-xs text-gray-400">
              Egyptian mobile numbers only (010, 011, 012, 015)
            </p>
          </motion.div>

          {/* Additional Details Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <Label
              htmlFor="additionalDetails"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Additional Details
              <span className="text-gray-400 font-normal">(Optional)</span>
            </Label>
            <Textarea
              id="additionalDetails"
              placeholder="Tell us about your background, goals, or any questions you have..."
              rows={4}
              className={`
                px-4 py-3 rounded-xl resize-none
                bg-gray-50 dark:bg-gray-900
                border-gray-200 dark:border-gray-700
                focus:border-blue-500 focus:ring-blue-500/20
                transition-all duration-200
                ${errors.additionalDetails ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
              `}
              {...register('additionalDetails')}
            />
            <AnimatePresence>
              {errors.additionalDetails && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm text-red-500"
                >
                  {errors.additionalDetails.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-3 pt-4"
          >
            {onBack && (
              <Button
                type="button"
                variant="outline"
                onClick={onBack}
                className="flex-1 h-12 rounded-xl border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Back
              </Button>
            )}
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`
                flex-1 h-12 rounded-xl
                bg-gradient-to-r from-blue-600 to-blue-500
                hover:from-blue-700 hover:to-blue-600
                text-white font-medium
                shadow-lg shadow-blue-500/25
                transition-all duration-200
                disabled:opacity-70 disabled:cursor-not-allowed
              `}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </Button>
          </motion.div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}