'use client';

import { Header } from '@/app/components/Header';
import { MobileNavigation } from '@/app/components/MobileNavigation';
import { Send, Timer } from 'lucide-react';
import { useState } from 'react';
import { PaywallModal } from '@/app/components/PaywallModal';
import { TopicCard } from '@/app/components/TopicCard';
import { Topic } from '@/app/types/topic';
import { TopicSearch } from '@/app/components/TopicSearch';

const TOPICS: Topic[] = [
  {
    id: 1,
    title: '恋愛全般の悩み',
    description: '好きな人への気持ちの伝え方、恋愛における不安や迷い、関係性の悩みなど、恋愛に関する様々な相談に対応します。経験豊富なカウンセラーが、あなたの気持ちに寄り添いながら一緒に解決策を見つけていきます。',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&h=300&fit=crop',
    tags: ['気持ち', '恋愛相談', '悩み'],
    counselors: [
      {
        id: 1,
        name: '青山 理沙',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop',
        title: '心理カウンセラー',
        rating: 4.9,
        reviewCount: 328,
        expertise: ['恋愛心理', '自己肯定感', '関係構築'],
        introduction: '心理学の知見を活かし、あなたの気持ちに寄り添いながら、具体的な解決策を一緒に見つけていきます。',
      },
      {
        id: 2,
        name: '田中 美咲',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
        title: '恋愛カウンセラー',
        rating: 4.8,
        reviewCount: 256,
        expertise: ['コミュニケーション', '恋愛相談', '心の整理'],
        introduction: '10年以上の経験を活かし、あなたの恋愛の悩みに親身に寄り添います。',
      }
    ]
  },
  {
    id: 2,
    title: '片思いの相談',
    description: '片思い中の気持ちの整理、アプローチの方法、相手の気持ちの読み取り方など、片思いにまつわる悩みをサポートします。具体的な行動プランを一緒に考え、前向きな恋愛を応援します。',
    image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=500&h=300&fit=crop',
    tags: ['片思い', 'アプローチ', '恋愛'],
    counselors: [
      {
        id: 3,
        name: '佐藤 由美',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop',
        title: '恋愛アドバイザー',
        rating: 4.7,
        reviewCount: 189,
        expertise: ['片思い', 'アプローチ方法', '心理分析'],
        introduction: '片思いの気持ちを大切にしながら、相手との関係を一歩前に進めるためのアドバイスをします。',
      }
    ]
  },
  {
    id: 3,
    title: '復縁についての相談',
    description: '元恋人との復縁を考えている方へ。関係修復の可能性、アプローチ方法、自分の気持ちの整理など、復縁に関する様々な悩みについて、客観的な視点からアドバイスします。',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&h=300&fit=crop',
    tags: ['復縁', '元カレ', '元カノ'],
    counselors: [
      {
        id: 4,
        name: '山田 健一',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop',
        title: '関係修復カウンセラー',
        rating: 4.9,
        reviewCount: 445,
        expertise: ['復縁', '関係修復', '心の整理'],
        introduction: '復縁を考えるあなたの気持ちに寄り添いながら、より良い関係を築くためのサポートをします。',
      }
    ]
  },
  {
    id: 4,
    title: '婚活・結婚の相談',
    description: '結婚を意識した付き合い方、婚活での出会いの作り方、理想の相手の見つけ方など、結婚を見据えた恋愛についてアドバイスします。あなたの理想の結婚に向けてサポートします。',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500&h=300&fit=crop',
    tags: ['婚活', '結婚', '出会い'],
    counselors: [
      {
        id: 5,
        name: '中村 さやか',
        photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&h=200&auto=format&fit=crop',
        title: '婚活アドバイザー',
        rating: 4.8,
        reviewCount: 567,
        expertise: ['婚活', '結婚相談', '自己分析'],
        introduction: '結婚を意識した恋愛から、具体的な婚活まで、あなたの理想の結婚に向けてサポートします。',
      }
    ]
  },
  {
    id: 5,
    title: '失恋・別れの相談',
    description: '失恋の痛手から立ち直るためのサポート、前を向くためのアドバイス、新しい恋愛に踏み出す勇気を後押しします。つらい気持ちに寄り添いながら、一緒に前に進む方法を見つけていきましょう。',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=300&fit=crop',
    tags: ['失恋', '別れ', '立ち直り'],
    counselors: [
      {
        id: 6,
        name: '橘 陽子',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop',
        title: '心理セラピスト',
        rating: 4.9,
        reviewCount: 623,
        expertise: ['心のケア', '自己回復', '前向き思考'],
        introduction: 'つらい気持ちに寄り添いながら、新しい一歩を踏み出すためのサポートをします。',
      }
    ]
  }
];

const formatTime = (date: Date) => {
  return date.toLocaleTimeString('ja-JP', { 
    hour: '2-digit',
    minute: '2-digit'
  });
};

export default function ChatConsultationPage() {
  const [message, setMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showPaywall, setShowPaywall] = useState(false);
  const [startTime] = useState(new Date());
  const [endTime] = useState(new Date(startTime.getTime() + 30 * 60000)); // 30分後
  const [textareaHeight, setTextareaHeight] = useState('32px');

  // Extract unique tags from all topics
  const allTags = Array.from(new Set(TOPICS.flatMap(topic => topic.tags)));

  const filteredTopics = TOPICS.filter(topic => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      topic.title.toLowerCase().includes(query) ||
      topic.description.toLowerCase().includes(query);
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => topic.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  const handleTagSelect = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleTopicSelect = (topicId: number) => {
    setSelectedTopic(topicId);
    if (topicId) {
      setShowPaywall(true);
    }
  };

  const handlePlanSelect = (planId: string) => {
    // TODO: Implement plan selection and payment
    console.log('Selected plan:', planId);
    setShowPaywall(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // TODO: Implement message sending
    setMessage('');
    setTextareaHeight('32px');
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    e.target.style.height = '32px';
    e.target.style.height = `${e.target.scrollHeight}px`;
    setTextareaHeight(`${e.target.scrollHeight}px`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <Header />

      <div className="max-w-5xl mx-auto px-4">
        {!selectedTopic ? (
          <div className="py-6 space-y-6">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-lg font-bold text-gray-900">あなたの悩みに合った相談を</h2>
              <TopicSearch
                onSearch={setSearchQuery}
                tags={allTags}
                onTagSelect={handleTagSelect}
                selectedTags={selectedTags}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  onClick={() => handleTopicSelect(topic.id)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100vh-8rem)] bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex items-center justify-center space-x-2 mb-4 text-xs text-gray-500">
              <Timer className="h-4 w-4" />
              <span>{formatTime(startTime)} - {formatTime(endTime)}</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-4 border">
              <p className="text-sm text-gray-700">
                カウンセラーに繋がりました。お悩みをお聞かせください。
              </p>
            </div>
            {/* チャットメッセージがここに表示されます */}
          </div>

          <div className="bg-white/80 backdrop-blur-sm border-t p-4">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
              <textarea
                rows={1}
                value={message}
                onChange={handleTextareaChange}
                style={{ height: textareaHeight }}
                placeholder="メッセージを入力..."
                className="flex-1 px-3 py-1.5 bg-white/90 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm overflow-hidden min-h-[32px] max-h-[200px]"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-rose-400 text-white p-2 rounded-full hover:opacity-90 transition-opacity shadow-sm flex-shrink-0"
                disabled={!message.trim()}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        )}
      </div>

      <PaywallModal
        isOpen={showPaywall}
        onClose={() => setShowPaywall(false)}
        onSelectPlan={handlePlanSelect}
      />
      <MobileNavigation />
    </div>
  );
}