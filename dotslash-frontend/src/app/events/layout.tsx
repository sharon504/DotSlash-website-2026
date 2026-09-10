import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | DotSlash \'26',
  description: 'Browse all upcoming DotSlash 2026 events',
  openGraph: {
    title: 'Events | DotSlash \'26',
    description: 'Browse all upcoming DotSlash 2026 events',
    type: 'website'
  }
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}