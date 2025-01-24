'use client';

import { QuestionCard } from './QuestionCard';

interface RelatedQuestionsProps {
  currentQuestionId: string;
  tags: Array<{ label: string; color: 'pink' | 'blue' | 'green' | 'purple' | 'orange' }>;
}

export function RelatedQuestions({ currentQuestionId, tags }: RelatedQuestionsProps) {
  // 実際のアプリケーションでは、タグに基づいて関連する質問を取得します
  const relatedQuestions = [
    {
      id: '3',
      tags: [
        { label: '恋愛相談', color: 'pink' as const },
        { label: 'LINE', color: 'blue' as const },
      ],
      title: 'LINEの返信が遅い彼。どうやって気持ちを伝えればいい？',
      content: '付き合って半年になる彼氏とのLINEでのやり取りについて悩んでいます...',
      timeAgo: '2日前',
      replyCount: 15,
    },
    {
      id: '4',
      tags: [
        { label: '恋愛相談', color: 'pink' as const },
        { label: '気持ち', color: 'purple' as const },
      ],
      title: '彼との関係が冷めてきた気がします。どうすれば良いでしょうか？',
      content: '最近、お互いの気持ちが少しずつ離れていっているような気がして...',
      timeAgo: '1日前',
      replyCount: 23,
    },
  ].filter(q => q.id !== currentQuestionId);

  if (relatedQuestions.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-sm font-bold text-gray-900 mb-3">関連する相談</h3>
      <div className="space-y-4">
        {relatedQuestions.map(question => (
          <QuestionCard key={question.id} {...question} />
        ))}
      </div>
    </div>
  );
}