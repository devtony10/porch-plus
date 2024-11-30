import { Metadata } from 'next';

import '@/styles/globals.css';
import '@/styles/styles.barrel';

import Nav from '@/modules/layout/templates/nav'

// This is for demo purposes, remove @/styles/colors.css import immediately

import { siteConfig } from '@/lib/config';

// Change these default meta
// Look at @/constants/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    creator: '',
  },
  authors: [
    {
      name: '',
      url: '',
    },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en' data-mode='light'>
      <body>
        <Nav />
        <main className='relative'>{props.children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
