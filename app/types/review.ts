export interface Review {
  id: number;
  userId: string;
  username: string;
  rating: number;
  content: string;
  date: string;
  helpful: number;
}