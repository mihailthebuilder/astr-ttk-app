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
  hashtagTrend: PointInHashtagTrend[];
};

type PointInHashtagTrend = {
  id: string;
  hashtagId: string;
  recordedForUnixTime: number;
  interest: number;
};
