import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const Footer4 = () => {
    return (
        <>
            <footer className="relative">
                <Container className="relative">
                    <div className="flex flex-col border-t gap-12 h-fit pt-28 ">
                        <div className="flex justify-between items-start text-left gap-8 flex-wrap ">
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
                        </div>
                        <div className="flex items-end justify-end relative ">
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

                        </div>
                    </div>

                </Container>
                <div className="radial-footer" />
            </footer>

        </>
    );
};

export default Footer4;