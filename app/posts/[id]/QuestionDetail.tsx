"use client";

import { ArrowLeft, Heart, MessageCircle, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Reply } from '@/app/components/Reply';
import { ReplyForm } from '@/app/components/ReplyForm';
import { RelatedQuestions } from '@/app/components/RelatedQuestions';
import { useState } from 'react';
import { Reply as ReplyType } from '@/app/types/reply';

type TagColor = 'pink' | 'blue' | 'green' | 'purple' | 'orange';

interface Tag {
  label: string;
  color: TagColor;
}

export default function QuestionDetail({ params }: { params: { id: string } }) {
  // 実際のアプリケーションではIDを使用してデータを取得します
  const question = {
    tags: [
      { label: '恋愛相談', color: 'pink' as const },
      { label: 'LINE', color: 'blue' as const },
    ] as Tag[],
    title: '付き合って3ヶ月の彼氏からLINEの返信が遅くなってきました。不安です。',
    content:
      '最初は秒読みで返信が来ていたのに、最近は1時間以上かかることも。仕事が忙しいとは言っていますが、心配です。\n\n付き合い始めの頃は、私のLINEにすぐに返信してくれていて、とても嬉しかったです。でも、最近は既読がつくまでに時間がかかり、返信も遅くなってきました。\n\n彼は「仕事が忙しい」と言っていますが、SNSには投稿しているので、本当に忙しいのかな？と不安になっています。\n\nこれって、私に対する気持ちが冷めてきているサインでしょうか？それとも、関係が落ち着いてきただけ？\n\nどうすれば良いのか、アドバイスをいただけると嬉しいです。',
    timeAgo: '10分前',
    replyCount: 12,
    author: {
      username: 'sakura123',
      age: '24歳',
      status: '恋人あり',
    }
  };

  const [replies, setReplies] = useState<ReplyType[]>([
    {
      id: 'reply1',
      author: { username: 'maiko28', age: '28歳', status: '既婚' },
      content: '私も同じような経験がありました。最初は不安でしたが、お互いに慣れてきただけかもしれません。\n\n直接彼と話し合ってみるのはどうでしょうか？「最近忙しそうだけど大丈夫？」といった感じで、さりげなく聞いてみるのもいいかもしれません。',
      timeAgo: '5分前',
      likeCount: 15,
    },
    {
      id: 'reply2',
      author: { username: 'ayaka32', age: '32歳', status: '恋人あり' },
      content: '付き合い始めは誰でも熱が入りすぎるものです。落ち着いてきたのは、むしろ関係が安定してきた証拠かもしれませんよ。\n\nただし、不安な気持ちは大切にした方がいいと思います。タイミングを見て、お互いの気持ちを確認し合うといいですね。',
      timeAgo: '15分前',
      likeCount: 8,
      replyTo: { username: 'maiko28', id: 'reply1' }
    },
  ]);

  const handleReplySubmit = (newReply: ReplyType) => {
    setReplies(prev => [newReply, ...prev]);
  };

  const [replyTo, setReplyTo] = useState<{ username: string; id: string } | undefined>();

  const handleReply = (username: string, id: string) => {
    setReplyTo({ username, id });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 pb-20">
      {/* ヘッダー */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-base font-bold text-gray-900">相談詳細</h1>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="px-4 py-4">
        {/* タグ */}
        <div className="flex flex-wrap gap-1 mb-2">
          {question.tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-block bg-gradient-to-r ${
                tag.color === 'pink' ? 'from-pink-300/90 to-rose-200/90' :
                tag.color === 'blue' ? 'from-sky-300/90 to-indigo-200/90' :
                tag.color === 'green' ? 'from-emerald-300/90 to-lime-200/90' :
                tag.color === 'purple' ? 'from-fuchsia-300/90 to-purple-200/90' :
                'from-orange-300/90 to-amber-200/90'
              } text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* タイトルと投稿情報 */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-gray-900 mb-1">{question.title}</h2>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <span>{question.author.age}</span>
            <span>•</span>
            <span>{question.author.status}</span>
            <span>•</span>
            <span>{question.timeAgo}</span>
          </div>
        </div>

        {/* 本文 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border mb-6">
          <div className="p-4">
            <p className="text-xs text-gray-700 whitespace-pre-line leading-relaxed">
              {question.content}
            </p>
          </div>
          <div className="flex items-center justify-around py-3 border-t">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-pink-500 transition-colors">
              <Heart className="h-4 w-4" />
              <span className="text-xs">共感</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-pink-500 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs">返信</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-pink-500 transition-colors">
              <Share2 className="h-4 w-4" />
              <span className="text-xs">シェア</span>
            </button>
          </div>
        </div>

        {/* 返信フォーム */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border p-4">
          <ReplyForm
            replyTo={replyTo}
            onSubmit={handleReplySubmit}
            onCancelReply={() => setReplyTo(undefined)}
          />
        </div>

        {/* 返信一覧 */}
        <div className="mt-6">
          <h3 className="text-xs font-bold text-gray-900 mb-3">返信 {replies.length}件</h3>
          <div className="divide-y">
            {replies.map((reply, index) => (
              <Reply
                key={index}
                className="py-4 first:pt-0 last:pb-0"
                showBorder={false}
                {...reply}
                onReply={handleReply}
              />
            ))}
          </div>
        </div>
        
        
        {/* 関連する質問 */}
        <RelatedQuestions
          currentQuestionId={params.id}
          tags={question.tags}
        />
      </div>
    </div>
  );
}