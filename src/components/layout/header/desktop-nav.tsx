import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CompanyLinks, LearnLinks, OpportunitiesLinks } from "./nav-links";
import { LinkItem } from "./sheard";
import { useTranslations } from "next-intl";

export function DesktopNav() {
	const t = useTranslations("navbar");
	return (
		<NavigationMenu className="hidden md:flex isolate">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent focus:bg-transparent">
						{t("learn")}
					</NavigationMenuTrigger>
					<NavigationMenuContent className="bg-background p-1.5
				
					">
						<div className="grid w-lg grid-cols-2 gap-2 rounded-lg border bg-popover p-2 shadow">
							{LearnLinks.map((item, i) => (
								<NavigationMenuLink
									asChild
									className="w-full flex-row gap-x-2"
									key={`item-${item.label}-${i}`}
								>
									<LinkItem {...item} />
								</NavigationMenuLink>
							))}
						</div>
						<div className="p-2">
							<p className="text-muted-foreground text-sm">
								Interested?{" "}
								<a
									className="font-medium text-foreground hover:underline"
									href="#"
								>
									Schedule a demo
								</a>
							</p>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent focus:bg-transparent ">
						{t("opportunities")}
					</NavigationMenuTrigger>
					<NavigationMenuContent className="p-1.5
					bg-background
				">
						<div className="grid w-lg grid-cols-2 gap-2 rounded-lg border bg-popover p-2 shadow">

							{OpportunitiesLinks.map((item, i) => (
								<NavigationMenuLink
									asChild
									className="w-full flex-row gap-x-2"
									key={`item-${item.label}-${i}`}
								>
									<LinkItem {...item} />
								</NavigationMenuLink>
							))}

						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent focus:bg-transparent ">
						{t("company")}
					</NavigationMenuTrigger>
					<NavigationMenuContent className="p-1.5
					bg-background
				">
						<div className="grid w-lg grid-cols-2 gap-2 rounded-lg border bg-popover p-2 shadow">

							{CompanyLinks.map((item, i) => (
								<NavigationMenuLink
									asChild
									className="w-full flex-row gap-x-2"
									key={`item-${item.label}-${i}`}
								>
									<LinkItem {...item} />
								</NavigationMenuLink>
							))}

						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
