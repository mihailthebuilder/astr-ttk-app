import { expect, test } from "vitest";
import type { Hashtag } from "./types";
import { compareHashtags } from "./helpers";

test("hashtagSort", () => {
  const hashtags = [blizzard, rainyday];
  hashtags.sort((a, b) => compareHashtags(a, b));
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
  hashtagTrend: [
    {
      id: "44bfcbfa-9f68-411b-834b-6507ed731c91",
      hashtagId: "9b62c08e-00c2-4066-a9b2-7f29144dbdaf",
      recordedForUnixTime: 1704326400,
      interest: 29,
    },
    {
      id: "eda9a485-d277-4766-b9d5-ead600f11b01",
      hashtagId: "9b62c08e-00c2-4066-a9b2-7f29144dbdaf",
      recordedForUnixTime: 1704412800,
      interest: 30,
    },
    {
      id: "d7d75965-6ed3-4c93-a6fd-e0d9781cc7dd",
      hashtagId: "9b62c08e-00c2-4066-a9b2-7f29144dbdaf",
      recordedForUnixTime: 1704499200,
      interest: 30,
    },
    {
      id: "264490da-5f83-474a-8f2b-7f7f217ecf51",
      hashtagId: "9b62c08e-00c2-4066-a9b2-7f29144dbdaf",
      recordedForUnixTime: 1704585600,
      interest: 37,
    },
    {
      id: "4e2abde6-70b7-4285-b737-5a06d34c214f",
      hashtagId: "9b62c08e-00c2-4066-a9b2-7f29144dbdaf",
      recordedForUnixTime: 1704672000,
      interest: 62,
    },
    {
      id: "71aee87a-bc4c-493d-90fe-029e6e7f9cad",
      hashtagId: "9b62c08e-00c2-4066-a9b2-7f29144dbdaf",
      recordedForUnixTime: 1704758400,
      interest: 71,
    },
    {
      id: "34f4469b-c1a5-43a4-9d54-0f1745cc1074",
      hashtagId: "9b62c08e-00c2-4066-a9b2-7f29144dbdaf",
      recordedForUnixTime: 1704844800,
      interest: 100,
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
  hashtagTrend: [
    {
      id: "b756df9d-3768-454b-a43e-94c6a840c2e5",
      hashtagId: "9927ad18-529f-44b1-ab4c-41f4dc05eeea",
      recordedForUnixTime: 1704326400,
      interest: 45,
    },
    {
      id: "9c74778c-8325-44d1-b901-f29d495494de",
      hashtagId: "9927ad18-529f-44b1-ab4c-41f4dc05eeea",
      recordedForUnixTime: 1704412800,
      interest: 38,
    },
    {
      id: "d5d677d4-7081-4aad-a549-d2725f06c174",
      hashtagId: "9927ad18-529f-44b1-ab4c-41f4dc05eeea",
      recordedForUnixTime: 1704499200,
      interest: 30,
    },
    {
      id: "4daed74b-6a52-450e-8b98-745c8182f6a2",
      hashtagId: "9927ad18-529f-44b1-ab4c-41f4dc05eeea",
      recordedForUnixTime: 1704585600,
      interest: 56,
    },
    {
      id: "1b341740-ba83-4227-9914-635419e5fa2e",
      hashtagId: "9927ad18-529f-44b1-ab4c-41f4dc05eeea",
      recordedForUnixTime: 1704672000,
      interest: 58,
    },
    {
      id: "744dcef6-4caa-4a02-a164-a5d0e4556861",
      hashtagId: "9927ad18-529f-44b1-ab4c-41f4dc05eeea",
      recordedForUnixTime: 1704758400,
      interest: 60,
    },
    {
      id: "b36834e1-7e5b-4d35-abdd-3577d85021f8",
      hashtagId: "9927ad18-529f-44b1-ab4c-41f4dc05eeea",
      recordedForUnixTime: 1704844800,
      interest: 100,
    },
  ],
};
