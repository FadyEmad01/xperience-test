import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/index";
import * as schema from "@/db/schema/index";
import { anonymous, magicLink } from "better-auth/plugins";
import { resend } from "./resend";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: schema
    }),
    baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
    basePath: "/api/auth",
    emailAndPassword: {
        enabled: true,
    },
    plugins: [
        magicLink({
            sendMagicLink: async ({ email, url }) => {
                await resend.emails.send({
                    from: process.env.EMAIL_FROM!,
                    to: email,
                    subject: "Sign in to your account",
                    html: `
              <div style="font-family: Arial, sans-serif">
                <h2>Sign in</h2>
                <p>Click the button below to sign in:</p>
                <a
                  href="${url}"
                  style="
                    display:inline-block;
                    padding:10px 16px;
                    background:#000;
                    color:#fff;
                    text-decoration:none;
                    border-radius:6px;
                  "
                >
                  Sign in
                </a>
                <p>If you didn’t request this, ignore this email.</p>
              </div>
            `,
                });
            },
        }),
        anonymous(
            {
                onLinkAccount: async ({ anonymousUser, newUser }) => {
                    // perform actions like moving the cart items from anonymous user to the new user
                }
            }
        ),
    ],
});