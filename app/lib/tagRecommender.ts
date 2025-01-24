import { ALL_TAGS } from './tags';

// キーワードとタグのマッピング
const TAG_KEYWORDS: Record<string, string[]> = {
  // 感情・状態に関するキーワード
  '不安': ['feelings', 'self-esteem'],
  '悩み': ['feelings', 'self-improvement'],
  '寂しい': ['feelings', 'long-distance'],
  '辛い': ['feelings', 'recovery'],
  '好き': ['crush', 'unrequited-love'],
  '気持ち': ['feelings', 'true-feelings'],

  // コミュニケーションに関するキーワード
  'line': ['sns-love'],
  '返信': ['sns-love'],
  '既読': ['sns-love'],
  'メッセージ': ['sns-love'],
  'インスタ': ['sns-love'],
  'twitter': ['sns-love'],

  // 状況に関するキーワード
  '職場': ['workplace'],
  '会社': ['workplace'],
  '同僚': ['workplace'],
  '先輩': ['workplace'],
  '後輩': ['workplace'],
  '学校': ['school'],
  '大学': ['school'],
  '同級生': ['school'],

  // 関係性に関するキーワード
  '片思い': ['unrequited-love', 'crush'],
  '両思い': ['signs', 'positive-signs'],
  '告白': ['confession'],
  '振られ': ['breakup', 'recovery'],
  '別れ': ['breakup', 'recovery'],
  '復縁': ['reunion'],
  '結婚': ['marriage'],
  '婚活': ['meeting', 'dating-app'],

  // デート関連
  'デート': ['dating-strategy'],
  '食事': ['dating-strategy'],
  '遊び': ['dating-strategy'],
  'カフェ': ['dating-strategy'],
  '映画': ['dating-strategy'],

  // 年齢・距離関係
  '年上': ['age-gap'],
  '年下': ['age-gap'],
  '遠距離': ['long-distance'],
  
  // 複雑な関係
  '浮気': ['affair-basic'],
  '不倫': ['affair-basic'],
  '略奪': ['love-stealing'],
  '三角関係': ['triangle'],

  // その他の状況
  'sns': ['sns-love'],
  'アプリ': ['dating-app'],
  '初めて': ['signs', 'methods'],
  '脈あり': ['positive-signs'],
  '態度': ['signs', 'gestures'],
  '仕草': ['gestures'],
};

// 文章の感情分析に基づくタグ推薦
function analyzeEmotionAndContext(text: string): string[] {
  const recommendedTags: string[] = [];
  
  // 不安や悩みの表現が多い場合
  if (text.match(/不安|心配|悩|迷|困/g)?.length ?? 0 > 1) {
    recommendedTags.push('self-esteem');
  }

  // 積極的な行動や改善を求める表現
  if (text.match(/したい|なりたい|改善|変わり|努力/g)?.length ?? 0 > 1) {
    recommendedTags.push('self-improvement');
  }

  // 過去の経験に関する表現
  if (text.match(/過去|以前|昔|経験|トラウマ/g)?.length ?? 0 > 1) {
    recommendedTags.push('trauma');
  }

  return recommendedTags;
}

export function recommendTags(title: string, content: string): string[] {
  const text = `${title} ${content}`.toLowerCase();
  const recommendedTags = new Set<string>();

  // キーワードマッチング
  Object.entries(TAG_KEYWORDS).forEach(([keyword, tags]) => {
    if (text.includes(keyword)) {
      tags.forEach(tagId => {
        recommendedTags.add(tagId);
      });
    }
  });

  // 感情分析によるタグ追加
  analyzeEmotionAndContext(text).forEach(tagId => {
    recommendedTags.add(tagId);
  });

  // 基本タグの追加
  recommendedTags.add('love-basic'); // 恋愛相談は常に追加

  // 最大5つまでのタグを返す（優先度順）
  return Array.from(recommendedTags)
    .filter(tagId => ALL_TAGS.some(t => t.id === tagId))
    .slice(0, 5);
}