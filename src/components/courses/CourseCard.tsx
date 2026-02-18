// src/components/course/CourseCard.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Clock, Briefcase, Eye, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

import { CourseModal } from './CourseModal';
import { Course } from '@/types/course';

interface CourseCardProps {
  course: Course;
  index?: number;
}

export function CourseCard({ course, index = 0 }: CourseCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Card
          className={`
            group relative overflow-hidden
            bg-white dark:bg-gray-950
            border border-gray-200 dark:border-gray-800
            rounded-3xl
            transition-all duration-500 ease-out
            hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50
            hover:border-gray-300 dark:hover:border-gray-700
            hover:-translate-y-1
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Container */}
          <div className="relative h-52 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {course.hasInternship && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge
                    className={`
                      px-3 py-1.5 rounded-full
                      bg-green-500/90 backdrop-blur-sm
                      text-white text-xs font-medium
                      border-0 shadow-lg shadow-green-500/25
                    `}
                  >
                    <Briefcase className="h-3 w-3 mr-1.5" />
                    Internship
                  </Badge>
                </motion.div>
              )}
            </div>

            {/* Hours Badge */}
            <div className="absolute bottom-4 left-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`
                  inline-flex items-center gap-1.5
                  px-3 py-1.5 rounded-full
                  bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm
                  text-gray-900 dark:text-white text-sm font-medium
                  shadow-lg
                `}
              >
                <Clock className="h-3.5 w-3.5" />
                {course.totalHours} hours
              </motion.div>
            </div>

            {/* Category Badge */}
            {course.category && (
              <div className="absolute top-4 right-4">
                <Badge
                  variant="secondary"
                  className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium"
                >
                  {course.category}
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Title */}
            <motion.h3
              className={`
                text-xl font-semibold
                text-gray-900 dark:text-white
                line-clamp-2 leading-tight
                group-hover:text-blue-600 dark:group-hover:text-blue-400
                transition-colors duration-300
              `}
            >
              {course.title}
            </motion.h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
              {course.description}
            </p>

            {/* Divider */}
            <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
              {/* Action Buttons */}
              <div className="flex gap-3">
                {/* View Content Button */}
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className={`
                      w-full h-11 rounded-xl
                      border-gray-200 dark:border-gray-700
                      hover:border-gray-300 dark:hover:border-gray-600
                      hover:bg-gray-50 dark:hover:bg-gray-900
                      text-gray-700 dark:text-gray-300
                      font-medium text-sm
                      transition-all duration-200
                      flex items-center justify-center gap-2
                    `}
                  >
                    <Eye className="h-4 w-4" />
                    View Content
                  </Button>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className={`
                      w-full h-11 rounded-xl
                      bg-gray-900 dark:bg-white
                      hover:bg-gray-800 dark:hover:bg-gray-100
                      text-white dark:text-gray-900
                      font-medium text-sm
                      shadow-sm
                      transition-all duration-200
                      flex items-center justify-center gap-2
                      group/btn
                    `}
                  >
                    Submit
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            animate={{
              boxShadow: isHovered
                ? 'inset 0 0 0 1px rgba(59, 130, 246, 0.1)'
                : 'inset 0 0 0 1px transparent',
            }}
            transition={{ duration: 0.3 }}
          />
        </Card>
      </motion.div>

      {/* Modal */}
      <CourseModal
        course={course}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}