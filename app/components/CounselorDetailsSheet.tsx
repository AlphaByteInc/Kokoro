'use client';

import { Clock, Star, X } from 'lucide-react';
import { Counselor } from '@/app/types/counselor';
import { Review } from '@/app/types/review';
import { ReviewList } from './ReviewList';
import { useState } from 'react';

const SAMPLE_REVIEWS: Review[] = [
  {
    id: 1,
    userId: 'user1',
    username: 'まりこ',
    rating: 5,
    content: 'とても丁寧に話を聞いてくださり、的確なアドバイスをいただけました。悩みが整理できて気持ちが楽になりました。',
    date: '2024/03/15',
    helpful: 12,
  },
  {
    id: 2,
    userId: 'user2',
    username: 'さくら',
    rating: 4,
    content: '客観的な視点からアドバイスをくださり、新しい気づきがありました。また相談したいと思います。',
    date: '2024/03/10',
    helpful: 8,
  },
  {
    id: 3,
    userId: 'user3',
    username: 'ゆみこ',
    rating: 5,
    content: '親身になって話を聞いてくださり、具体的な行動プランまで提案していただけました。実践してみようと思います。',
    date: '2024/03/05',
    helpful: 15,
  },
];

interface CounselorDetailsSheetProps {
  counselor: Counselor | null;
  isOpen: boolean;
  onClose: () => void;
  onSelect: () => void;
}

export function CounselorDetailsSheet({ counselor, isOpen, onClose, onSelect }: CounselorDetailsSheetProps) {
  if (!counselor || !isOpen) return null;

  const [showAllReviews, setShowAllReviews] = useState(false);
  const displayedReviews = showAllReviews ? SAMPLE_REVIEWS : SAMPLE_REVIEWS.slice(0, 2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity">
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[90vh] overflow-y-auto transition-transform transform">
        <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-900">カウンセラー詳細</h2>
          <button onClick={onClose} className="text-gray-500">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4 space-y-6">
          {/* プロフィール情報 */}
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{counselor.name}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm text-gray-600">{counselor.title}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    counselor.type === 'ai'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-pink-100 text-pink-800'
                  }`}>
                    {counselor.type === 'ai' ? 'AI' : '人間'}
                  </span>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                counselor.status === 'online' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {counselor.status === 'online' ? 'オンライン' : 'オフライン'}
              </span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>経験{counselor.experience}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span>{counselor.rating}</span>
                <span className="ml-1">({counselor.reviewCount}件)</span>
              </div>
            </div>
          </div>

          {/* カウンセリングスタイル */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-2">カウンセリングスタイル</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {counselor.personality}
            </p>
          </div>

          {/* 得意分野 */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-2">得意分野</h4>
            <div className="flex flex-wrap gap-2">
              {counselor.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* レビューサマリー */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-2">ユーザーレビュー</h4>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <span className="text-lg font-bold text-gray-900">{counselor.rating}</span>
                <span className="text-sm text-gray-500">/ 5.0</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {counselor.reviewCount}件のレビュー
              </p>
            </div>
            <ReviewList reviews={displayedReviews} />
            {!showAllReviews && SAMPLE_REVIEWS.length > 2 && (
              <button
                onClick={() => setShowAllReviews(true)}
                className="w-full text-sm text-pink-500 hover:text-pink-600 mt-4"
              >
                すべてのレビューを表示
              </button>
            )}
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t p-4">
          <button
            onClick={onSelect}
            className="w-full bg-pink-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-pink-600 transition-colors"
          >
            このカウンセラーを選択
          </button>
        </div>
      </div>
    </div>
  );
}