'use client';

import { Filter, Search, Tag, X } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { MobileNavigation } from './components/MobileNavigation';
import { QuestionCard } from './components/QuestionCard';
import { FilterModal, Filters } from './components/FilterModal';
import { ALL_TAGS } from './lib/tags';
import { useState } from 'react';
import Link from 'next/link';

const SAMPLE_QUESTIONS = [
  {
    id: '1',
    tags: [
      { label: '片思い', color: 'pink' as const },
      { label: '職場恋愛', color: 'blue' as const },
    ],
    title: '職場の好きな人に想いを伝えるべきか悩んでいます...',
    content: '同じ部署の先輩に好意を持ってしまいました。でも、職場恋愛は難しいと聞くので...',
    timeAgo: '3分前',
    replyCount: 5,
  },
  {
    id: '2',
    tags: [
      { label: '恋愛相談', color: 'pink' as const },
      { label: 'LINE', color: 'blue' as const },
    ],
    title: '付き合って3ヶ月の彼氏からLINEの返信が遅くなってきました。不安です。',
    content:
      '最初は秒読みで返信が来ていたのに、最近は1時間以上かかることも。仕事が忙しいとは言っていますが、心配です...',
    timeAgo: '10分前',
    replyCount: 12,
  },
  {
    id: '3',
    tags: [
      { label: '婚活', color: 'green' as const },
      { label: '初デート', color: 'blue' as const },
    ],
    title: '婚活パーティーで知り合った方と、次のデートをどう進めればいいですか？',
    content:
      '先週の婚活パーティーで素敵な方と出会い、連絡先を交換しました。次のデートに誘いたいのですが...',
    timeAgo: '2時間前',
    replyCount: 8,
  },
  {
    id: '4',
    tags: [
      { label: '復縁', color: 'purple' as const },
      { label: '気持ち', color: 'pink' as const },
    ],
    title: '1年前に別れた元カレとの復縁を考えています',
    content: 'お互い成長して、また出会い直せたら...という気持ちが大きくなってきました。',
    timeAgo: '3時間前',
    replyCount: 24,
  },
  {
    id: '5',
    tags: [
      { label: '告白', color: 'orange' as const },
      { label: '脈あり', color: 'green' as const },
    ],
    title: '好きな人からの好意のサインかもしれない行動リスト',
    content: '最近、気になる人の行動が変わってきて、もしかしたらと思うことが...',
    timeAgo: '5時間前',
    replyCount: 42,
  },
];

export default function Home() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    sort: 'popular',
    tags: [],
    timeRange: 'all',
    status: 'all'
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          恋愛の悩み、
          <br />
          みんなで解決。
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Z世代の恋愛相談コミュニティ
        </p>
        <Link
          href="/posts/new"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-400 text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
        >
          <MessageCircle className="h-4 w-4" />
          <span>相談してみる</span>
        </Link>
      </div>

      <div className="px-4 pt-4">
        {/* 検索バー */}
        <div className="relative mb-3">
          <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full shadow-sm border">
            <Search className="h-5 w-5 text-gray-400 ml-4" />
            <input
              type="text"
              placeholder="相談を検索"
              className="w-full py-3 px-4 rounded-full focus:outline-none text-sm bg-transparent"
            />
          </div>
        </div>

        {/* カテゴリーフィルター */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border mb-4">
          <div className="p-3 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setFilters(prev => ({ ...prev, sort: 'popular' }))}
                  className={`px-2.5 py-1 rounded-full text-xs ${
                    filters.sort === 'popular'
                      ? 'bg-rose-400 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  人気
                </button>
                <button
                  onClick={() => setFilters(prev => ({ ...prev, sort: 'recent' }))}
                  className={`px-2.5 py-1 rounded-full text-xs ${
                    filters.sort === 'recent'
                      ? 'bg-rose-400 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  新着
                </button>
                <button
                  onClick={() => setFilters(prev => ({ ...prev, sort: 'unanswered' }))}
                  className={`px-2.5 py-1 rounded-full text-xs ${
                    filters.sort === 'unanswered'
                      ? 'bg-rose-400 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  未回答
                </button>
              </div>
              <button
                onClick={() => setIsFilterModalOpen(true)}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
              >
                <Filter className="h-4 w-4" />
                <span className="text-xs">絞り込み</span>
              </button>
            </div>
          </div>
          
          {/* アクティブなフィルターの表示 */}
          {(filters.tags.length > 0 || filters.timeRange !== 'all' || filters.status !== 'all') ? (
          <div className="p-3 flex flex-wrap gap-2">
            {filters.tags.map(tagId => {
              const tag = ALL_TAGS.find(t => t.id === tagId);
              if (!tag) return null;
              return (
                <button
                  key={tagId}
                  onClick={() => setFilters(prev => ({
                    ...prev,
                    tags: prev.tags.filter(id => id !== tagId)
                  }))}
                  className="inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-pink-300/90 to-rose-200/90 text-white text-xs shadow-sm"
                >
                  {tag.label}
                  <X className="h-3 w-3 ml-1" />
                </button>
              );
            })}
            {filters.timeRange !== 'all' && (
              <button
                onClick={() => setFilters(prev => ({ ...prev, timeRange: 'all' }))}
                className="inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-sky-300/90 to-indigo-200/90 text-white text-xs shadow-sm"
              >
                {filters.timeRange === '24h' ? '24時間以内' : 
                 filters.timeRange === '7d' ? '1週間以内' : 
                 filters.timeRange === '30d' ? '1ヶ月以内' : ''}
                <X className="h-3 w-3 ml-1" />
              </button>
            )}
            {filters.status !== 'all' && (
              <button
                onClick={() => setFilters(prev => ({ ...prev, status: 'all' }))}
                className="inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-emerald-300/90 to-lime-200/90 text-white text-xs shadow-sm"
              >
                {filters.status === 'solved' ? '解決済み' : '未解決'}
                <X className="h-3 w-3 ml-1" />
              </button>
            )}
            <button
              onClick={() => setFilters({
                sort: 'popular',
                tags: [],
                timeRange: 'all',
                status: 'all'
              })}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              フィルターをクリア
            </button>
          </div>
          ) : null}
        </div>

        {/* メインコンテンツ */}
        <div className="space-y-2.5">
          {SAMPLE_QUESTIONS.map((question, index) => (
            <QuestionCard key={index} {...question} />
          ))}
        </div>

        {/* トレンド */}
        <div className="mt-8">
          <h2 className="text-base font-bold text-gray-900 mb-4">🔥 トレンド</h2>
          <div className="flex overflow-x-auto pb-4 -mx-4 px-4 space-x-3 scrollbar-hide">
            {['#初デート', '#告白', '#LINE', '#脈あり'].map((tag) => (
              <div
                key={tag}
                className="flex-shrink-0 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 border text-xs text-gray-700"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <MobileNavigation />
      
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={setFilters}
        initialFilters={filters}
      />
    </div>
  );
}