// https://nextjs.org/learn/dashboard-app/optimizing-fonts-images#adding-a-primary-font
// This imports the Inter font from Google Fonts, with the latin subset.
// import { Inter } from 'next/font/google';

// https://nextjs.org/learn/dashboard-app/optimizing-fonts-images#practice-adding-a-secondary-font
// I had to reveal the solution for this one... I was able to work the subset, since it was litearlly the same thing as the Inter, but didn't know how to add the weight.
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});