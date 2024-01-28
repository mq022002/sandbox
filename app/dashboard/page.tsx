// https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages#creating-the-dashboard-page
// URL routing is actually crazy simple. It just takes the structure of your project's files, and maps that to URLs.
// export default function Page() {
//     return <p>Dashboard Page</p>;
//   }

// https://nextjs.org/learn/dashboard-app/fetching-data#fetching-data-for-the-dashboard-overview-page
// Page is now an async component, using "await" to fetch data. Commented out code for "Card", "RevenueChart", and "LatestInvoices" will cause errors at the moment.
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// https://nextjs.org/learn/dashboard-app/fetching-data#fetching-data-for-revenuechart
// Fetching data for RevenueChart
import { fetchRevenue } from '@/app/lib/data';
 
export default async function Page() {
  // Call fetchRevenue() inside of our component
  const revenue = await fetchRevenue();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}