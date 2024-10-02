import type { EventEmotions } from "@/models/EventEmotions";

function generateRandomNumber(min = 100, max = 500) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const heatmapData = [
  {
    name: "Stand Natura",
    location: { top: '46%', left: '35%' },
    users: generateRandomNumber(100, 5000),
  },
  {
    name: "Palco principal",
    location: { top: '46%', left: '84%' },
    users: generateRandomNumber(100, 5000),
  },
  {
    name: "Arena de competição",
    location: { top: '78%', left: '60.5%' },
    users: generateRandomNumber(100, 5000),
  },
  {
    name: "Circuito Iniciação Científica",
    location: { top: '10%', left: '60.5%' },
    users: generateRandomNumber(100, 5000),
  },
  {
    name: "Arena Startup One",
    location: { top: '90%', left: '92%' },
    users: generateRandomNumber(100, 5000),
  },
  {
    name: "Stand Azion",
    location: { top: '34%', left: '50%' },
    users: generateRandomNumber(100, 5000),
  },
  {
    name: "Stand Plusoft",
    location: { top: '68%', left: '40%' },
    users: generateRandomNumber(100, 5000),
  },
  {
    name: "Praça de alimentação",
    location: { top: '15%', left: '14%' },
    users: generateRandomNumber(100, 5000),
  },
].sort((a, b) => b.users - a.users);

export const eventEmotions: EventEmotions[] = [
  {
    happiness: 130,
    enthusiasm: 51,
    neutral: 40,
    sadness: 30,
    surprise: 20,
    anger: 6,
    date: "2024-09-15",
  },
];

export const pollsData = [
  {
    title: "Qual  framework você acha melhor?",
    data: [
      { option: "React", amount: generateRandomNumber() },
      { option: "Svelte", amount: generateRandomNumber() },
      { option: "Vue", amount: generateRandomNumber() },
    ],
  },
  {
    title: "Qual speaker você mais gostou hoje?",
    data: [
      { option: "Lucas Santos", amount: generateRandomNumber() },
      { option: "Rafaella Ballerini", amount: generateRandomNumber() },
      { option: "The Primeagen", amount: generateRandomNumber() },
    ],
  },
  {
    title: "Você prefere qual tipo de estilização?",
    data: [
      { option: "Tailwind", amount: generateRandomNumber() },
      { option: "Inline CSS", amount: generateRandomNumber() },
      { option: "CSS-in-JS", amount: generateRandomNumber() },
    ],
  },
];
