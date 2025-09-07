import { Bet, BigWinCardProps } from "@/types/Dashboard-type";
import {
  HomeIcon,
  CubeTransparentIcon,
  FireIcon,
  Squares2X2Icon,
  VideoCameraIcon,
  PlayCircleIcon,
  TableCellsIcon,
  SparklesIcon,
  StarIcon,
  SquaresPlusIcon,
  SwatchIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";

export const bets: Bet[] = [
  {
    game: "Bonbon Bon...",
    player: "KevinOrtega",
    amount: "$263",
    currency: "S",
    multiplier: "1.73x",
    profit: "+454.99",
    profitCurrency: "S",
  },
  {
    game: "Pixel Paws",
    player: "YaelSchmitt",
    amount: "762",
    currency: "T",
    multiplier: "3.49x",
    profit: "+2659.38",
    profitCurrency: "T",
  },
  {
    game: "Stunning Cash",
    player: "Xiaoliapiski24",
    amount: "R$238",
    currency: "RS",
    multiplier: "2.61x",
    profit: "+621.18",
    profitCurrency: "RS",
  },
  {
    game: "Haunted Reels",
    player: "YingCollins",
    amount: "R$561",
    currency: "RS",
    multiplier: "1.55x",
    profit: "+869.55",
    profitCurrency: "RS",
  },
  {
    game: "Kokeshi Pop",
    player: "HiroshiBraun",
    amount: "116",
    currency: "T",
    multiplier: "4.52x",
    profit: "+524.32",
    profitCurrency: "T",
  },
  {
    game: "Lady Wolf ...",
    player: "Andreaeki",
    amount: "R$747",
    currency: "RS",
    multiplier: "2.57x",
    profit: "+1919.79",
    profitCurrency: "RS",
  },
  {
    game: "Energy Stars",
    player: "CarolinePetrova",
    amount: "€282",
    currency: "EUR",
    multiplier: "2.73x",
    profit: "+769.86",
    profitCurrency: "EUR",
  },
  {
    game: "Secret Book...",
    player: "LanGumundsson",
    amount: "R$693",
    currency: "RS",
    multiplier: "2.94x",
    profit: "+2037.42",
    profitCurrency: "RS",
  },
  {
    game: "In Jazz",
    player: "IrinaGujnsson",
    amount: "716",
    currency: "T",
    multiplier: "3.92x",
    profit: "+2806.72",
    profitCurrency: "T",
  },
  {
    game: "Wild Turkey ...",
    player: "SitaMarkov99",
    amount: "$182",
    currency: "S",
    multiplier: "4.98x",
    profit: "+906.36",
    profitCurrency: "S",
  },
];

export const wins: BigWinCardProps[] = [
  {
    imgSrc: "/images/bingoadventure.avif",
    player: "Lilian Harper",
    amount: "$ 1,798.17",
  },
  {
    imgSrc: "/images/fieryslots.avif",
    player: "Susan Crawford",
    amount: "$ 9,257.84",
  },
  {
    imgSrc: "/images/lampofwonder.avif",
    player: "Mali Johnson",
    amount: "$ 9,182.10",
  },
  {
    imgSrc: "/images/mayagoldcrazy.avif",
    player: "Chan Park",
    amount: "$ 9,788.23",
  },
  {
    imgSrc: "/images/pushycats.avif",
    player: "Maria Gomez",
    amount: "$ 411.83",
  },
  {
    imgSrc: "/images/reellove.avif",
    player: "Mali Johnson",
    amount: "$ 4,965.29",
  },
  {
    imgSrc: "/images/shiftingseas.avif",
    player: "Richard Lewis",
    amount: "$ 5,021.64",
  },
  {
    imgSrc: "/images/wildbuffalo.avif",
    player: "Johan Svensson",
    amount: "$ 5,751.58",
  },
  {
    imgSrc: "/images/wolfofxmasstreet.avif",
    player: "Sophia Johnson",
    amount: "$ 7,823.11",
  },
  {
    imgSrc: "/images/wolfreelsrapidlink.avif",
    player: "Liam Smith",
    amount: "$ 3,412.75",
  },
];

export const recommendedGameTiles = [
  { src: "/images/recommended/bankerplayer.png", alt: "Banker Player" },
  { src: "/images/recommended/hashevenodd.png", alt: "Hash Even Odd" },
  { src: "/images/recommended/dreamsofmacau.png", alt: "Dreams of Macau" },
  { src: "/images/recommended/luckyhash.png", alt: "Lucky Hash" },
  { src: "/images/recommended/ganeshgold.png", alt: "Ganesh Gold" },
  { src: "/images/recommended/3minhash.png", alt: "3 Minute Hash" },
  {
    src: "/images/recommended/3minhashbanker.png",
    alt: "3 Minute Hash Banker",
  },
  { src: "/images/recommended/hashbullfight.png", alt: "Hash Bull Fight" },
  { src: "/images/recommended/cocktailnights.png", alt: "CockTail Nights" },
  { src: "/images/recommended/1minhash.png", alt: "1 Minute Hash" },
  { src: "/images/recommended/3minluckyhash.png", alt: "3 Minute Lucky Hash" },
];

export const slotsGameTiles = [
  { src: "/images/slots/fibonacci.png", alt: "Banker Player" },
  { src: "/images/slots/goldstrike2.png", alt: "Hash Even Odd" },
  {
    src: "/images/slots/lucyluckandthecrimsondiamond.png",
    alt: "Dreams of Macau",
  },
  { src: "/images/slots/mayagold.png", alt: "Lucky Hash" },
  { src: "/images/slots/megacity.png", alt: "Ganesh Gold" },
  { src: "/images/slots/reellove.png", alt: "3 Minute Hash" },
  { src: "/images/slots/santasgiftrush.png", alt: "Hash Bull Fight" },
  { src: "/images/slots/thunderwheel.png", alt: "CockTail Nights" },
  { src: "/images/slots/vampiresvswolves.png", alt: "1 Minute Hash" },
  { src: "/images/slots/wildbuffalo.png", alt: "3 Minute Lucky Hash" },
];

export const liveCasinoGameTiles = [
  { src: "/images/livecasino/blackjack.png", alt: "Banker Player" },
  { src: "/images/livecasino/blackjack2.png", alt: "Hash Even Odd" },
  {
    src: "/images/livecasino/blackjackitalianovip.png",
    alt: "Dreams of Macau",
  },
  { src: "/images/livecasino/blackjackvzn8.png", alt: "Lucky Hash" },
  { src: "/images/livecasino/speedroulette.png", alt: "Ganesh Gold" },
  { src: "/images/livecasino/dragontiger.png", alt: "3 Minute Hash" },
  {
    src: "/images/livecasino/multiplayerroulette.png",
    alt: "3 Minute Hash Banker",
  },
  { src: "/images/livecasino/ruyiroulette.png", alt: "Hash Bull Fight" },
  { src: "/images/livecasino/turkishblackjack6.png", alt: "CockTail Nights" },
  { src: "/images/livecasino/turkishblackjack7.png", alt: "1 Minute Hash" },
  {
    src: "/images/livecasino/turkishblackjack8.png",
    alt: "3 Minute Lucky Hash",
  },
];

export const categories = [
  { label: "Lobby", href: "/lobby", Icon: HomeIcon, active: true },
  { label: "Hash Games", href: "/hash-games", Icon: CubeTransparentIcon },
  { label: "Hot Games", href: "/hot-games", Icon: FireIcon },
  { label: "Slots", href: "/slots", Icon: Squares2X2Icon },
  { label: "Live Casino", href: "/live-casino", Icon: VideoCameraIcon },
  { label: "Game Shows", href: "/game-shows", Icon: PlayCircleIcon },
  { label: "Table Games", href: "/table-games", Icon: TableCellsIcon },
  { label: "New Releases", href: "/new", Icon: SparklesIcon },
  { label: "Providers", href: "/providers", Icon: StarIcon },
  { label: "Top Picks", href: "/top", Icon: SquaresPlusIcon },
  { label: "Themes", href: "/themes", Icon: SwatchIcon },
  { label: "Leisure", href: "/leisure", Icon: FaceSmileIcon },
];

export const gameShowsGameTiles = [
  { src: "/images/gameshows/zodiacbingo.png", alt: "Banker Player" },
  { src: "/images/gameshows/superbingo.png", alt: "Hash Even Odd" },
  { src: "/images/gameshows/shengxiaobingo.png", alt: "Dreams of Macau" },
  { src: "/images/gameshows/mines.png", alt: "Lucky Hash" },
  { src: "/images/gameshows/mbitmines.png", alt: "Ganesh Gold" },
  { src: "/images/gameshows/koibingo.png", alt: "3 Minute Hash" },
  {
    src: "/images/gameshows/frogprincess.png",
    alt: "3 Minute Hash Banker",
  },
  { src: "/images/gameshows/calacabingo.png", alt: "Hash Bull Fight" },
  { src: "/images/gameshows/burningpearlnumbers.png", alt: "CockTail Nights" },
  { src: "/images/gameshows/burningpearlnumbers.png", alt: "1 Minute Hash" },
  { src: "/images/gameshows/bingoempire.png", alt: "3 Minute Lucky Hash" },
  { src: "/images/gameshows/bingoadventure.png", alt: "3 Minute Lucky Hash" },
];

export const popularGameTiles = [
  { src: "/images/popular/royalkitties.png", alt: "Banker Player" },
  { src: "/images/popular/luckyneko.png", alt: "Hash Even Odd" },
  { src: "/images/popular/leprechaunriches.png", alt: "Dreams of Macau" },
  { src: "/images/popular/dayofmuerte.png", alt: "Lucky Hash" },
  { src: "/images/popular/cruiseroyale.png", alt: "Ganesh Gold" },
  { src: "/images/popular/3minluckyhash.png", alt: "3 Minute Hash" },
];
