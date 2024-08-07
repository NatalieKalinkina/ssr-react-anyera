import './globals.css';
import { inter } from '@/app/ui/fonts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'DRIVERAVE',
  description: 'Аренда жилья и автомобилей от владельцев'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
