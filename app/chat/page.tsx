'use client';

import { Header } from '@/app/components/Header';
import { MobileNavigation } from '@/app/components/MobileNavigation';
import { MessageCircle, Heart, Star, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';

const COUNSELORS = [
  {
    id: 1,
    type: 'ai',
    name: '青山 理沙',
    title: '分析派カウンセラー',
    experience: '100,000件以上',
    rating: 4.9,
    reviewCount: 328,
    specialties: ['客観的分析', '行動戦略', 'マインドフルネス'],
    status: 'online',
  },
  {
    id: 2,
    type: 'human',
    name: '田中 美咲',
    title: '恋愛カウンセラー',
    experience: '10年',
    rating: 4.7,
    reviewCount: 1205,
    specialties: ['復縁', '片思い', '婚活'],
    status: 'online',
  },
  {
    id: 3,
    type: 'human',
    name: '佐藤 由美',
    title: '心理カウンセラー',
    experience: '8年',
    rating: 4.8,
    reviewCount: 256,
    specialties: ['男性心理', '恋愛不安', '自己肯定感'],
    status: 'offline',
  },
];

export default function ChatPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 pb-20">
      <Header />

      <div className="px-4 py-6">
        {/* ヒーローセクション */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center space-y-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-400 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 mb-2">
              チャット相談
            </h1>
            <p className="text-sm text-gray-600">
              プロのカウンセラーがあなたの恋愛の悩みに寄り添います。
              24時間いつでも、匿名で安心してご相談いただけます。
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => router.push('/chat/consultation')}
              className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
            >
              相談を始める
            </button>
          </div>
        </div>

        {/* おすすめカウンセラー */}
        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-4">
            おすすめのカウンセラー
          </h2>
          <div className="space-y-4">
            {COUNSELORS.map((counselor) => (
              <button
                key={counselor.id}
                onClick={() => router.push('/chat/consultation')}
                className="w-full bg-white/80 backdrop-blur-sm rounded-xl border p-4 text-left hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-rose-500 transition-colors">
                      {counselor.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-xs text-gray-600">{counselor.title}</p>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        counselor.type === 'ai'
                          ? 'bg-gradient-to-r from-blue-300/90 to-indigo-200/90 text-white shadow-sm'
                          : 'bg-gradient-to-r from-pink-300/90 to-rose-200/90 text-white shadow-sm'
                      }`}>
                        {counselor.type === 'ai' ? 'AI' : '人間'}
                      </span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    counselor.status === 'online' 
                      ? 'bg-gradient-to-r from-emerald-300/90 to-lime-200/90 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {counselor.status === 'online' ? 'オンライン' : 'オフライン'}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>経験{counselor.experience}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                    <span>{counselor.rating}</span>
                    <span className="ml-1">({counselor.reviewCount}件)</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 特徴紹介 */}
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-4">
            サービスの特徴
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border p-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-400 rounded-full flex items-center justify-center mb-3">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">プロの相談員</h3>
              <p className="text-xs text-gray-600">
                経験豊富なカウンセラーが対応
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border p-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-400 rounded-full flex items-center justify-center mb-3">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">24時間対応</h3>
              <p className="text-xs text-gray-600">
                いつでも気軽に相談可能
              </p>
            </div>
          </div>
        </div>
      </div>

      <MobileNavigation />
    </div>
  );
}