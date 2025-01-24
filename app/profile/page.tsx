'use client';

import { Header } from '@/app/components/Header';
import { MobileNavigation } from '@/app/components/MobileNavigation';
import { Settings, Heart, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { QuestionCard } from '../components/QuestionCard';
import { Reply } from '../components/Reply';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'posts' | 'replies' | 'likes'>('posts');

  const user = {
    username: 'sakura123',
    age: '24歳',
    status: '恋人あり',
    joinedDate: '2024年1月',
    stats: {
      posts: 12,
      replies: 48,
      likes: 156
    }
  };

  const posts = [
    {
      id: '1',
      tags: [
        { label: '恋愛相談', color: 'pink' as const },
        { label: 'LINE', color: 'blue' as const },
      ],
      title: '付き合って3ヶ月の彼氏からLINEの返信が遅くなってきました...',
      content: '最初は秒読みで返信が来ていたのに、最近は1時間以上かかることも...',
      timeAgo: '2日前',
      replyCount: 12,
    },
  ];

  const replies = [
    {
      id: 'reply1',
      postId: '123',
      author: { username: user.username, age: user.age, status: user.status },
      content: '同じような経験があります。時間をかけて話し合うことが大切だと思います...',
      timeAgo: '1週間前',
      likeCount: 5,
    }
  ];

  const likes = [
    {
      id: '2',
      tags: [
        { label: '婚活', color: 'green' as const },
        { label: '初デート', color: 'blue' as const },
      ],
      title: '婚活パーティーで知り合った方と、次のデートをどう進めればいいですか？',
      content: '先週の婚活パーティーで素敵な方と出会い、連絡先を交換しました...',
      timeAgo: '3日前',
      replyCount: 8,
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <div className="space-y-4">
            {posts.map(post => <QuestionCard key={post.id} {...post} />)}
          </div>
        );
      case 'replies':
        return (
          <div className="divide-y border-t border-b">
            {replies.map(reply => <Reply key={reply.id} {...reply} />)}
          </div>
        );
      case 'likes':
        return (
          <div className="space-y-4">
            {likes.map(post => <QuestionCard key={post.id} {...post} />)}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />

      <div className="bg-white">
        <div className="px-4 py-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-lg font-bold text-gray-900 mb-1">{user.username}</h1>
              <div className="text-sm text-gray-500 space-x-2">
                <span>{user.age}</span>
                <span>•</span>
                <span>{user.status}</span>
              </div>
            </div>
            <Link
              href="/profile/settings"
              className="text-gray-500 hover:text-gray-700"
            >
              <Settings className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex justify-between text-center mt-6">
            <button
              onClick={() => setActiveTab('posts')}
              className={`flex-1 pb-3 border-b-2 transition-colors ${
                activeTab === 'posts' ? 'border-pink-500 text-pink-500' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="text-base font-bold">{user.stats.posts}</div>
              <div className="text-xs">相談</div>
            </button>
            <button
              onClick={() => setActiveTab('replies')}
              className={`flex-1 pb-3 border-b-2 transition-colors ${
                activeTab === 'replies' ? 'border-pink-500 text-pink-500' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="text-base font-bold">{user.stats.replies}</div>
              <div className="text-xs">返信</div>
            </button>
            <button
              onClick={() => setActiveTab('likes')}
              className={`flex-1 pb-3 border-b-2 transition-colors ${
                activeTab === 'likes' ? 'border-pink-500 text-pink-500' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="text-base font-bold">{user.stats.likes}</div>
              <div className="text-xs">共感</div>
            </button>
          </div>
        </div>
      </div>

      {/* タブコンテンツ */}
      <div className="px-4 py-4 bg-gray-50">
        {renderContent()}
      </div>

      <MobileNavigation />
    </div>
  );
}