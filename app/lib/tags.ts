// 基本的な恋愛カテゴリ
export const BASIC_TAGS = [
  { id: 'love-basic', label: '恋愛相談', color: 'pink' },
  { id: 'male-psychology', label: '男性心理', color: 'blue' },
  { id: 'signs', label: 'サイン', color: 'purple' },
  { id: 'true-feelings', label: '本音', color: 'pink' },
  { id: 'feelings', label: 'あの人の気持ち', color: 'pink' },
  { id: 'compatibility', label: '相性', color: 'pink' },
  { id: 'unrequited-love', label: '片想い', color: 'pink' },
  { id: 'reunion', label: '復縁', color: 'orange' },
  { id: 'affair-basic', label: '不倫', color: 'red' },
  { id: 'marriage', label: '結婚', color: 'blue' },
  { id: 'meeting', label: '出会い', color: 'green' },
] as const;

// 深掘りした相談テーマ
export const DETAILED_TAGS = [
  { id: 'positive-signs', label: '脈アリ', color: 'pink' },
  { id: 'characteristics', label: '特徴', color: 'blue' },
  { id: 'gestures', label: '仕草', color: 'purple' },
  { id: 'identification', label: '見分け方', color: 'blue' },
  { id: 'crush', label: '好きな人', color: 'pink' },
  { id: 'truth', label: '真実', color: 'purple' },
  { id: 'methods', label: '方法', color: 'blue' },
  { id: 'timing', label: '恋愛のタイミング', color: 'purple' },
  { id: 'long-distance', label: '遠距離恋愛', color: 'blue' },
  { id: 'confession', label: '告白のタイミング', color: 'pink' },
  { id: 'age-gap', label: '年の差恋愛', color: 'purple' },
  { id: 'triangle', label: '三角関係', color: 'red' },
  { id: 'friends-to-lovers', label: '友達から恋人へ', color: 'pink' },
  { id: 'dating-strategy', label: '恋愛の駆け引き', color: 'purple' },
  { id: 'fight', label: '恋人との喧嘩', color: 'orange' },
  { id: 'cooling-love', label: '冷めた恋心', color: 'blue' },
  { id: 'breakup', label: '恋愛の終わり方', color: 'gray' },
] as const;

// 自己成長や内面的なテーマ
export const PERSONAL_GROWTH_TAGS = [
  { id: 'trauma', label: '恋愛のトラウマ克服', color: 'purple' },
  { id: 'self-improvement', label: '自分磨き', color: 'pink' },
  { id: 'self-esteem', label: '恋愛における自己肯定感', color: 'blue' },
  { id: 'ideal-partner', label: '理想の恋人像', color: 'pink' },
  { id: 'recovery', label: '失恋からの立ち直り方', color: 'orange' },
  { id: 'self-love', label: '愛される自分になるには', color: 'pink' },
] as const;

// 特定の状況に関するテーマ
export const SITUATION_TAGS = [
  { id: 'misunderstanding', label: '勘違い', color: 'orange' },
  { id: 'girlfriend', label: '彼女', color: 'pink' },
  { id: 'destiny', label: '運命', color: 'purple' },
  { id: 'affair-situation', label: '不倫', color: 'red' },
  { id: 'love-stealing', label: '略奪', color: 'red' },
  { id: 'sns-love', label: 'SNSでの恋愛', color: 'blue' },
  { id: 'workplace', label: '職場恋愛', color: 'green' },
  { id: 'school', label: '学校での恋愛', color: 'blue' },
  { id: 'dating-app', label: '婚活アプリ', color: 'pink' },
  { id: 'married', label: '既婚者の恋', color: 'purple' },
  { id: 'parenting', label: '子育て中の恋愛', color: 'green' },
  { id: 'hobby', label: '趣味での出会い', color: 'green' },
] as const;

// ライフステージや価値観
export const LIFE_STAGE_TAGS = [
  { id: '30s-love', label: '30代からの恋愛', color: 'blue' },
  { id: 'remarriage', label: '再婚', color: 'purple' },
  { id: 'international', label: '国際恋愛', color: 'green' },
  { id: 'married-love', label: '結婚後の恋愛感情', color: 'pink' },
  { id: 'with-children', label: '子持ちの恋愛', color: 'green' },
  { id: 'values', label: '価値観の違い', color: 'orange' },
] as const;

// 恋愛コラム系
export const COLUMN_TAGS = [
  { id: 'entertainment', label: '恋愛映画・音楽', color: 'pink' },
  { id: 'history', label: '歴史上の恋', color: 'purple' },
  { id: 'psychology', label: '恋愛心理学', color: 'blue' },
  { id: 'urban-legend', label: '恋愛都市伝説', color: 'purple' },
  { id: 'common', label: '恋愛あるある', color: 'pink' },
  { id: 'items', label: '恋愛グッズ', color: 'pink' },
] as const;

// すべてのタグを結合
export const ALL_TAGS = [
  ...BASIC_TAGS,
  ...DETAILED_TAGS,
  ...PERSONAL_GROWTH_TAGS,
  ...SITUATION_TAGS,
  ...LIFE_STAGE_TAGS,
  ...COLUMN_TAGS,
] as const;