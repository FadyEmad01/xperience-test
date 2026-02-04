import DemoLayout from "@/components/DemoLayout";
import AboutUs from "@/components/landing/About-us";
import HeroSection from "@/components/landing/Hero.tsx";
import TestimonialsSection from "@/components/landing/Testimonials";

export default function Home() {
    return <>
        {/* <DemoLayout /> */}
        <HeroSection />
        <AboutUs/>
        <TestimonialsSection/>
    </>;
}