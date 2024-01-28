// https://nextjs.org/learn/dashboard-app/css-styling#global-styles
// This adds global CSS styles to your application. Typically best to apply it to a top-level component, similar to the "base.html" in Django projects.
import '@/app/ui/global.css';
// https://nextjs.org/learn/dashboard-app/optimizing-fonts-images#adding-a-primary-font
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Adding the Inter font here means that it will be applied throughout the application. */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
