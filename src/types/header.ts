export type HeaderProps = {
  session: Awaited<ReturnType<typeof import("@/lib/auth").auth.api.getSession>>;
};