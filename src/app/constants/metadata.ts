import type { Metadata } from 'next';

export const siteConfig = {
  name: '1:1 Meeting Questions',
  description: 'Facilitate meaningful 1:1 meetings with structured questions and topics for better discussions.',
  url: 'https://dxheroes.io',
  ogImage: 'https://dxheroes.io/og-image.jpg',
} as const;

type GenerateMetadataProps = {
  title?: string;
  description?: string;
};

export function generateMetadata({ 
  title, 
  description = siteConfig.description 
}: GenerateMetadataProps): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description,
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      images: [siteConfig.ogImage],
    },
  };
} 