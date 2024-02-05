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
  // final interest isn't too low
  const interestMinus1 = getHashtagInterestAtPosition(hashtag, -1);
  if (interestMinus1 < 95) {
    return false;
  }

  // hasn't already peaked in the past
  const lastHashtagIndex = hashtag.trend.length - 1;
  for (let i = 0; i < lastHashtagIndex; i++) {
    if (
      getHashtagInterestAtPosition(hashtag, i) >
      getMaxInterest(i, lastHashtagIndex)
    ) {
      return false;
    }
  }

  return true;
}

function getMaxInterest(index: number, lastHashtagIndex: number): number {
  const distance = lastHashtagIndex - index;

  if (distance > 5) {
    return 70;
  }

  return 100;
}

function getHashtagInterestAtPosition(hashtag: Hashtag, input: number): number {
  return hashtag.trend.slice(input)[0].value;
}

export function compareHashtags(a: Hashtag, b: Hashtag): number {
  const aHighGrowth = isHighGrowthHashtag(a);
  const bHighGrowth = isHighGrowthHashtag(b);

  if (aHighGrowth && !bHighGrowth) {
    return 1;
  }

  if (!aHighGrowth && bHighGrowth) {
    return -1;
  }

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

export const CountryMap = new Map<string, Country>([
  ["us", { label: "the US", tiktokCode: "US" }],
  ["uk", { label: "the UK", tiktokCode: "GB" }],
  ["pk", { label: "Pakistan", tiktokCode: "PK" }],
]);

type Country = {
  label: string;
  tiktokCode: string;
};
