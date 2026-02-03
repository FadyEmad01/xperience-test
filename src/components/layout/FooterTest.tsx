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


//////////////////////////////////////////////////////////////////

// import Image from "next/image";
// import Link from "next/link";
// import Container from "./Container"; // Assuming this is a max-w-7xl mx-auto wrapper

// const Footer = () => {
//     return (
//         <footer className="relative overflow-hidden bg-black">

//             {/* <div className="radial-footer" /> */}

//             {/* --- Ambient Background Effects --- */}
//             {/* Grid Pattern */}
//             {/* <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div> */}

//             {/* Green Glow (Your brand color) */}
//             <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:w-[800px] md:h-[400px] w-[200px] h-[400px] bg-green-900/40 opacity-50 blur-[120px] rounded-full pointer-events-none z-0" />

//             <Container className="relative z-10 border-t py-10">
//                 <div className="flex flex-col gap-16">

//                     {/* --- Main Grid Layout --- */}
//                     {/* Changed from Flex to Grid for better vertical alignment */}


//                     {/* --- Bottom Logo Section --- */}
//                     <div className="relative mt-10 flex flex-col items-center">
//                         {/* Gradient Fade overlay to make the text look like it's emerging from the dark */}
//                         <div className="absolute inset-0 z-20 bg-gradient-to-t from-black to-transparent h-full w-full pointer-events-none" />

//                         {/* <Image
//                             src="/svg/xperience.svg"
//                             width={0}
//                             height={0}
//                             sizes="100vw"
//                             alt="xperience"
//                             className="w-full h-auto opacity-40 mix-blend-screen"
//                         /> */}
//                          <Image
//                                 src="/svg/xperience.svg"
//                                 width={0}
//                                 height={0}
//                                 sizes="100vw"
//                                 alt="xperience"
//                                 className="pointer-events-none w-full h-auto relative z-10 opacity-40"
//                                 style={{
//                                     filter: "brightness(100%) grayscale(0%)",
//                                     maskImage:
//                                         "linear-gradient(to top, transparent 0%, var(--primary) 100%)",
//                                     WebkitMaskImage:
//                                         "linear-gradient(to top, transparent 0%, var(--primary) 100%)",
//                                 }}
//                             />

//                         {/* Simple Copyright */}
//                         <div className="flex justify-between items-center z-30 w-full">
//                             <div className="text-sm text-text-secondary  z-30">
//                                 © {new Date().getFullYear()} <span className="text-foreground">xperience</span>. All rights reserved.
//                             </div>
//                             <h1 className="text-sm text-text-secondary">asda</h1>
//                         </div>

//                     </div>

//                 </div>
//             </Container>
//         </footer>
//     );
// };

// export default Footer;

// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import {
// 	FacebookIcon,
// 	GithubIcon,
// 	InstagramIcon,
// 	LinkedinIcon,
// 	TwitterIcon,
// 	YoutubeIcon,
// } from "lucide-react";

// export default function Footer() {
// 	const company = [
// 		{
// 			title: "About Us",
// 			href: "#",
// 		},
// 		{
// 			title: "Careers",
// 			href: "#",
// 		},
// 		{
// 			title: "Brand assets",
// 			href: "#",
// 		},
// 		{
// 			title: "Privacy Policy",
// 			href: "#",
// 		},
// 		{
// 			title: "Terms of Service",
// 			href: "#",
// 		},
// 	];

// 	const resources = [
// 		{
// 			title: "Blog",
// 			href: "#",
// 		},
// 		{
// 			title: "Help Center",
// 			href: "#",
// 		},
// 		{
// 			title: "Contact Support",
// 			href: "#",
// 		},
// 		{
// 			title: "Community",
// 			href: "#",
// 		},
// 		{
// 			title: "Security",
// 			href: "#",
// 		},
// 	];

