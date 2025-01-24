import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface QuestionCardProps {
  id: string;
  tags: Array<{
    label: string;
    color: 'pink' | 'blue' | 'green' | 'purple' | 'orange';
  }>;
  title: string;
  content: string;
  timeAgo: string;
  replyCount: number;
}

export function QuestionCard({ id, tags, title, content, timeAgo, replyCount }: QuestionCardProps) {
  const gradients = {
    pink: 'from-pink-200/50 via-rose-100/50 to-pink-50/50',
    blue: 'from-sky-200/50 via-indigo-100/50 to-blue-50/50',
    green: 'from-emerald-200/50 via-lime-100/50 to-green-50/50',
    purple: 'from-fuchsia-200/50 via-purple-100/50 to-pink-50/50',
    orange: 'from-orange-200/50 via-amber-100/50 to-yellow-50/50',
  };

  const tagGradients = {
    pink: 'bg-gradient-to-r from-pink-300/90 to-rose-200/90',
    blue: 'bg-gradient-to-r from-sky-300/90 to-indigo-200/90',
    green: 'bg-gradient-to-r from-emerald-300/90 to-lime-200/90',
    purple: 'bg-gradient-to-r from-fuchsia-300/90 to-purple-200/90',
    orange: 'bg-gradient-to-r from-orange-300/90 to-amber-200/90',
  };

  const mainTag = tags[0];
  const gradient = gradients[mainTag.color];

  return (
    <Link
      href={`/posts/${id}`}
      className="block relative p-[4px] rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl opacity-90`} />
      <div className="relative p-3 bg-white/95 backdrop-blur-sm rounded-lg">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-block ${tagGradients[tag.color]} text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm`}
            >
              {tag.label}
            </span>
          ))}
        </div>
        
        <h3 className="text-xs font-bold text-gray-900 mb-1.5 group-hover:text-rose-500 transition-colors">
          {title}
        </h3>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{timeAgo}</span>
          <div className="flex items-center space-x-1 text-rose-400">
            <MessageCircle className="h-3.5 w-3.5" />
            <span>{replyCount}件</span>
          </div>
        </div>
      </div>
    </Link>
  );
}