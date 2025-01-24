'use client';

import { Star, ThumbsUp } from 'lucide-react';
import { Review } from '@/app/types/review';

interface ReviewListProps {
  reviews: Review[];
}

export function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-xs text-gray-600">{review.username[0]}</span>
              </div>
              <span className="text-sm text-gray-900">{review.username}</span>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fill={i < review.rating ? 'currentColor' : 'none'}
                  className={`h-3 w-3 ${i < review.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2">{review.content}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{review.date}</span>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
              <ThumbsUp className="h-3 w-3" />
              <span>{review.helpful}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}