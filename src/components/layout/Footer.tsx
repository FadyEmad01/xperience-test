import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
} from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
    const company = [
        {
            title: "About Us",
            href: "#",
        },
        {
            title: "Careers",
            href: "#",
        },
        {
            title: "Brand assets",
            href: "#",
        },
        {
            title: "Privacy Policy",
            href: "#",
        },
        {
            title: "Terms of Service",
            href: "#",
        },
    ];

    const resources = [
        {
            title: "Blog",
            href: "#",
        },
        {
            title: "Help Center",
            href: "#",
        },
        {
            title: "Contact Support",
            href: "#",
        },
        {
            title: "Community",
            href: "#",
        },
        {
            title: "Security",
            href: "#",
        },
    ];

    const socialLinks = [
        {
            icon: Facebook,
            link: "#",
        },
        {
            icon: Github,
            link: "#",
        },
        {
            icon: Instagram,
            link: "#",
        },
        {
            icon: Linkedin,
            link: "#",
        },
        {
            icon: Twitter,
            link: "#",
        },
        {
            icon: Youtube,
            link: "#",
        },
    ];
    return (
        <>
            <footer className="relative bg-background overflow-hidden">
                <Container className="relative">
                    <div className="flex flex-col border-t gap-12 h-fit py-10">
                        {/* <div className="flex justify-between items-start text-left gap-8 flex-wrap ">
                            <div className="flex flex-col items-start justify-center gap-4">
                                <p className="font-medium">Everything by xperience</p>
                                <ul className="flex flex-col items-start justify-center gap-3 text-sm">
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                        >
                                            xperience
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            target="_blank"
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                        >
                                            xperience Blocks
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-start justify-center gap-4">
                                <p className="font-medium">Components</p>
                                <ul className="flex flex-col items-start justify-center gap-3 text-sm">
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                        >
                                            Introduction
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                        >
                                            Installation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                        >
                                            RTL Setup
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/ "
                                        >
                                            Roadmap
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                        >
                                            Changelog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-start justify-center gap-4">
                                <p className="font-medium">Pro Features</p>
                                <ul className="flex flex-col items-start justify-center gap-3 text-sm">
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                        >
                                            xperience Blocks
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-start justify-center gap-4">
                                <p className="font-medium">Other</p>
                                <ul className="flex flex-col items-start justify-center gap-3 text-sm">
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                            target="_blank"
                                        >
                                            Discord Server
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                            target="_blank"
                                        >
                                            Github
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                            target="_blank"
                                        >
                                            Contact us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                            target="_blank"
                                        >
                                            llms.txt
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                            target="_blank"
                                        >
                                            llms-full.txt
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                            target="_blank"
                                        >
                                            Ikiform
                                        </Link>
                                    </li>
                                </ul>
                            </div>{" "}
                            <div className="flex flex-col items-start justify-center gap-4">
                                <p className="font-medium">Legal</p>
                                <ul className="flex flex-col items-start justify-center gap-3 text-sm">
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                            target="_blank"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-text-secondary hover:text-primary"
                                            href="/"
                                            target="_blank"
                                        >
                                            Terms of Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        {/* grid */}
                        <div className="grid grid-cols-6 gap-6">
                        {/* <div className="grid grid-cols-6 gap-6 py-4"> */}
                            <div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
                                <a className="w-max" href="#">
                                    <Image alt="xperience" src={'/svg/xperience.svg'}
                                        width={0}
                                        height={0}
                                        className="h-10 w-full" />
                                </a>
                                <p className="max-w-sm text-balance font-mono text-muted-foreground text-sm">
                                    A comprehensive financial technology platform.
                                </p>
                                <div className="flex gap-2">
                                    {socialLinks.map((item, index) => (
                                        <Button
                                            key={`social-${item.link}-${index}`}
                                            size="icon-sm"
                                            variant="outline"
                                        >
                                            <a href={item.link} target="_blank">
                                                <item.icon className="size-3.5" />
                                            </a>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                            <div className="col-span-3 w-full md:col-span-1">
                                <span className="text-muted-foreground text-xs">Resources</span>
                                <div className="mt-2 flex flex-col gap-2">
                                    {resources.map(({ href, title }) => (
                                        <a
                                            className="w-max text-sm hover:underline"
                                            href={href}
                                            key={title}
                                        >
                                            {title}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="col-span-3 w-full md:col-span-1">
                                <span className="text-muted-foreground text-xs">Company</span>
                                <div className="mt-2 flex flex-col gap-2">
                                    {company.map(({ href, title }) => (
                                        <a
                                            className="w-max text-sm hover:underline"
                                            href={href}
                                            key={title}
                                        >
                                            {title}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/* <div className="flex items-end justify-end relative ">
                            <Image
                                src="/svg/xperience.svg"
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt="xperience"
                                className="pointer-events-none w-full h-auto relative z-10 "
                                style={{
                                    filter: "brightness(100%) grayscale(0%) saturate(40%)",
                                    // maskImage:
                                    //     "linear-gradient(to top, transparent 0%, var(--primary) 100%)",
                                    // WebkitMaskImage:
                                    //     "linear-gradient(to top, transparent 0%, var(--primary) 100%)",
                                }}
                            />

                        </div> */}
                        <div className="relative mt-10 flex flex-col items-center">
                            {/* Gradient Fade overlay to make the text look like it's emerging from the dark */}
                            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black to-transparent h-full w-full pointer-events-none" />

                            {/* <Image
                                                    src="/svg/xperience.svg"
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    alt="xperience"
                                                    className="w-full h-auto opacity-40 mix-blend-screen"
                                                /> */}
                            <Image
                                src="/svg/xperience.svg"
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt="xperience"
                                className="pointer-events-none w-full h-auto relative z-10 opacity-40"
                                style={{
                                    filter: "brightness(100%) grayscale(0%)",
                                    maskImage:
                                        "linear-gradient(to top, transparent 0%, var(--primary) 100%)",
                                    WebkitMaskImage:
                                        "linear-gradient(to top, transparent 0%, var(--primary) 100%)",
                                }}
                            />

                            {/* Simple Copyright */}
                            <div className="flex justify-center items-center z-30 w-full">
                                <div className="text-sm text-text-secondary  z-30">
                                    © {new Date().getFullYear()} <span className="text-foreground">xperience</span>. All rights reserved.
                                </div>
                            </div>

                        </div>
                    </div>

                </Container>
                {/* <div className="radial-footer" /> */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:w-[800px] md:h-[400px] w-[200px] h-[400px] bg-green-900/40 opacity-50 blur-[120px] rounded-full pointer-events-none z-0" />
            </footer>

        </>
    );
};