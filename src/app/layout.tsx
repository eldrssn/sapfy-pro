import React from 'react';
import type { Metadata } from 'next';
import './global.scss';

export const metadata: Metadata = {
  title: 'Svetlana Bautina — UX/UI Designer',
  description:
    'Svetlana Bautina is an experienced UX/UI designer specializing in strategic design, product modernization, and globalization. Get comprehensive solutions in product design aimed at convenience and accessibility. Optimize user experience and increase conversion rates with professional UX/UI practices and modern methodologies.',
  keywords:
    'UX/UI designer, strategic design, product modernization, globalization, user experience, conversion, product design, sapfy, St. Petersburg, product designer, UX/UI training, UX/UI practice, design system, prototyping, app design, visual design, icon design, branding, identity, user experience',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="img/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="16x16"
          href="/img/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          href="/img/favicon-32x32.png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
