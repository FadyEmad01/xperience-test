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
import Loading from "@/app/[locale]/loading";
import { useIntro } from "@/components/context/ui-intro-provider";

export function Header({ session }: HeaderProps) {
	const scrolled = useScroll(100);
	const isMobile = useIsMobile();

	const user = session?.user;


	// const [hasLoaded, setHasLoaded] = useState(false);
	// Determine if we should animate based on session storage to prevent LCP hits on refresh
	// const [shouldAnimate, setShouldAnimate] = useState(false);

	const { hasLoaded, shouldAnimate } = useIntro();
	const [isMounted, setIsMounted] = useState(false);
	const [headerAnimationStarted, setHeaderAnimationStarted] = useState(false);

	// Calculate when header animations should start
	useEffect(() => {
		if (hasLoaded && shouldAnimate) {
			// Start header animations after intro completes + delay
			const timer = setTimeout(() => {
				setHeaderAnimationStarted(true);
			}, 300); // 300ms delay after intro completes

			return () => clearTimeout(timer);
		} else if (hasLoaded && !shouldAnimate) {
			// If intro was skipped, start immediately
			setHeaderAnimationStarted(true);
		}
	}, [hasLoaded, shouldAnimate]);

	const INITIAL_STYLE = shouldAnimate && !headerAnimationStarted
		? { opacity: 0 }
		: { opacity: 1 };

	const ANIMATE_STYLE = headerAnimationStarted || (!shouldAnimate && hasLoaded)
		? { opacity: 1 }
		: INITIAL_STYLE;

	// useEffect(() => {
	// 	setIsMounted(true);

	// 	// Check if user has already seen the animation in this session
	// 	const hasSeenAnimation = sessionStorage.getItem("xperience-intro-seen");

	// 	if (hasSeenAnimation) {
	// 		// If seen, load immediately without timer
	// 		setHasLoaded(true);
	// 		setShouldAnimate(false);
	// 	} else {
	// 		// If not seen, run animation and set flag
	// 		setShouldAnimate(true);
	// 		const timer = setTimeout(() => {
	// 			setHasLoaded(true);
	// 			sessionStorage.setItem("xperience-intro-seen", "true");
	// 		}, 2200);
	// 		return () => clearTimeout(timer);
	// 	}
	// }, []);

	useEffect(() => {
		setIsMounted(true);
	},[])

	if (!isMounted) return Loading()

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
								transition={{ duration: 0.6, delay: headerAnimationStarted ? 0 : 0.1 }}

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
											transition={{ duration: 0.6, delay: headerAnimationStarted ? 0.1 : 0.2 }}
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
									transition={{ duration: 0.6, delay: headerAnimationStarted ? 0.15 : 0.25 }}

									className="md:hidden"
								>
									<MobileNav session={session} />
								</motion.div>
								<motion.div
									initial={INITIAL_STYLE}
									animate={ANIMATE_STYLE}
									transition={{ duration: 0.6, delay: headerAnimationStarted ? 0.2 : 0.3 }}

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