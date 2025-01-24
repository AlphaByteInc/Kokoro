'use client';

import { Heart, MessageCircle, MessagesSquare } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export function MobileNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-gray-600 text-xs text-center flex-1">
          <Heart className={`h-5 w-5 mx-auto mb-0.5 ${pathname === '/' ? 'text-pink-500' : ''}`} />
          ホーム
        </Link>
        <Link href="/chat/consultation" className="text-gray-600 text-xs text-center flex-1">
          <MessagesSquare className={`h-5 w-5 mx-auto mb-0.5 ${pathname.startsWith('/chat') ? 'text-pink-500' : ''}`} />
          チャット相談
        </Link>
        <Link href="/posts/new" className="text-gray-600 text-xs text-center flex-1">
          <MessageCircle className={`h-5 w-5 mx-auto mb-0.5 ${pathname === '/posts/new' ? 'text-pink-500' : ''}`} />
          相談する
        </Link>
      </div>
    </div>
  );
}