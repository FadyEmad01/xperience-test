import Image from "next/image";
import Link from "next/link";
import Container from "./Container"; // Assuming this is a max-w-7xl mx-auto wrapper

const Footer3 = () => {
    return (
        <footer className="relative overflow-hidden bg-black">

            {/* <div className="radial-footer" /> */}

            {/* --- Ambient Background Effects --- */}
            {/* Grid Pattern */}
            {/* <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div> */}

            {/* Green Glow (Your brand color) */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:w-[800px] md:h-[400px] w-[200px] h-[400px] bg-green-900/40 opacity-50 blur-[120px] rounded-full pointer-events-none z-0" />

            <Container className="relative z-10 border-t py-10">
                <div className="flex flex-col gap-16">

                    {/* --- Main Grid Layout --- */}
                    {/* Changed from Flex to Grid for better vertical alignment */}


                    {/* --- Bottom Logo Section --- */}
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
                        <div className="flex justify-between items-center z-30 w-full">
                            <div className="text-sm text-text-secondary  z-30">
                                © {new Date().getFullYear()} <span className="text-foreground">xperience</span>. All rights reserved.
                            </div>
                            <h1 className="text-sm text-text-secondary">asda</h1>
                        </div>

                    </div>

                </div>
            </Container>
        </footer>
    );
};

export default Footer3;