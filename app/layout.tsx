import type { Metadata } from 'next';
import { Layout } from '../components/Layout';

export const metadata: Metadata = {
  title: 'Custom Photo & Fridge Magnets | SnapStickSmile',
  description: 'Create personalized photo magnets from your favorite images. Premium print quality, durable magnet backing, fast shipping.',
  openGraph: {
    title: 'Custom Photo & Fridge Magnets',
    description: 'Personalized photo magnets. Premium quality & fast shipping.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
