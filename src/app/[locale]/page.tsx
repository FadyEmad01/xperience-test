import DemoLayout from "@/components/DemoLayout";
import AboutUs from "@/components/landing/About-us";
import CTA from "@/components/landing/CTA";
import Cta2 from "@/components/landing/CTA/index2";
import HeroSection from "@/components/landing/Hero.tsx";
import TestimonialsSection from "@/components/landing/Testimonials";

export default function Home() {
    return <>
        {/* <DemoLayout /> */}
        <HeroSection />
        <AboutUs/>
        <TestimonialsSection/>
        {/* <CTA/> */}
        <Cta2/>
    </>;
}