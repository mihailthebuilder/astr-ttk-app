export type Hashtag = {
  id: string;
  name: string;
  posts: number;
  rank: number;
  latestTrending: boolean;
  views: number;
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
