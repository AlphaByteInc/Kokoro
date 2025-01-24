const FIRST_NAMES = [
  '桜', '葵', '凛', '美咲', '優花', '彩', '結衣', '真央',
  '舞', '千尋', '美月', '陽菜', '琴音', '詩織', '美桜', '心',
];

const SECOND_NAMES = [
  'ローズ', 'ハート', 'スター', 'ムーン', 'フラワー', 'バード',
  'キャット', 'スカイ', 'サン', 'ドリーム', 'レイン', 'リーフ',
];

export function generateRandomNickname(): string {
  const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  const secondName = SECOND_NAMES[Math.floor(Math.random() * SECOND_NAMES.length)];
  return `${firstName}${secondName}`;
}

const STORAGE_KEY = 'user_nickname';

export function getSavedNickname(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEY);
}

export function saveNickname(nickname: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, nickname);
}