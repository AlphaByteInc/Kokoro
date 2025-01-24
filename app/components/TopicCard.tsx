'use client';

import { Topic } from '@/app/types/topic';
import { Star } from 'lucide-react';
import { useState } from 'react';

interface TopicCardProps {
  topic: Topic;
  onClick: () => void;
}

export function TopicCard({ topic, onClick }: TopicCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      onClick={onClick}
      className="w-full bg-white/90 backdrop-blur-sm rounded-lg border shadow-sm text-left hover:shadow-md transition-all hover:-translate-y-0.5 group cursor-pointer overflow-hidden"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <div className="w-full aspect-[16/9] overflow-hidden">
            <img
              src={topic.image}
              alt={topic.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3 space-y-1.5">
            <h3 className="text-sm font-bold text-gray-900 group-hover:text-rose-500 transition-colors">
              {topic.title}
            </h3>

            <p className="text-xs text-gray-600 line-clamp-4 leading-relaxed">
              {topic.description}
            </p>

            <div className="flex flex-wrap gap-1 mt-1">
              {topic.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-400 to-rose-300 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-48 flex-shrink-0 lg:border-l p-3">
          <div className="space-y-3">
            {topic.counselors.map((counselor, index) => (
              <div
                key={counselor.id}
                className={`transition-opacity duration-300 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                <div className="flex items-start space-x-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                    <img
                      src={counselor.photo}
                      alt={counselor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1 mb-0.5">
                      <p className="text-sm font-medium text-gray-900 truncate">{counselor.name}</p>
                      <div className="flex items-center gap-0.5">
                        <Star className="h-3 w-3 text-yellow-400" fill="currentColor" />
                        <span className="text-[10px] text-gray-600">{counselor.rating}</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-500 mb-1">{counselor.title} • {counselor.reviewCount}件の相談</p>
                    <p className="text-[10px] text-gray-600 line-clamp-3 leading-relaxed">{counselor.introduction}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-3 space-x-1">
            {topic.counselors.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${
                  index === activeIndex ? 'bg-pink-500' : 'bg-gray-300'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(index);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveIndex(index);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}