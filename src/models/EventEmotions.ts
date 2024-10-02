export type EventEmotions = Partial<{
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
}> & {
  date: string;
};

export type EmotionName = Omit<keyof EventEmotions, "date">;
