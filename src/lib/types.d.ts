export type Hashtag = {
  id: string;
  name: string;
  posts: number;
  rank: number;
  latestTrending: boolean;
  views: bigint;
  isPromoted: boolean;
  trendingType: number;
  createdAt: Date;
  trend: PointInHashtagTrend[];
  countryCode: string;
};

type PointInHashtagTrend = {
  time: number;
  value: number;
};

type Faq = { question: string; answer: string };

type ContactRequest = { email: string; message: string };
