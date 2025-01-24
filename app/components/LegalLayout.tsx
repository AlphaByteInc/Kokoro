'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function LegalLayout({ children, title }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-lg font-bold text-gray-900">{title}</h1>
          </div>
        </div>
      </div>
      <div className="container max-w-2xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-sm p-6 prose prose-pink max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}