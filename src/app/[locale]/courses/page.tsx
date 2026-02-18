import { CourseGrid } from '@/components/courses/CourseGrid';
import HeroCoursesSection from '@/components/courses/Hero'
import { Course } from '@/types/course';


const courses: Course[] = [
    {
        id: '1',
        title: 'Advanced Web Development with React & Next.js',
        description:
            'Master modern web development with React 18, Next.js 14, TypeScript, and industry best practices. Build production-ready applications from scratch.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
        totalHours: 48,
        hasInternship: true,
        category: 'Development',
        level: 'advanced',
    },
    {
        id: '2',
        title: 'UI/UX Design Fundamentals',
        description:
            'Learn the principles of user interface and user experience design. Create beautiful, functional designs using Figma and modern design systems.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        totalHours: 36,
        hasInternship: false,
        category: 'Design',
        level: 'beginner',
    },
    {
        id: '3',
        title: 'Data Science & Machine Learning',
        description:
            'Dive into data science with Python, pandas, and scikit-learn. Build predictive models and gain insights from complex datasets.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        totalHours: 60,
        hasInternship: true,
        category: 'Data Science',
        level: 'intermediate',
    },
    {
        id: '4',
        title: 'Mobile App Development with Flutter',
        description:
            'Build cross-platform mobile applications using Flutter and Dart. Create beautiful, natively compiled apps for iOS and Android.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
        totalHours: 42,
        hasInternship: true,
        category: 'Mobile',
        level: 'intermediate',
    },
    {
        id: '5',
        title: 'Cloud Architecture & DevOps',
        description:
            'Master cloud services with AWS and Azure. Learn CI/CD pipelines, containerization with Docker, and Kubernetes orchestration.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
        totalHours: 54,
        hasInternship: true,
        category: 'DevOps',
        level: 'advanced',
    },
    {
        id: '6',
        title: 'Digital Marketing Masterclass',
        description:
            'Learn SEO, social media marketing, content strategy, and paid advertising. Develop skills to grow any business online.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        totalHours: 30,
        hasInternship: false,
        category: 'Marketing',
        level: 'beginner',
    },
];


export default function page() {
    return (
        <>
            <HeroCoursesSection />
            {/* Courses Section */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-32 -mt-8">
                <CourseGrid courses={courses} />
            </section>
        </>
    )
}
