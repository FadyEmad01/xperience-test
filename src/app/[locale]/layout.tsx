import type { Metadata } from "next";
import { Almarai, Geist, Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/provider/theme-provider";
import "../../styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Banner from "@/components/layout/Banner";
import { Header } from "@/components/layout/header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { siteConfig } from "@/lib/site";
import { BannerProvider } from "@/components/context/banner-context";
import LenisProvider from "@/components/provider/LenisProvider";
import { IntroProvider } from "@/components/context/ui-intro-provider";
import Footer from "@/components/layout/Footer";
import { GradualBlur } from "@/components/layout/GradualBlur";


const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-ar",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-en",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "meta" });

  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const title = t("title");
  const description = t("description");
  const ogImageUrl = new URL(`/${locale}/og-image.png`, baseUrl).toString();
  // const ogImageUrl = '/og-image.png'

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    icons: [
      {
        rel: 'icon',
        type: 'image/ico',
        sizes: '32x32',
        url: '/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/android-chrome-512x512.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon.png',
      },
    ],
    keywords: [
      'Learning',
      'Figma',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    openGraph: {
      title,
      description,
      // url: `${baseUrl}/${locale}`,
      url: ogImageUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale,
      alternateLocale: siteConfig.locales.filter((l) => l !== locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // images: [siteConfig.ogImage],
      images: [ogImageUrl],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Ensure that the incoming locale is valid
  // if (!routing.locales.includes(locale as any)) {
  //   notFound();
  // }

  // Providing all messages to the client side is the 
  // easiest way to get started
  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction} className={inter.variable} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${almarai.variable} antialiased dark`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        > */}
        <NextIntlClientProvider messages={messages} locale={locale}>
          <LenisProvider>
            <IntroProvider>
              <BannerProvider>
                <Banner />
                <Header session={session} />
                {children}
                <GradualBlur
                  preset="intense"
                  target="page"
                  position="bottom"
                  // height="6rem"
                  height="3rem"
                  strength={2}
                  divCount={5}
                  opacity={1}
                />
                <Footer />
                {/* <Footer />
                <Footer2 />
                <Footer3 />
                <Footer4 /> */}
              </BannerProvider>
            </IntroProvider>
          </LenisProvider>
        </NextIntlClientProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
