import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/header/use-media-query";
import { cn } from "@/lib/utils";
// import { MenuIcon, XIcon } from "lucide-react";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { LinkItem } from "./sheard";
import { MenuIcon } from "@/components/animation/icons/MenuIcon";
import { HeaderProps } from "@/types/header";
import { useBanner } from "@/components/context/banner-context";
import { CompanyLinks, LearnLinks, OpportunitiesLinks } from "./nav-links";


export function MobileNav({ session }: HeaderProps) {
	const { isMobile } = useMediaQuery();
	const user = session?.user;
	const [open, setOpen] = React.useState(false);

	const { isVisible } = useBanner();


	// Disable body scroll when open
	useEffect(() => {
		if (open && isMobile) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		// Cleanup on unmount too
		return () => {
			document.body.style.overflow = "";
		};
	}, [open, isMobile]);

	return (
		<>
			{/* <Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="md:hidden"
				onClick={() => setOpen(!open)}
				size="icon"
				variant="outline"
			>
				<div
					className={cn(
						"transition-all",
						open ? "scale-100 opacity-100" : "scale-0 opacity-0"
					)}
				>
					<XIcon aria-hidden="true" className="size-4.5" />
				</div>
				<div
					className={cn(
						"absolute transition-all",
						open ? "scale-0 opacity-0" : "scale-100 opacity-100"
					)}
				>
					<MenuIcon aria-hidden="true" className="size-4.5" />
				</div>
			</Button> */}
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="md:hidden"
				onClick={() => setOpen(!open)}
				size="icon"
				variant="outline"
			>
				<MenuIcon toggled={open} />
			</Button>
			{open &&
				createPortal(
					<div
						data-lenis-prevent
						className={cn(
							"bg-background/95 backdrop-blur-xl supports-backdrop-filter:bg-background/50",
							"fixed right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t md:hidden",
							isVisible ? "top-32" : "top-18"
						)}
						id="mobile-menu"
					>
						<div
							className={cn(
								"data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
								"size-full overflow-y-auto overflow-x-hidden p-4"
							)}
							data-slot={open ? "open" : "closed"}
						>
							<div className="flex w-full flex-col gap-y-2">
								<span className="text-sm">Learn</span>
								{LearnLinks.map((link) => (
									<LinkItem key={`Learn-${link.label}`} {...link} />
								))}
								<span className="text-sm">Company</span>
								{OpportunitiesLinks.map((link) => (
									<LinkItem key={`Opportunities-${link.label}`} {...link} />
								))}
								<span className="text-sm">Company</span>
								{CompanyLinks.map((link) => (
									<LinkItem key={`company-${link.label}`} {...link} />
								))}
							</div>
							{user ? null : (
								<>
									<div className="mt-5 flex flex-col gap-2">
										<Button className="w-full" variant="outline">
											Sign In
										</Button>
										<Button className="w-full btn-primary">Get Started</Button>
									</div>
								</>
							)}

						</div>
					</div>,
					document.body
				)}
		</>
	);
}
