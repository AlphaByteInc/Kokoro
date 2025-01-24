export interface Counselor {
  id: number;
  type: 'ai' | 'human';
  name: string;
  photo: string;
  title: string;
  experience: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  personality: string;
  expertise: string[];
  status: 'online' | 'offline';
}