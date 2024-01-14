import type { Hashtag } from "./types";

export function classNames(
  className1: string,
  className2: string | undefined
): string {
  if (!className2) {
    return className1;
  }

  return className1 + " " + className2;
}

export function isHighGrowthHashtag(hashtag: Hashtag): boolean {
  // final interest is highest
  const interestMinus1 = getHashtagInterestAtPosition(hashtag, -1);
  if (interestMinus1 < 100) {
    return false;
  }

  // final growth delta is sufficiently high
  const interestMinus2 = getHashtagInterestAtPosition(hashtag, -2);
  const changeMinus1 = interestMinus1 - interestMinus2;
  if (changeMinus1 < 20) {
    return false;
  }

  // final growth delta is higher than previous growth delta
  const interestMinus3 = getHashtagInterestAtPosition(hashtag, -3);
  const changeMinus2 = interestMinus2 - interestMinus3;
  if (changeMinus2 + 20 > changeMinus1) {
    return false;
  }

  // all interest points besides final one aren't too high
  for (let i = 0; i < hashtag.hashtagTrend.length - 1; i++) {
    if (hashtag.hashtagTrend[i].interest > 80) {
      return false;
    }
  }

  return true;
}

function getHashtagInterestAtPosition(hashtag: Hashtag, input: number): number {
  return hashtag.hashtagTrend.slice(input)[0].interest;
}

export function compareHashtags(a: Hashtag, b: Hashtag): number {
  const aDelta =
    getHashtagInterestAtPosition(a, -1) - getHashtagInterestAtPosition(a, -2);

  const bDelta =
    getHashtagInterestAtPosition(b, -1) - getHashtagInterestAtPosition(b, -2);

  const deltaDiff = aDelta - bDelta;
  if (deltaDiff != 0) {
    return deltaDiff;
  }

  const viewsDiff = a.views - b.views;
  if (viewsDiff != 0) {
    return viewsDiff;
  }

  const postsDiff = a.posts - b.posts;
  if (postsDiff != 0) {
    return postsDiff;
  }

  return 0;
}

export const WebsiteCodeToCountryCode: Record<string, string> = {
  US: "US",
  UK: "GB",
};
