'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import { ALL_TAGS } from '../lib/tags';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: Filters) => void;
  initialFilters: Filters;
}

export interface Filters {
  sort: 'popular' | 'recent' | 'unanswered';
  tags: string[];
  timeRange: '24h' | '7d' | '30d' | 'all';
  status: 'all' | 'solved' | 'unsolved';
}

export function FilterModal({ isOpen, onClose, onApply, initialFilters }: FilterModalProps) {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  if (!isOpen) return null;

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-end">
      <div className="bg-white/90 backdrop-blur-sm rounded-t-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white/90 backdrop-blur-sm border-b px-4 py-3 flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-900">フィルター</h2>
          <button onClick={onClose} className="text-gray-500">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* 並び順 */}
          <div>
            <h3 className="text-xs font-medium text-gray-700 mb-2">並び順</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'popular', label: '人気順' },
                { value: 'recent', label: '新着順' },
                { value: 'unanswered', label: '未回答' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFilters(prev => ({ ...prev, sort: option.value as Filters['sort'] }))}
                  className={`px-3 py-2 rounded-lg text-xs ${
                    filters.sort === option.value
                      ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-sm'
                      : 'bg-white/80 text-gray-700 hover:bg-gray-50 border'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* 期間 */}
          <div>
            <h3 className="text-xs font-medium text-gray-700 mb-2">期間</h3>
            <div className="grid grid-cols-4 gap-2">
              {[
                { value: '24h', label: '24時間' },
                { value: '7d', label: '1週間' },
                { value: '30d', label: '1ヶ月' },
                { value: 'all', label: 'すべて' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFilters(prev => ({ ...prev, timeRange: option.value as Filters['timeRange'] }))}
                  className={`px-3 py-2 rounded-lg text-xs ${
                    filters.timeRange === option.value
                      ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-sm'
                      : 'bg-white/80 text-gray-700 hover:bg-gray-50 border'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* 状態 */}
          <div>
            <h3 className="text-xs font-medium text-gray-700 mb-2">状態</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'all', label: 'すべて' },
                { value: 'solved', label: '解決済み' },
                { value: 'unsolved', label: '未解決' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFilters(prev => ({ ...prev, status: option.value as Filters['status'] }))}
                  className={`px-3 py-2 rounded-lg text-xs ${
                    filters.status === option.value
                      ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-sm'
                      : 'bg-white/80 text-gray-700 hover:bg-gray-50 border'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* タグ */}
          <div>
            <h3 className="text-xs font-medium text-gray-700 mb-2">タグ</h3>
            <div className="flex flex-wrap gap-2">
              {ALL_TAGS.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setFilters(prev => ({
                    ...prev,
                    tags: prev.tags.includes(tag.id)
                      ? prev.tags.filter(id => id !== tag.id)
                      : [...prev.tags, tag.id]
                  }))}
                  className={`px-3 py-1.5 rounded-full text-xs ${
                    filters.tags.includes(tag.id)
                      ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-sm'
                      : 'bg-white/80 text-gray-700 hover:bg-gray-50 border'
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white/90 backdrop-blur-sm border-t p-4">
          <button
            onClick={handleApply}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            フィルターを適用
          </button>
        </div>
      </div>
    </div>
  );
}