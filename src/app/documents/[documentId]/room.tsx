"use client";

import { ReactNode } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
    const params = useParams();

    return (
        <LiveblocksProvider publicApiKey={"pk_dev_wkkrOjrnoRB9_BYxlUtZ3QnK8ElbvLK5FTAQTbmTdnrgIDFtN2SWA3FVxDihrbVT"}>
            <RoomProvider id={params.documentId as string}>
                <ClientSideSuspense fallback={<div>Loading…</div>}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}