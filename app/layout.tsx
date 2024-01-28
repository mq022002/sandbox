// https://nextjs.org/learn/dashboard-app/css-styling#global-styles
// This adds global CSS styles to your application. Typically best to apply it to a top-level component, similar to the "base.html" in Django projects.
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
