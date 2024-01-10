export type Hashtag = {
  id: string;
  name: string;
  countryCode: string;
  posts: number;
  rank: number;
  latestTrending: boolean;
  views: number;
  isPromoted: boolean;
  trendingType: number;
  insertedAt: Date;
  hashtag_trend: PointInHashtagTrend[];
};

export type PointInHashtagTrend = {
  id: string;
  hashtagId: string;
  recordedForUnixTime: number;
  interest: number;
};
