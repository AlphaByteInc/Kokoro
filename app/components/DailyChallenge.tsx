'use client';

import { Trophy } from 'lucide-react';
import { useState, useEffect } from 'react';

const DAILY_CHALLENGES = [
  {
    id: 1,
    title: '今日のお題：初恋の思い出',
    description: '初恋の経験や感動を共有しましょう。どんな気持ちだったか、何を学んだか...',
    reward: '50ポイント'
  },
  {
    id: 2,
    title: '今日のお題：理想のデート',
    description: 'あなたにとって理想のデートプランを共有してください。場所、時間、シチュエーション...',
    reward: '50ポイント'
  }
];

export function DailyChallenge() {
  const [currentChallenge, setCurrentChallenge] = useState(DAILY_CHALLENGES[0]);

  useEffect(() => {
    // クライアントサイドでのみランダムなチャレンジを設定
    const randomChallenge = DAILY_CHALLENGES[Math.floor(Math.random() * DAILY_CHALLENGES.length)];
    setCurrentChallenge(randomChallenge);
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 border border-pink-100">
      <div className="flex items-center space-x-2 mb-2">
        <Trophy className="h-5 w-5 text-pink-500" />
        <h3 className="text-sm font-bold text-gray-900">{currentChallenge.title}</h3>
      </div>
      <p className="text-xs text-gray-600 mb-3">{currentChallenge.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-pink-600 font-medium">
          クリア報酬: {currentChallenge.reward}
        </span>
        <button className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs hover:bg-pink-600 transition-colors">
          チャレンジに参加
        </button>
      </div>
    </div>
  );
}