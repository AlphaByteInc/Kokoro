'use client';

import { User, Lock, ArrowLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center space-x-4">
            <Link href="/profile" className="text-gray-600">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-base font-bold text-gray-900">設定</h1>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* プロフィール設定 */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-3 border-b">
            <h2 className="text-sm font-bold text-gray-900">プロフィール設定</h2>
          </div>
          <div className="divide-y">
            <Link
              href="/profile/settings/edit-profile"
              className="flex items-center justify-between p-3 hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-xs text-gray-700">プロフィール編集</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
            <Link
              href="/profile/settings/password"
              className="flex items-center justify-between p-3 hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <Lock className="h-5 w-5 text-gray-400" />
                <span className="text-xs text-gray-700">パスワード変更</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
          </div>
        </div>

        {/* ログアウト */}
        <button
          className="w-full bg-white border rounded-lg p-3 text-red-500 text-xs font-medium hover:bg-red-50 transition-colors"
          onClick={() => {/* TODO: Implement logout */}}
        >
          ログアウト
        </button>
      </div>
    </div>
  );
}