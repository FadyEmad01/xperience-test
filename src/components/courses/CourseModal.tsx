// src/components/course/CourseModal.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, FileEdit, ArrowLeft, X } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import { ApplicationForm } from './ApplicationForm';
import { Course } from '@/types/course';

interface CourseModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
}

type ModalView = 'options' | 'application';

export function CourseModal({ course, isOpen, onClose }: CourseModalProps) {
  const [currentView, setCurrentView] = useState<ModalView>('options');

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in the "${course.title}" course. Can you provide more information?`
    );
    const whatsappNumber = '201234567890'; // Replace with your WhatsApp number
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleClose = () => {
    onClose();
    // Reset view after animation completes
    setTimeout(() => setCurrentView('options'), 300);
  };

  const handleApplicationSuccess = () => {
    setTimeout(() => {
      handleClose();
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className={`
          sm:max-w-md p-0 gap-0 overflow-hidden
          bg-white dark:bg-gray-950
          border border-gray-200 dark:border-gray-800
          rounded-2xl shadow-2xl
        `}
      >
        {/* Custom Header */}
        <div className="relative">
          {/* Background Gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
            style={{ height: currentView === 'options' ? '120px' : '80px' }}
          />

          <DialogHeader className="relative p-6 pb-4">
            <div className="flex items-center justify-between">
              <AnimatePresence mode="wait">
                {currentView === 'application' && (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    onClick={() => setCurrentView('options')}
                    className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </motion.button>
                )}
              </AnimatePresence>
              <button
                onClick={handleClose}
                className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-auto"
              >
                <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <DialogTitle className="text-center mt-2">
              <AnimatePresence mode="wait">
                {currentView === 'options' ? (
                  <motion.div
                    key="options-title"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                      {course.title}
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="application-title"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Submit Application
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <AnimatePresence mode="wait">
            {currentView === 'options' ? (
              <motion.div
                key="options"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {/* WhatsApp Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleWhatsAppContact}
                    className={`
                      w-full h-14 rounded-xl
                      bg-gradient-to-r from-green-600 to-green-500
                      hover:from-green-700 hover:to-green-600
                      text-white font-medium text-base
                      shadow-lg shadow-green-500/25
                      transition-all duration-200
                      flex items-center justify-center gap-3
                    `}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Contact Sales on WhatsApp
                  </Button>
                </motion.div>

                {/* Divider */}
                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-gray-800" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-gray-950 px-3 text-gray-400">
                      or
                    </span>
                  </div>
                </div>

                {/* Application Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => setCurrentView('application')}
                    variant="outline"
                    className={`
                      w-full h-14 rounded-xl
                      border-2 border-gray-200 dark:border-gray-700
                      hover:border-blue-500 dark:hover:border-blue-500
                      hover:bg-blue-50 dark:hover:bg-blue-950/30
                      text-gray-900 dark:text-white font-medium text-base
                      transition-all duration-200
                      flex items-center justify-center gap-3
                    `}
                  >
                    <FileEdit className="h-5 w-5" />
                    Submit an Application with Us
                  </Button>
                </motion.div>

                {/* Course Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {course.totalHours} hours
                    </span>
                  </div>
                  {course.hasInternship && (
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-gray-500">Internship</span>
                      <span className="font-medium text-green-600">
                        ✓ Included
                      </span>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="application"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <ApplicationForm
                  courseTitle={course.title}
                  onSuccess={handleApplicationSuccess}
                  onBack={() => setCurrentView('options')}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}