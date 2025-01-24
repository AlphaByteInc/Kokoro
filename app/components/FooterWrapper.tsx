'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './Footer';

export function FooterWrapper() {
  const noFooterPaths = ['/posts/new'];
  const pathname = usePathname();
  const showFooter = !noFooterPaths.includes(pathname);

  if (!showFooter) {
    return null;
  }

  return <Footer />;
}