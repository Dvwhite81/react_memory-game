export const CATEGORIES = [
  'animals',
  'cats',
  'dogs',
  'sports',
  'food',
  'flags',
  'nature',
];

export const NUM_OPTIONS = [
  '10',
  '20',
  '30',
  '40'
];

const getRandom = (urls: string[]) => {
  const random = Math.floor(Math.random() * urls.length);
  return urls[random];
}

export const getRandomUrls = (urls: string[], gameNumCards: number) => {
  const firstHalf: string[] = [];

  while (firstHalf.length < gameNumCards) {
    const random = getRandom(urls);
    if (!firstHalf.includes(random)) {
      firstHalf.push(random);
    }
  }

  const secondHalf: string[] = [];

  while (secondHalf.length < firstHalf.length) {
    const random = getRandom(firstHalf);
    if (!secondHalf.includes(random)) {
      secondHalf.push(random);
    }
  }

  return [...firstHalf, ...secondHalf];
}
