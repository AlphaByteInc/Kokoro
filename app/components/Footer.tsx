'use client';

import { Heart } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center space-x-2 mb-2">
            <Heart className="h-6 w-6 text-pink-500" />
            <span className="text-lg font-bold text-gray-900">ココロの相談室</span>
          </Link>
          <p className="text-sm text-gray-500">女性のための安心できる恋愛相談コミュニティ</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/posts/new" className="text-xs text-gray-600 hover:text-pink-500">
                  相談する
                </Link>
              </li>
              <li>
                <Link href="/tags" className="text-xs text-gray-600 hover:text-pink-500">
                  タグ一覧
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3">サポート</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-xs text-gray-600 hover:text-pink-500">
                  ヘルプ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-gray-600 hover:text-pink-500">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3">法的情報</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-xs text-gray-600 hover:text-pink-500">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-xs text-gray-600 hover:text-pink-500">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} ココロの相談室. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}