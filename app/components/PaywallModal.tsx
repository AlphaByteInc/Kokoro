'use client';

import { X } from 'lucide-react';
import Link from 'next/link';

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (planId: string) => void;
  counselorType?: 'ai' | 'human';
}

const AI_PLANS: Plan[] = [
  {
    id: 'ai-basic',
    name: 'ベーシック',
    price: '¥980',
    period: '月額',
    features: [
      '24時間即時レスポンス',
      '基本的な恋愛相談',
      'チャット形式で気軽に相談',
      '相談履歴の保存',
    ],
  },
  {
    id: 'ai-premium',
    name: 'プレミアム',
    price: '¥1,980',
    period: '月額',
    features: [
      '24時間即時レスポンス',
      '高度な恋愛分析',
      'パーソナライズされた提案',
      '無制限の相談',
      '相談履歴の保存',
      'データに基づく洞察',
    ],
    recommended: true,
  },
];

const HUMAN_PLANS: Plan[] = [
  {
    id: 'trial',
    name: 'お試しプラン',
    price: '¥2,000',
    period: '1回30分',
    features: [
      '専門カウンセラーによる相談',
      'チャット形式で気軽に相談',
      '24時間以内の返信保証',
    ],
  },
  {
    id: 'standard',
    name: 'スタンダードプラン',
    price: '¥5,000',
    period: '月額',
    features: [
      '月3回まで相談可能',
      '専門カウンセラーによる相談',
      'チャット形式で気軽に相談',
      '24時間以内の返信保証',
      '相談履歴の保存',
    ],
    recommended: true,
  },
  {
    id: 'premium',
    name: 'プレミアムプラン',
    price: '¥9,800',
    period: '月額',
    features: [
      '無制限で相談可能',
      '専門カウンセラーによる相談',
      'チャット形式で気軽に相談',
      '12時間以内の返信保証',
      '相談履歴の保存',
      '優先サポート',
    ],
  },
];

export function PaywallModal({ isOpen, onClose, onSelectPlan, counselorType = 'human' }: PaywallModalProps) {
  if (!isOpen) return null;

  const plans = counselorType === 'ai' ? AI_PLANS : HUMAN_PLANS;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            {counselorType === 'ai' ? 'AIカウンセリングプラン' : 'カウンセリングプラン'}
          </h2>
          <button onClick={onClose} className="text-gray-500">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-lg p-4 ${
                plan.recommended ? 'border-pink-500 bg-pink-50' : ''
              }`}
            >
              {plan.recommended && (
                <span className="inline-block bg-pink-500 text-white text-xs px-2 py-1 rounded-full mb-2">
                  おすすめ
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-2">
                <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-600">/{plan.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onSelectPlan(plan.id)}
                className={`w-full mt-4 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  plan.recommended
                    ? 'bg-pink-500 text-white hover:bg-pink-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                このプランを選択
              </button>
            </div>
          ))}
        </div>

        <div className="border-t p-4">
          <p className="text-xs text-gray-500 text-center">
            プランを選択することで、
            <Link href="/terms" className="text-pink-500 hover:text-pink-600">
              利用規約
            </Link>
            と
            <Link href="/privacy" className="text-pink-500 hover:text-pink-600">
              プライバシーポリシー
            </Link>
            に同意したものとみなされます。
          </p>
        </div>
      </div>
    </div>
  );
}