// 	const socialLinks = [
// 		{
// 			icon: FacebookIcon,
// 			link: "#",
// 		},
// 		{
// 			icon: GithubIcon,
// 			link: "#",
// 		},
// 		{
// 			icon: InstagramIcon,
// 			link: "#",
// 		},
// 		{
// 			icon: LinkedinIcon,
// 			link: "#",
// 		},
// 		{
// 			icon: TwitterIcon,
// 			link: "#",
// 		},
// 		{
// 			icon: YoutubeIcon,
// 			link: "#",
// 		},
// 	];
// 	return (
// 		<footer className="relative">
// 			<div
// 				className={cn(
// 					"mx-auto max-w-5xl lg:border-x",
// 				)}
// 			>
// 				{/* <div className="absolute inset-x-0 h-px w-full bg-border" /> */}
// 				<div className="grid max-w-5xl grid-cols-6 gap-6 p-4">
// 					<div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
// 						<a className="w-max" href="#">
// 							<div className="h-5 w-10 bg-red-300" />
// 						</a>
// 						<p className="max-w-sm text-balance font-mono text-muted-foreground text-sm">
// 							A comprehensive financial technology platform.
// 						</p>
// 						<div className="flex gap-2">
// 							{socialLinks.map((item, index) => (
// 								<Button
// 									key={`social-${item.link}-${index}`}
// 									size="icon-sm"
// 									variant="outline"
// 								>
// 									<a href={item.link} target="_blank">
// 										<item.icon className="size-3.5" />
// 									</a>
// 								</Button>
// 							))}
// 						</div>
// 					</div>
// 					<div className="col-span-3 w-full md:col-span-1">
// 						<span className="text-muted-foreground text-xs">Resources</span>
// 						<div className="mt-2 flex flex-col gap-2">
// 							{resources.map(({ href, title }) => (
// 								<a
// 									className="w-max text-sm hover:underline"
// 									href={href}
// 									key={title}
// 								>
// 									{title}
// 								</a>
// 							))}
// 						</div>
// 					</div>
// 					<div className="col-span-3 w-full md:col-span-1">
// 						<span className="text-muted-foreground text-xs">Company</span>
// 						<div className="mt-2 flex flex-col gap-2">
// 							{company.map(({ href, title }) => (
// 								<a
// 									className="w-max text-sm hover:underline"
// 									href={href}
// 									key={title}
// 								>
// 									{title}
// 								</a>
// 							))}
// 						</div>
// 					</div>
// 				</div>

				
// 				<div className="flex max-w-4xl flex-col justify-between gap-2 py-4">
// 					<p className="text-center font-light text-muted-foreground text-sm">
// 						&copy; {new Date().getFullYear()} efferd, All rights reserved
// 					</p>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }


import Image from "next/image";
import Link from "next/link";
import Container from "./Container"; // Assuming this is a max-w-7xl mx-auto wrapper

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-zinc-400 border-t border-white/10 pt-20 pb-10">
      
      {/* --- Ambient Background Effects --- */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Green Glow (Your brand color) */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-900/40 opacity-50 blur-[120px] rounded-full pointer-events-none z-0" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-16">
          
          {/* --- Main Grid Layout --- */}
          {/* Changed from Flex to Grid for better vertical alignment */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8">
            
            {/* Column 1: Brand / Hero Link */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white tracking-tight">Everything by xperience</h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <Link href="/" className="transition-colors hover:text-green-400">
                    xperience
                  </Link>
                </li>
                <li>
                  <Link href="/" target="_blank" className="transition-colors hover:text-green-400">
                    xperience Blocks
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Components */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white tracking-tight">Components</h3>
              <ul className="flex flex-col gap-3 text-sm">
                {["Introduction", "Installation", "RTL Setup", "Roadmap", "Changelog"].map((item) => (
                  <li key={item}>
                    <Link href="/" className="transition-colors hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Pro Features */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white tracking-tight">Pro Features</h3>
              <ul className="flex flex-col gap-3 text-sm">
                {["xperience Blocks", "Pricing", "FAQ"].map((item) => (
                  <li key={item}>
                    <Link href="/" className="transition-colors hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Ecosystem */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white tracking-tight">Ecosystem</h3>
              <ul className="flex flex-col gap-3 text-sm">
                {["Discord Server", "Github", "Contact us"].map((item) => (
                  <li key={item}>
                    <Link href="/" target="_blank" className="transition-colors hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Technical & Legal */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white tracking-tight">Resources</h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li><Link href="/" className="transition-colors hover:text-white">llms.txt</Link></li>
                <li><Link href="/" className="transition-colors hover:text-white">Ikiform</Link></li>
                <li className="pt-4 font-medium text-white/60 text-xs uppercase tracking-wider">Legal</li>
                <li><Link href="/" className="transition-colors hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/" className="transition-colors hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* --- Bottom Logo Section --- */}
          <div className="relative mt-10 flex flex-col items-center">
            {/* Gradient Fade overlay to make the text look like it's emerging from the dark */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black to-transparent h-full w-full pointer-events-none" />
            
            <Image
              src="/svg/xperience.svg"
              width={0}
              height={0}
              sizes="100vw"
              alt="xperience"
              className="w-full max-w-5xl h-auto opacity-40 mix-blend-screen"
            />
            
            {/* Simple Copyright */}
            <div className="mt-8 text-xs text-zinc-600 font-medium z-30">
              © {new Date().getFullYear()} xperience. All rights reserved.
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;