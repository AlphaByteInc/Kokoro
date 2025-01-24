import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-pink-500" />
          <span className="text-xl font-bold text-gray-900">ココロの相談室</span>
        </Link>
      </div>
      <div className="container max-w-md mx-auto p-4">{children}</div>
    </div>
  );
}