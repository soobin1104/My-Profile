import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
import Transitionprovider from './components/transitionProvider';

export const metadata = {
  title: '阿彬的个人网站',
  description: '阿彬的个人网站',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Transitionprovider>{children}</Transitionprovider>
      </body>
    </html>
  );
}
