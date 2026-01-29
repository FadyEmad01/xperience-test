import { createAuthClient } from "better-auth/client"
import { anonymousClient, magicLinkClient, } from "better-auth/client/plugins"

export const authClient = createAuthClient({
    baseURL: typeof window !== "undefined" ? window.location.origin : (process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000"),
    basePath: "/api/auth",
    plugins: [
        magicLinkClient(),
        anonymousClient()
    ] 
})