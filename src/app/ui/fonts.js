import { Inter, Roboto } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-inter'
});

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

export const circe = localFont({
  src: [
    {
      path: './localFonts/Circe.ttf',
      weight: '400',
      style: 'normal'
    }
  ]
});

export const ceraPro = localFont({
  src: [
    {
      path: './localFonts/CeraPro-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './localFonts/CeraPro-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ]
});
