// https://nextjs.org/learn/dashboard-app/navigating-between-pages#pattern-showing-active-links
// We need to turn nav-links.tsx into a client component. As it standas, usePathname() is a client-side specific feature.
'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
// https://nextjs.org/learn/dashboard-app/navigating-between-pages#the-link-component
// Allows for client-side navigation between pages, which makes it so that the entire page doesn't have to reload.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          // Replaced <a> tag with <Link> component.
          <Link
            key={link.name}
            href={link.href}
            // Through the use of the clsx library that I learning earlier, we can conditionally apply classes to the <Link> component based on the current URL.
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
