import type { EventEmotions } from "@/models/EventEmotions";
import { AR, BR, US } from "country-flag-icons/react/3x2";

export const speakers = [
  {
    id: "1",
    name: "ThePrimeagen",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSVWa9XHeY-UfQhDzlvXGJyx44ef32ulOkQ&s",
    bio: "Streamer e Youtuber americano conhecido por sua obsessão por Neovim, engenharia e atualmente trabalha na Netflix.",
    nationality: US,
  },
  {
    id: "2",
    name: "Rafaella Ballerini",
    avatar: "https://github.com/rafaballerini.png",
    bio: "Criadora de conteúdo de tecnologia, guiando pessoas que desejam iniciar na área de desenvolvimento de software.",
    nationality: BR,
  },
  {
    id: "3",
    name: "Keit Oliveira",
    avatar: "https://github.com/k8adev.png",
    bio: "Programadora há 15 anos, podcaster, livecoder e organizadora de eventos de tecnologia.",
    nationality: BR,
  },
  {
    id: "4",
    name: "Lucas Santos",
    avatar: "https://github.com/khaosdoctor.png",
    bio: "Engenheiro de software brasileiro, atualmente trabalhando na Suécia para @openvolt! Especialista em TypeScript, Deno e Node.js",
    nationality: BR,
  },
  {
    id: "5",
    name: "Junior Garcia",
    avatar: "https://github.com/jrgarciadev.png",
    bio: "Desenvolvedor de software baseado em Buenos Aires, AR, especializado em criar sites e aplicativos móveis excepcionais, e tudo o mais.",
    nationality: AR,
  },
  {
    id: "6",
    name: "Zeno Rocha",
    avatar: "https://github.com/zenorocha.png",
    bio: "Programador e criador de conteúdo brasileiro. Atualmente, ele mora em São Francisco, Califórnia, onde é o Fundador e CEO da Resend.",
    nationality: BR,
  },
];

function generateRandomNumber(min = 100, max = 500) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const heatmapData = [
  {
    name: "Stand Natura",
    location: { top: "46%", left: "35%" },
    users: generateRandomNumber(100, 5000),
  },
  {
    name: "Palco Production",
    location: { top: "46%", left: "84%" },
    users: generateRandomNumber(100, 5000),
  },
  {
    name: "Arena de competição",
    location: { top: "78%", left: "60.5%" },
    users: generateRandomNumber(100, 5000),
  },
  {
    name: "Circuito Iniciação Científica",
    location: { top: "10%", left: "60.5%" },
    users: generateRandomNumber(100, 5000),
  },
  {
    name: "Arena Startup One",
    location: { top: "90%", left: "92%" },
    users: generateRandomNumber(100, 5000),
  },
  {
    name: "Stand Azion",
    location: { top: "34%", left: "50%" },
    users: generateRandomNumber(100, 5000),
  },
  {
    name: "Stand Plusoft",
    location: { top: "68%", left: "40%" },
    users: generateRandomNumber(100, 5000),
  },
  {
    name: "Praça de alimentação",
    location: { top: "15%", left: "14%" },
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

export const events = [
  {
    id: "1",
    title: 'Roundtable: "The future of modern applications"',
    date: "2024-10-26T11:00:00",
    speaker: speakers[0],
    place: "Palco Production",
  },
  {
    id: "2",
    title: "Frontend além do código",
    date: "2024-10-26T11:00:00",
    speaker: speakers[1],
    place: "Palco Staging",
  },
  {
    id: "3",
    title: "Como usar acessibilidade web no seu projeto frontend na prática!",
    date: "2024-10-26T12:00:00",
    speaker: speakers[2],
    place: "Palco Production",
  },
  {
    id: "4",
    title:
      "Código de Escala Global: Desafios tecnológicos para milhões de usuários",
    date: "2024-10-26T12:00:00",
    speaker: speakers[3],
    place: "Palco Staging",
  },
];

export const eventSegments = [
  { value: "ia-iot", label: "🤖 IA e IoT" },
  { value: "turismo", label: "✈️ Turismo e Viagens" },
  { value: "agronegocio", label: "🌲 Agronegócio" },
  { value: "banking", label: "💸 Banking" },
  { value: "alimentacao", label: "🍔 Alimentação e bebidas" },
  { value: "moda", label: "👗 Moda" },
  { value: "educacao", label: "📚 Educação" },
  { value: "comercio", label: "🛒 Varejo e Comércio" },
  { value: "saude", label: "👨‍⚕️ Saúde" },
  {
    value: "sustentabilidade",
    label: "🍃 Meio Ambiente e Sustentabilidade",
  },
  { value: "governança", label: "💼 Governança" },
  { value: "transporte", label: "🚌 Locomoção e transporte" },
  { value: "entretenimento", label: "📷 Mídia e Entretenimento" },
  { value: "jogos", label: "🎮 Jogos digitais" },
  { value: "seguranca", label: "🔒 Segurança" },
];
