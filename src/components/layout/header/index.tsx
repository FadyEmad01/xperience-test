"use client";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/header/use-scroll";
import { cn } from "@/lib/utils";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'motion/react';
import { LogoAnimation } from "@/components/landing/animation/LogoAnimation";
import Link from "next/link";
import Container from "../Container";
import LangSwitcher from "../LangSwitcher";
import { HeaderProps } from "@/types/header";

export function Header({ session }: HeaderProps) {
	const scrolled = useScroll(100);
	const isMobile = useIsMobile();

	const user = session?.user;


	const [hasLoaded, setHasLoaded] = useState(false);
	// Determine if we should animate based on session storage to prevent LCP hits on refresh
	const [shouldAnimate, setShouldAnimate] = useState(false);
	const [isMounted, setIsMounted] = useState(false);



	const INITIAL_STYLE = shouldAnimate
		? { opacity: 0 }
		: { opacity: 1 };

	const ANIMATE_STYLE = hasLoaded
		? { opacity: 1 }
		: INITIAL_STYLE;

	useEffect(() => {
		setIsMounted(true);

		// Check if user has already seen the animation in this session
		const hasSeenAnimation = sessionStorage.getItem("xperience-intro-seen");

		if (hasSeenAnimation) {
			// If seen, load immediately without timer
			setHasLoaded(true);
			setShouldAnimate(false);
		} else {
			// If not seen, run animation and set flag
			setShouldAnimate(true);
			const timer = setTimeout(() => {
				setHasLoaded(true);
				sessionStorage.setItem("xperience-intro-seen", "true");
			}, 2200);
			return () => clearTimeout(timer);
		}
	}, []);

	// Prevent rendering things that rely on client-side state until mounted
	// if (!isMounted) return <div className="w-screen h-dvh bg-green-800 animate-pulse" />
	// if (!isMounted) return null
	if (!isMounted) return <div className="w-0 h-0 bg-background" />;

	return (
		<>
			<LazyMotion features={domAnimation}>
				<header
					className={cn("sticky top-0 z-50 w-full border-transparent border-b bg-transparent", scrolled && "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50")}
				>
					<Container>
						<nav className="mx-auto flex h-18 w-full  items-center justify-between ">
							<div className="flex items-center gap-5">
								<Link href="/">
									{/* <Logo className="h-4" /> */}
									{(hasLoaded || !shouldAnimate) && (
										<motion.div
											// layoutId={shouldAnimate ? "xperience-logo" : undefined}
											layoutId="xperience-logo"
											transition={{ type: 'spring', stiffness: 150, damping: 25 }}
											className="will-change-transform" // 5. GPU Acceleration Hint
										>
											<LogoAnimation size="sm" />
										</motion.div>
									)}
								</Link>

							</div>
							<motion.div
								initial={INITIAL_STYLE}
								animate={ANIMATE_STYLE}
								transition={{ duration: 0.6, delay: 1 }}

							>
								<DesktopNav />
							</motion.div>
							<div className="flex items-center gap-2">
								{user ? (
									<>
										<span className="text-sm text-muted-foreground">
											Hi, {user.name ?? user.email}
										</span>
										<Button variant="outline">Dashboard</Button>
									</>
								) : (
									<>
										<motion.div
											initial={INITIAL_STYLE}
											animate={ANIMATE_STYLE}
											transition={{ duration: 0.6, delay: 1 }}
											className="hidden md:flex"
										>
											<div className="hidden items-center gap-2 md:flex">
												{/* <Button variant="outline">Sign In</Button> */}
												<Button className="btn-primary">Get Started</Button>
											</div>
										</motion.div>
									</>
								)}


								<motion.div
									initial={INITIAL_STYLE}
									animate={ANIMATE_STYLE}
									transition={{ duration: 0.6, delay: 1 }}

									className="md:hidden"
								>
									<MobileNav session={session} />
								</motion.div>
								<motion.div
									initial={INITIAL_STYLE}
									animate={ANIMATE_STYLE}
									transition={{ duration: 0.6, delay: 1 }}

									className=""
								>
									<LangSwitcher />
								</motion.div>
							</div>
						</nav>
					</Container>

				</header>
				{/* 
                 Initial Loading Overlay:
                 - z-index is high to cover everything.
                 - layoutId matches the one in the header.
                 - When hasLoaded becomes true, this unmounts, and the logo 
                   morphs into the header position.
             */}
				<AnimatePresence mode="wait">
					{(!hasLoaded && shouldAnimate) && (
						<motion.div
							key="intro-overlay"
							className="fixed inset-0 z-100 flex items-center justify-center bg-background"
							// exit={{ opacity: 1 }}
							exit={{ opacity: 0 }} // Fade the background out
							transition={{ duration: 0.5 }}
						>
							<motion.div
								layoutId="xperience-logo"
								transition={{ type: 'spring', stiffness: 150, damping: 25 }}
								className="will-change-transform"
							>
								<LogoAnimation
									size={isMobile ? 'lg' : 'xl'}
									draw={true}
								/>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</LazyMotion>
		</>

	);
}