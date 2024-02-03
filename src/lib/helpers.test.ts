import { expect, test } from "vitest";
import type { Hashtag } from "./types";
import { compareHashtags } from "./helpers";

test("hashtagSort", () => {
  const hashtags = [blizzard, rainyday];
  hashtags.sort((a, b) => compareHashtags(b, a));
  expect(hashtags[0].name).toBe("rainyday");
  expect(hashtags[1].name).toBe("blizzard");
});

const blizzard: Hashtag = {
  id: "9b62c08e-00c2-4066-a9b2-7f29144dbdaf",
  name: "blizzard",
  countryCode: "US",
  posts: 2251,
  rank: 64,
  latestTrending: true,
  views: 15623315,
  isPromoted: false,
  trendingType: 0,
  createdAt: new Date("2024-01-11T09:19:58.000Z"),
  trend: [
    {
      time: 1704326400,
      value: 29,
    },
    {
      time: 1704412800,
      value: 30,
    },
    {
      time: 1704499200,
      value: 30,
    },
    {
      time: 1704585600,
      value: 37,
    },
    {
      time: 1704672000,
      value: 62,
    },
    {
      time: 1704758400,
      value: 71,
    },
    {
      time: 1704844800,
      value: 100,
    },
  ],
};

const rainyday: Hashtag = {
  id: "9927ad18-529f-44b1-ab4c-41f4dc05eeea",
  name: "rainyday",
  countryCode: "US",
  posts: 3107,
  rank: 51,
  latestTrending: true,
  views: 9614128,
  isPromoted: false,
  trendingType: 0,
  createdAt: new Date("2024-01-11T09:19:58.000Z"),
  trend: [
    {
      time: 1704326400,
      value: 45,
    },
    {
      time: 1704412800,
      value: 38,
    },
    {
      time: 1704499200,
      value: 30,
    },
    {
      time: 1704585600,
      value: 56,
    },
    {
      time: 1704672000,
      value: 58,
    },
    {
      time: 1704758400,
      value: 60,
    },
    {
      time: 1704844800,
      value: 100,
    },
  ],
};
