// https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages#creating-the-dashboard-layout
import SideNav from '@/app/ui/dashboard/sidenav';

// Pages within the dashboard app/dashboard directory will be nested within this layout. This is like a "base.html" template in Django, but if you had one in a specific app.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}