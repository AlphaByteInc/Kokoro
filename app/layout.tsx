import './globals.css';
import type { Metadata } from 'next';
import { FooterWrapper } from './components/FooterWrapper';
import { M_PLUS_Rounded_1c } from 'next/font/google';

const mplus = M_PLUS_Rounded_1c({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ココロの相談室 | 女性のための恋愛相談サイト',
  description: '女性のための安心できる恋愛相談コミュニティ。匿名で相談できます。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={mplus.className}>
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}