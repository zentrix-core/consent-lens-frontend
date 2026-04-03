"use client";

import { useEffect } from "react";
export default function ExtensionSync() {
    useEffect(() => {
        // Mock sync
        window.postMessage({
            type: "CONSENTLENS_SYNC_ID",
            userId: "user-democonsentlens"
        }, "*");
    }, []);

    return null;
}
