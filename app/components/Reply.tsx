"use client";

import { Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { ReplyForm } from './ReplyForm';

interface ReplyProps {
  author: {
    username: string;
    age: string;
    status: string;
  };
  content: string;
  timeAgo: string;
  likeCount: number;
  onReply?: (username: string, id: string) => void;
  id: string;
  postId?: string;
  replyTo?: {
    username: string;
  };
  className?: string;
  showBorder?: boolean;
}

export function Reply({ 
  author, 
  content, 
  timeAgo, 
  likeCount, 
  onReply, 
  id, 
  postId, 
  replyTo,
  className = '',
  showBorder = true 
}: ReplyProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleReplyClick = () => {
    setShowReplyForm(!showReplyForm);
    if (!showReplyForm) {
      onReply?.(author.username, id);
    }
  };

  return (
    <div className={className}>
      <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 ${showBorder ? 'border' : ''}`}>
      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
        <span className="font-medium text-pink-600">@{author.username}</span>
        <span>•</span>
        <span>{author.age}</span>
        <span>•</span>
        <span>{author.status}</span>
        <span>•</span>
        <span>{timeAgo}</span>
      </div>
      <div className="mb-3">
        <Link href={postId ? `/posts/${postId}` : '#'} className="block">
          {replyTo && (
            <div className="text-xs text-pink-600 mb-1">
              @{replyTo.username}
            </div>
          )}
          <p className="text-xs text-gray-700 whitespace-pre-line hover:text-gray-900 transition-colors">
            {content}
          </p>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 text-gray-500 text-xs">
          <Heart className="h-4 w-4" />
          <span>{likeCount}</span>
        </button>
        <button onClick={handleReplyClick} className="flex items-center space-x-1 text-gray-500 text-xs">
          <MessageCircle className="h-4 w-4" />
          <span>返信</span>
        </button>
      </div>
      {showReplyForm && (
        <div className="mt-3">
          <ReplyForm
            replyTo={{ username: author.username, id }}
            onCancelReply={() => setShowReplyForm(false)}
          />
        </div>
      )}
      </div>
    </div>
  );
}