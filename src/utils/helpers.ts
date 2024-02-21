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

export const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export const getRandomUrls = (urls: string[], gameNumCards: number) => {
  const results = [];

  const firstHalf = urls.slice(0, gameNumCards);
  shuffleArray(firstHalf);
  results.push(...firstHalf);

  const secondHalf = shuffleArray(firstHalf);
  results.push(...secondHalf);
  return results;
}

export const getGrid = (cardsLength: number) => {
  let cols = 1;
  let rows = 1;

  switch (cardsLength) {
    case 10: {
      cols = 5;
      rows = 2;
      break;
    }
    case 20: {
      cols = 5;
      rows = 4;
      break;
    }
    case 30: {
      cols = 6;
      rows = 5;
      break;
    }
    case 40: {
      cols = 8;
      rows = 5;
      break;
    }
    default: {
      break;
    }
  }

  return [cols, rows];
}
