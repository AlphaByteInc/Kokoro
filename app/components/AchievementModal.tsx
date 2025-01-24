'use client';

import { Award, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface AchievementModalProps {
  achievement: Achievement;
  onClose: () => void;
}

export function AchievementModal({ achievement, onClose }: AchievementModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-4 right-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white rounded-lg shadow-lg p-4 border border-pink-200 max-w-sm">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Award className="h-6 w-6 text-pink-500" />
            <div>
              <h3 className="font-bold text-gray-900">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}