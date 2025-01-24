'use client';

import { Heart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  return (
    <div className="bg-white border-b">
      <div className="px-4 py-2">
        <div className="flex items-center h-12">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-7 w-7 text-pink-500" />
            <span className="text-lg font-bold text-gray-900">ココロの相談室</span>
          </Link>
        </div>
      </div>
    </div>
  );
}