'use client';

import { LegalLayout } from '../components/LegalLayout';
import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('general');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    console.log({ name, email, category, message });
  };

  return (
    <LegalLayout title="お問い合わせ">
      <div className="max-w-xl mx-auto">
        <p className="text-sm text-gray-600 mb-6">
          ご質問やご要望がございましたら、以下のフォームからお気軽にお問い合わせください。
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              お名前
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              メールアドレス
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              お問い合わせ種類
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="general">一般的なお問い合わせ</option>
              <option value="account">アカウントについて</option>
              <option value="report">不適切な投稿の報告</option>
              <option value="bug">バグの報告</option>
              <option value="suggestion">機能の提案</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              お問い合わせ内容
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent min-h-[200px]"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors"
            >
              送信する
            </button>
          </div>
        </form>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-900 mb-2">
            お問い合わせの前に
          </h3>
          <p className="text-sm text-gray-600">
            お問い合わせの前に
            <a href="/help" className="text-pink-600 hover:text-pink-700">
              ヘルプページ
            </a>
            もご確認ください。よくある質問への回答が見つかるかもしれません。
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}