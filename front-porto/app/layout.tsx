import type { Metadata, Viewport } from 'next';
import { getSiteUrl } from '@/lib/site';

import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL(getSiteUrl()),
    title: 'Santoso Nugroho | Full Stack Developer',
    description:
        'Portfolio Santoso Nugroho, a full stack developer building thoughtful, scalable, and performant digital products.',
    keywords: [
        'Santoso Nugroho',
        'Full Stack Developer',
        'Web Developer',
        'React',
        'Next.js',
        'TypeScript',
    ],
    authors: [{ name: 'Santoso Nugroho' }],
    creator: 'Santoso Nugroho',
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        siteName: 'Santoso Nugroho',
        title: 'Santoso Nugroho | Full Stack Developer',
        description:
            'Full stack developer crafting thoughtful, scalable, and performant digital products.',
    },
    twitter: {
        card: 'summary',
        title: 'Santoso Nugroho | Full Stack Developer',
        description:
            'Full stack developer crafting thoughtful, scalable, and performant digital products.',
    },
    icons: {
        icon: [
            {
                url: '/icons/SN_Favicon/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: '/icons/SN_Favicon/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
        ],
        apple: '/icons/SN_Favicon/apple-touch-icon.png',
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    themeColor: '#f5f5f7',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
