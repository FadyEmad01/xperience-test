'use client';

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {t("eyebrow")}
      </p>
      <h1 className="mb-3 text-3xl font-semibold sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mb-6 max-w-md text-sm text-muted-foreground sm:text-base">
        {t("description")}
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
      >
        {t("cta")}
      </button>
    </main>
  );
}

