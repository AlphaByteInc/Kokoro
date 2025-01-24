'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function EditProfilePage() {
  const [username, setUsername] = useState('sakura123');
  const [age, setAge] = useState('24');
  const [status, setStatus] = useState('恋人あり');
  const [bio, setBio] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile update logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/profile/settings" className="text-gray-600">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-lg font-bold text-gray-900">プロフィール編集</h1>
            </div>
            <button
              type="submit"
              form="profile-form"
              className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors"
            >
              保存
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <form id="profile-form" onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ユーザーネーム
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              年齢
            </label>
            <select
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                <option key={age} value={age}>
                  {age}歳
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              交際状況
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="恋人なし">恋人なし</option>
              <option value="恋人あり">恋人あり</option>
              <option value="既婚">既婚</option>
              <option value="その他">その他</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              自己紹介
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent min-h-[100px]"
              placeholder="自己紹介を入力（任意）"
              maxLength={200}
            />
            <p className="mt-1 text-sm text-gray-500 text-right">
              {bio.length}/200
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}