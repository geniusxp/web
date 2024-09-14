export type EventEmotions = {
  date: string;
  empty: number;
  sadness: number;
  enthusiasm: number;
  neutral: number;
  worry: number;
  surprise: number;
  love: number;
  fun: number;
  hate: number;
  happiness: number;
  boredom: number;
  relief: number;
  anger: number;
};

export type EmotionName = Omit<keyof EventEmotions, "date">;