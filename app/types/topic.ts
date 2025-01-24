export interface Counselor {
  id: number;
  name: string;
  photo: string;
  title: string;
  rating: number;
  reviewCount: number;
  expertise: string[];
  introduction: string;
}

export interface Topic {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  counselors: Counselor[];
}