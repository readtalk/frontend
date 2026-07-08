export function Layout({ children }: { children: React.ReactNode }) {
    // Register service worker untuk PWA
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(() => console.log('✅ Service Worker registered'))
                .catch((err) => console.log('❌ Service Worker registration failed:', err));
        }
    }, []);

    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            {/* 🔥 TAMBAHKAN INI: FALLBACK UNTUK ADDRESS BAR */}
            <meta name="theme-color" content="#ffffff" />
            
            <Meta />
            <Links />
        </head>
        <body className="bg-neutral-50 text-base text-neutral-900 antialiased transition-colors selection:bg-blue-700 selection:text-white dark:bg-neutral-950 dark:text-neutral-100">
            {children}
            <ScrollRestoration />
            <Scripts />
        </body>
        </html>
    );
}
