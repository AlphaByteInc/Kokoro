'use client';

import { Star } from 'lucide-react';
import { Counselor } from '@/app/types/counselor';

interface CounselorCardProps {
  counselor: Counselor;
  onClick: () => void;
}

export function CounselorCard({ counselor, onClick }: CounselorCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white/80 backdrop-blur-sm rounded-xl border p-4 text-left hover:shadow-md transition-all hover:-translate-y-0.5 group"
    >
      <div className="flex items-start space-x-4 mb-3">
        <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
          <img
            src={counselor.photo}
            alt={counselor.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-gray-900 group-hover:text-rose-500 transition-colors">
            {counselor.name}
          </h3>
          <div className="flex items-center space-x-2 mb-1">
            <p className="text-xs text-gray-600">{counselor.title}</p>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
            <span>{counselor.rating}</span>
            <span className="ml-1">({counselor.reviewCount}件)</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs text-gray-600 line-clamp-4 leading-relaxed">{counselor.personality}</p>
      </div>

      <div>
        <h4 className="text-xs font-medium text-gray-700 mb-1.5">得意分野</h4>
        <div className="flex flex-wrap gap-1.5">
          {counselor.expertise.map((item, index) => (
            <span
              key={index}
              className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-400 to-rose-300 text-white shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}