import { Tag } from 'lucide-react';
import { Header } from '../components/Header';
import { MobileNavigation } from '../components/MobileNavigation';

const TAGS = [
  { label: '恋愛全般', color: 'pink', count: 156 },
  { label: '初デート', color: 'blue', count: 89 },
  { label: 'LINE', color: 'purple', count: 234 },
  { label: '婚活', color: 'green', count: 167 },
  { label: '復縁', color: 'orange', count: 78 },
  { label: '遠距離恋愛', color: 'pink', count: 92 },
  { label: '片思い', color: 'blue', count: 145 },
  { label: '告白', color: 'purple', count: 123 },
  { label: '別れ', color: 'orange', count: 89 },
  { label: '浮気', color: 'red', count: 67 },
];

export default function TagsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />

      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Tag className="h-5 w-5 mr-2" />
          タグ一覧
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {TAGS.map((tag, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow"
            >
              <span
                className={`inline-block bg-${tag.color}-100 text-${tag.color}-800 text-sm px-2 py-1 rounded-full mb-2`}
              >
                {tag.label}
              </span>
              <p className="text-sm text-gray-500">{tag.count}件の相談</p>
            </div>
          ))}
        </div>
      </div>

      <MobileNavigation />
    </div>
  );
}