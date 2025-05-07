import React from "react";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <main className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            {children}
        </main>
    );
}
