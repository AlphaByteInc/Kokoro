'use client';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface Tag {
  id: string;
  label: string;
  color: string;
}

interface TagGroupProps {
  title: string;
  tags: Tag[];
  selectedTags: string[];
  onTagToggle: (tagId: string) => void;
}

export function TagGroup({ title, tags, selectedTags, onTagToggle }: TagGroupProps) {
  const [isOpen, setIsOpen] = useState(true);
  const selectedCount = tags.filter(tag => selectedTags.includes(tag.id)).length;

  return (
    <div className="border rounded-lg">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 rounded-t-lg hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center space-x-2">
          <h3 className="text-xs font-medium text-gray-700">{title}</h3>
          {selectedCount > 0 && (
            <span className="bg-pink-100 text-pink-800 text-xs px-2 py-0.5 rounded-full">
              {selectedCount}
            </span>
          )}
        </div>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-gray-500 transition-transform',
            isOpen && 'transform rotate-180'
          )}
        />
      </button>
      {isOpen && (
        <div className="p-4 space-y-2">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <button
                key={tag.id}
                type="button"
                onClick={() => onTagToggle(tag.id)}
                className={cn(
                  'px-2.5 py-1 rounded-full text-xs transition-colors',
                  selectedTags.includes(tag.id)
                    ? 'bg-pink-500 text-white'
                    : 'bg-pink-100 text-pink-800 hover:bg-pink-200'
                )}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}