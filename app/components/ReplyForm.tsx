"use client";

import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { generateRandomNickname, getSavedNickname, saveNickname } from '@/app/lib/nameGenerator';
import { Reply } from '@/app/types/reply';

interface ReplyFormProps {
  replyTo?: {
    username: string;
    id: string;
  };
  onCancelReply?: () => void;
  onSubmit?: (reply: Reply) => void;
}

export function ReplyForm({ replyTo, onCancelReply, onSubmit }: ReplyFormProps) {
  const [nickname, setNickname] = useState<string>('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedNickname = getSavedNickname();
    if (savedNickname) {
      setNickname(savedNickname);
    } else {
      const newNickname = generateRandomNickname();
      setNickname(newNickname);
      saveNickname(newNickname);
    }
  }, []);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
    saveNickname(newNickname);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !nickname.trim() || isSubmitting) return;

    setIsSubmitting(true);
    const newReply: Reply = {
      id: `reply-${Date.now()}`,
      author: {
        username: nickname,
        age: '20代',
        status: '恋愛中',
      },
      content: content.trim(),
      timeAgo: '数秒前',
      likeCount: 0,
      replyTo: replyTo ? {
        username: replyTo.username,
        id: replyTo.id,
      } : undefined,
    };

    onSubmit?.(newReply);
    setContent('');
    setIsSubmitting(false);
    onCancelReply?.();
  };
  return (
    <form onSubmit={handleSubmit}>
      {replyTo && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-pink-600">@{replyTo.username}</span>
          <button
            type="button"
            onClick={onCancelReply}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      <div className="mb-3">
        <input
          type="text"
          placeholder="表示名"
          value={nickname}
          onChange={handleNicknameChange}
          className="w-full border-b bg-transparent px-2 py-1.5 text-xs focus:outline-none focus:border-pink-500"
          required
        />
      </div>
      <textarea
        placeholder={replyTo ? `@${replyTo.username}さんに返信...` : "返信を入力..."}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full bg-transparent px-2 py-1.5 min-h-[80px] focus:outline-none resize-none text-xs border-b"
        required
      />
      <div className="flex justify-end mt-2">
        <button className="bg-pink-500 text-white px-3 py-1.5 rounded-full text-xs flex items-center space-x-1">
          <MessageCircle className="h-3 w-3" />
          <span>返信する</span>
        </button>
      </div>
    </form>
  );
}