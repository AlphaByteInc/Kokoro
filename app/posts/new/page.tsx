'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { recommendTags } from '@/app/lib/tagRecommender';
import { ALL_TAGS } from '@/app/lib/tags';

export default function NewPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [recommendedTags, setRecommendedTags] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (title.length > 5 || content.length > 10) {
        const recommendations = recommendTags(title, content);
        setRecommendedTags(recommendations);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [title, content]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement post creation
    console.log({ title, content, selectedTags });
  };

  const toggleTag = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId)
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* ヘッダー */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-base font-bold text-gray-900">新しい相談</h1>
            </div>
            <button
              type="submit"
              form="post-form"
              className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-6 py-2 rounded-full text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-sm font-medium"
              disabled={!title || !content || selectedTags.length === 0}
            >
              投稿する
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <form id="post-form" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">タイトル</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              className="w-full px-3 py-2 bg-white/90 backdrop-blur-sm border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              placeholder="例：職場の好きな人に想いを伝えるべきか悩んでいます..."
              maxLength={100}
              required
            />
            <p className="mt-1 text-xs text-gray-500 text-right">
              {title.length}/100
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">相談内容</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              className="w-full px-3 py-2 bg-white/90 backdrop-blur-sm border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent min-h-[200px] text-sm leading-relaxed resize-none"
              placeholder="以下のポイントを参考に、具体的に書いてみましょう：

• 現在の状況
• 相手との関係
• 具体的な悩みや不安
• 理想の結果"
              required
            />
          </div>

          {/* タグ選択 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">
                タグを選択
                <span className="text-gray-500 text-xs ml-1">（最大5つまで）</span>
              </label>
              {selectedTags.length > 0 && (
                <span className="text-xs text-gray-500">
                  {selectedTags.length}/5
                </span>
              )}
            </div>

            {/* おすすめタグ */}
            {recommendedTags.length > 0 && (
              <div className="mb-6">
                <p className="text-xs text-gray-600 mb-2">
                  💡 内容から推測されるタグ
                </p>
                <div className="flex flex-wrap gap-2">
                  {recommendedTags.map(tagId => {
                    const tag = ALL_TAGS.find(t => t.id === tagId);
                    if (!tag) return null;
                    return (
                      <button
                        key={tagId}
                        type="button"
                        onClick={() => toggleTag(tagId)}
                        disabled={selectedTags.length >= 5 && !selectedTags.includes(tagId)}
                        className={`px-2 py-0.5 rounded-full text-[10px] transition-all ${
                          selectedTags.includes(tagId)
                            ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-sm'
                            : 'bg-pink-100 text-pink-800 hover:bg-pink-200 hover:shadow-sm'
                        } ${
                          selectedTags.length >= 5 && !selectedTags.includes(tagId)
                            ? 'opacity-50 cursor-not-allowed'
                            : ''
                        }`}
                      >
                        {tag.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 全タグ一覧 */}
            <div className="space-y-4">
              {[
                { title: '基本', tags: ALL_TAGS.slice(0, 8) },
                { title: '状況', tags: ALL_TAGS.slice(8, 16) },
                { title: '感情', tags: ALL_TAGS.slice(16, 24) },
                { title: 'その他', tags: ALL_TAGS.slice(24) },
              ].map(group => (
                <div key={group.title}>
                  <h3 className="text-xs font-medium text-gray-600 mb-2">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map(tag => (
                      <button
                        key={tag.id}
                        type="button"
                        onClick={() => toggleTag(tag.id)}
                        disabled={selectedTags.length >= 5 && !selectedTags.includes(tag.id)}
                        className={`px-2 py-0.5 rounded-full text-[10px] transition-all ${
                          selectedTags.includes(tag.id)
                            ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-sm'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                        } ${
                          selectedTags.length >= 5 && !selectedTags.includes(tag.id)
                            ? 'opacity-50 cursor-not-allowed'
                            : ''
                        }`}
                      >
                        {tag.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}