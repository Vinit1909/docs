"use client";

import { ReactNode } from "react";
import { ConvexReactClient, Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { ClerkProvider, useAuth, SignIn } from "@clerk/nextjs"
import { FullScreenLoader } from "./fullscreen-loader";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
            <ConvexProviderWithClerk
                useAuth={useAuth}
                client={convex}
            >
                <Authenticated>
                    {children}
                </Authenticated>
                <Unauthenticated>
                    <div className="flex flex-col items-center justify-center min-h-screen">
                        <div className="flex justify-center items-center mb-4">
                            <img alt="logo" src="/logo.svg" className="mr-2 w-12 h-12" />
                        </div>
                        <SignIn routing="hash" />
                    </div>
                </Unauthenticated>
                <AuthLoading>
                    <FullScreenLoader label="Auth loading..." />
                </AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}