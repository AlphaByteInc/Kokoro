// 連続投稿/回答のストリーク表示コンポーネント
'use client';

import { Flame } from 'lucide-react';

interface StreakBadgeProps {
  days: number;
}

export function StreakBadge({ days }: StreakBadgeProps) {
  return (
    <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm">
      <Flame className="h-4 w-4" />
      <span>{days}日連続</span>
    </div>
  );
}