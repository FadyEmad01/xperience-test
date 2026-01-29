"use client"
import Container from "@/components/layout/Container";
import { Safari } from "@/components/safariMockup";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";


export default function index() {
    const t = useTranslations("hero");

    const avatars = [
        {
            id: 1,
            name: "Keith Kennedy",
            username: "@k.kennedy",
            role: "Designer at @coss.com",
            image: "/images/hosseny.jpg",
            trainedStudents: "+3000",
        },
        {
            id: 2,
            name: "John Doe",
            username: "@john",
            role: "Frontend Developer",
            image: "/images/hosseny.jpg",
            trainedStudents: "+3000",
        },
        {
            id: 3,
            name: "Jane Smith",
            username: "@jane",
            role: "UI Engineer",
            image: "/images/hosseny.jpg",
            trainedStudents: "+3000",
        },
    ];

    return (
        <>
            <main className="overflow-hidden">
                <div className="bg-wrapper" aria-hidden>
                    <div className="bg-shape shape-1"></div>
                    <div className="bg-shape shape-2"></div>
                    <div className="bg-shape shape-3"></div>
                </div>
                <section>
                    <div className="relative pt-18 md:pt-24">
                        <div
                            className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32">
                            {/* <Image
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="hidden size-full dark:block"
                                width="3276"
                                height="4095"
                            /> */}
                        </div>

                        {/* <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        /> */}

                        <div
                            aria-hidden
                            className="radial-bg"
                        />

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <div>
                                    <Link
                                        href="/"
                                        className="bg-background/30 backdrop-blur-2xl text-text-secondary group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 ltr:pl-4 rtl:pr-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:shadow-zinc-950"
                                    >
                                        <span className="text-text-secondary text-sm">{t.rich("badge", {
                                            br: () => <br />
                                        })}</span>
                                        <div className="-space-x-1.5 flex">
                                            {avatars.map((user) => (
                                                <AvatarHover key={user.id} user={user} />
                                            ))}
                                            <div className="bg-muted size-6 overflow-hidden rounded-full duration-500 z-15">
                                                <div className="flex w-12 -translate-x-1/2 group-hover:translate-x-0
      rtl:translate-x-1/2 rtl:group-hover:translate-x-0 duration-500 ease-in-out">
                                                    <span className="flex size-6 rtl:rotate-180">
                                                        <ArrowRight className="m-auto size-3" />
                                                    </span>
                                                    <span className="flex size-6 rtl:rotate-180">
                                                        <ArrowRight className="m-auto size-3" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </Link>
                                </div>
                                <h1
                                    className="mt-8 text-[4rem] md:text-[4.8rem] leading-[100%] tracking-[-0.01em] text-center mb-4 pb-3 
                                    text-pretty effect-font-hero effect-font-gradient effect-font-styling"
                                >
                                    {t.rich("title", {
                                        br: () => <br />
                                    })}
                                </h1>
                                <h2
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg
                                    text-text-secondary">
                                    {t.rich("description", {
                                        br: () => <br />
                                    })}
                                </h2>
                            </div>
                        </div>

                        <div>
                            <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    {/* <Image
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="/images/hero.png"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                    <Image
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src="/images/hero.png"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    /> */}
                                    <Safari url="xperience-eg.com" imageSrc="/images/hero.png" mode="simple" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span> Meet Our Customers</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/column.svg"
                                    alt="Column Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly Logo"
                                    height="28"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

type AvatarProps = {
    user: {
        name: string;
        username: string;
        role: string;
        image: string;
        trainedStudents: string,
    };
};

function AvatarHover({ user }: AvatarProps) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <img
                    src={user.image}
                    alt={user.name}
                    className="
            size-6 rounded-full ring-1 ring-background
            relative z-0
            transition-all duration-300
            hover:z-20 hover:scale-105
          "
                />
            </HoverCardTrigger>

            <HoverCardContent className="z-30 bg-background/20 backdrop-blur-2xl">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <img
                            src={user.image}
                            alt={user.name}
                            className="size-10 rounded-full"
                        />
                        <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-text-secondary">
                                {user.username}
                            </p>
                        </div>
                    </div>

                    <p className="text-sm text-text-secondary">
                        {user.role}
                    </p>

                    <p className="text-xs text-text-secondary">
                        Trained more than <span className="text-foreground">{user.trainedStudents}</span> students.
                    </p>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}