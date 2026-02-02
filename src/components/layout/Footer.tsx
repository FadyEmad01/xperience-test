// import Image from "next/image";
// import Link from "next/link";
// import Container from "./Container";

// const Footer = () => {
//     return (
//         <>
//             <footer className="relative">
//                 <Container className="relative">
//                     <div className="flex flex-col border-t gap-12 h-fit pt-28 ">
//                         <div className="flex justify-between items-start text-left gap-8 flex-wrap ">
//                             <div className="flex flex-col items-start justify-center gap-4">
//                                 <p className="font-medium">Everything by xperience</p>
//                                 <ul className="flex flex-col items-start justify-center gap-3 text-sm">
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                         >
//                                             xperience
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             target="_blank"
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                         >
//                                             xperience Blocks
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="flex flex-col items-start justify-center gap-4">
//                                 <p className="font-medium">Components</p>
//                                 <ul className="flex flex-col items-start justify-center gap-3 text-sm">
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                         >
//                                             Introduction
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                         >
//                                             Installation
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                         >
//                                             RTL Setup
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/ "
//                                         >
//                                             Roadmap
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                         >
//                                             Changelog
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="flex flex-col items-start justify-center gap-4">
//                                 <p className="font-medium">Pro Features</p>
//                                 <ul className="flex flex-col items-start justify-center gap-3 text-sm">
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                         >
//                                             xperience Blocks
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                         >
//                                             Pricing
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                         >
//                                             FAQ
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="flex flex-col items-start justify-center gap-4">
//                                 <p className="font-medium">Other</p>
//                                 <ul className="flex flex-col items-start justify-center gap-3 text-sm">
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                             target="_blank"
//                                         >
//                                             Discord Server
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                             target="_blank"
//                                         >
//                                             Github
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                             target="_blank"
//                                         >
//                                             Contact us
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                             target="_blank"
//                                         >
//                                             llms.txt
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                             target="_blank"
//                                         >
//                                             llms-full.txt
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                             target="_blank"
//                                         >
//                                             Ikiform
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>{" "}
//                             <div className="flex flex-col items-start justify-center gap-4">
//                                 <p className="font-medium">Legal</p>
//                                 <ul className="flex flex-col items-start justify-center gap-3 text-sm">
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                             target="_blank"
//                                         >
//                                             Privacy Policy
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             className="text-text-secondary hover:text-primary"
//                                             href="/"
//                                             target="_blank"
//                                         >
//                                             Terms of Service
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="flex items-end justify-end relative ">
//                             <Image
//                                 src="/svg/xperience.svg"
//                                 width={0}
//                                 height={0}
//                                 sizes="100vw"
//                                 alt="xperience"
//                                 className="pointer-events-none w-full h-auto relative z-10 "
//                                 style={{
//                                     filter: "brightness(100%) grayscale(0%) saturate(40%)",
//                                     // maskImage:
//                                     //     "linear-gradient(to top, transparent 0%, var(--primary) 100%)",
//                                     // WebkitMaskImage:
//                                     //     "linear-gradient(to top, transparent 0%, var(--primary) 100%)",
//                                 }}
//                             />

//                         </div>
//                     </div>

//                 </Container>
//                 <div className="radial-footer" />
//             </footer>

//         </>
//     );
// };

// export default Footer;

import Image from "next/image";
import Link from "next/link";
import Container from "./Container"; // Assuming this is a max-w-7xl mx-auto wrapper

const Footer = () => {
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

export default Footer;
