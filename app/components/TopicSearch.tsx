import { Filter, Search } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface TopicSearchProps {
  onSearch: (query: string) => void;
  onFilterClick?: () => void;
  tags?: string[];
  onTagSelect?: (tag: string) => void;
  selectedTags?: string[];
}

export function TopicSearch({ onSearch, onFilterClick, tags = [], onTagSelect, selectedTags = [] }: TopicSearchProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const scroll = () => {
      if (scrollRef.current) {
        const element = scrollRef.current;
        const maxScrollLeft = element.scrollWidth - element.clientWidth;
        
        const newPosition = scrollPosition + 1;
        if (newPosition > maxScrollLeft) {
          setScrollPosition(0);
        } else {
          setScrollPosition(newPosition);
        }
        element.scrollLeft = scrollPosition;
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, [scrollPosition, isHovered]);

  return (
    <>
      <div className="relative mb-4">
        <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full shadow-sm border">
          <Search className="h-4 w-4 text-gray-400 ml-4" />
          <input
            type="text"
            placeholder="相談を検索"
            onChange={(e) => onSearch(e.target.value)}
            className="w-full py-2.5 px-4 rounded-full focus:outline-none text-sm bg-transparent"
          />
          {onFilterClick && (
            <button
              onClick={onFilterClick}
              className="px-4 py-2.5 text-gray-600 hover:text-gray-900"
            >
              <Filter className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      
      {tags.length > 0 && (
        <div
          ref={scrollRef}
          className="flex overflow-x-auto -mx-2 px-2 space-x-2 scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setScrollPosition(scrollRef.current?.scrollLeft || 0);
          }}
        >
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagSelect?.(tag)}
              className={`flex-shrink-0 ${
                selectedTags.includes(tag)
                  ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white'
                  : 'bg-white/80 text-gray-700'
              } backdrop-blur-sm rounded-full px-3 py-1.5 border text-xs transition-colors`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </>
  );
}