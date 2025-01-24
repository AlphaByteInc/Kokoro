export interface Reply {
  id: string;
  author: {
    username: string;
    age: string;
    status: string;
  };
  content: string;
  timeAgo: string;
  likeCount: number;
  replyTo?: {
    username: string;
    id: string;
  };
}