//type CookieSurveyInput = unknown;
type CookieSurveyInput<T> = keyof T;

const cookieInventory = {
  chocolate: 1,
  sugar: 20,
  gingerBread: 10,
  peanutButter: 30,
  snickeDoodle: 73,
};
type test_cookies_actual = CookieSurveyInput<typeof cookieInventory>;

const unrelated = {
  hi: 1,
  hi2: 1,
  hi3: 1,
  hi4: 1,
  hi5: 1,
  hi6: 1,
  hi7: 1,
};
type test_unrelated_actual = CookieSurveyInput<typeof unrelated>;

// type GiftWrapper = {
//     present: unknown;
//     from: unknown;
//     to: unknown;
//   }
type GiftWrapper<PRESENT, FROM, TO> = {
  present: PRESENT;
  from: FROM;
  to: TO;
};

type test_SantaToTrash_actual = GiftWrapper<'Car', 'Santa', 'Trash'>;
//type test_SantaToTrash_expected = { present: 'Car', from: 'Santa', to: 'Trash' };
type test_TrashToPrime_actual = GiftWrapper<'vscode', 'Trash', 'Prime'>;
type test_DanToEvan_actual = GiftWrapper<'javascript', 'Dan', 'Evan'>;

// type Address = { address: string; city: string };
// type PresentDeliveryList = unknown;

type Address = { address: string; city: string };
//type PresentDeliveryList = unknown;

type PresentDeliveryList<T> = {
  [K in keyof T]: Address;
};

type MixedBehaviorList = {
  john: { behavior: 'good' };
  jimmy: { behavior: 'bad' };
  sara: { behavior: 'good' };
  suzy: { behavior: 'good' };
  chris: { behavior: 'good' };
  penny: { behavior: 'bad' };
};
type test_MixedBehaviorTest_actual = PresentDeliveryList<MixedBehaviorList>;

//type SantasList = unknown;
type SantasList<T extends readonly unknown[], U extends readonly unknown[]> = [
  ...T,
  ...U
];

const bads = ['tommy', 'trash'] as const;
const goods = ['bash', 'tru'] as const;

type test_0_actual1 = SantasList<typeof bads, typeof goods>;
//type test_0_expected = ['tommy', 'trash', 'bash', 'tru'];
type test_1_actual2 = SantasList<[], []>;
//type test_1_expected = [];
type test_2_actual3 = SantasList<[], ['trash']>;
//type test_2_expected = ['trash'];
type test_3_actual = SantasList<['john'], ['ashley', 'elliot', 'ziltoid']>;
//type test_3_expected = ['john', 'ashley', 'elliot', 'ziltoid'];
type test_4_actual = SantasList<
  ['1', 2, '3'],
  [false, boolean, '4', ['nested']]
>;
//type test_4_expected = ['1', 2, '3', false, boolean, '4', ['nested']];

// type FilterChildrenBy = unknown;
type FilterChildrenBy<T, U> = Exclude<T, U>;

type test_0_actual = FilterChildrenBy<
  //   ^?
  'nice' | 'nice' | 'nice',
  'naughty'
>;
type test_0_expected = 'nice';

type test_1_actual = FilterChildrenBy<
  //   ^?
  'nice' | 'naughty' | 'naughty',
  'naughty'
>;
//type test_1_expected = 'nice';
//type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = FilterChildrenBy<
  //   ^?
  string | number | (() => void),
  Function
>;
//type test_2_expected = string | number;

// type AppendGood = unknown;
type AppendGood<T> = {
  [K in keyof T as K extends string ? `good_${K}` : K]: T[K];
};

type WellBehavedList = {
  tom: { address: '1 candy cane lane' };
  timmy: { address: '43 chocolate dr' };
  trash: { address: '637 starlight way' };
  candace: { address: '12 aurora' };
};
type test_wellBehaved_actual = AppendGood<WellBehavedList>;
//   ^?
type test_wellBehaved_expected = {
  good_tom: { address: '1 candy cane lane' };
  good_timmy: { address: '43 chocolate dr' };
  good_trash: { address: '637 starlight way' };
  good_candace: { address: '12 aurora' };
};

type Unrelated = {
  dont: 'cheat';
  play: 'fair';
};
//   type test_Unrelated_actual = AppendGood<Unrelated>;
//   ^?
type test_Unrelated_expected = {
  good_dont: 'cheat';
  good_play: 'fair';
};

//type RemoveNaughtyChildren = unknown;

type RemoveNaughtyChildren<T> = Omit<T, `${'naughty_'}${string}`>;
// type RemoveNaughtyChildren<T, N extends string = "naughty_"> = {
// 	[K in keyof T as K extends `${N}${string}` ? never : K]: T[K];
// };

type SantasList2 = {
  naughty_tom: { address: '1 candy cane lane' };
  good_timmy: { address: '43 chocolate dr' };
  naughty_trash: { address: '637 starlight way' };
  naughty_candace: { address: '12 aurora' };
};
type test_wellBehaved_actual2 = RemoveNaughtyChildren<SantasList2>;
//   ^?
// type test_wellBehaved_expected = {
//   good_timmy: { address: '43 chocolate dr' };
// };
type Unrelated3 = {
  dont: 'cheat';
  naughty_play: 'fair';
};
type test_Unrelated_actual3 = RemoveNaughtyChildren<Unrelated3>;
//   ^?
// type test_Unrelated_expected = {
//   dont: 'cheat';
// };

// type Reverse = unknown;
type Reverse<WORD extends string> =
  WORD extends `${infer FirstLetter}${infer RestWord}`
    ? `${Reverse<RestWord>}${FirstLetter}`
    : '';

type test_0_actual3 = Reverse<'rehsaD'>;
//type test_0_expected = 'Dasher';
type test_1_actual3 = Reverse<'recnaD'>;
//type test_1_expected = 'Dancer';

//type StreetSufixTester = unknown;
// type StreetSuffixTester<T extends string, Suffix extends string> = T extends `${infer _}${Suffix}`
// 	? true
// 	: false;
type StreetSufixTester<T, K extends string> = T extends `${any} ${K}`
  ? true
  : false;

type test_0_actual4 = StreetSufixTester<'Candy Cane Way', 'Way'>;
// type test_0_expected = true;
type test_1_actual4 = StreetSufixTester<'Chocalate Drive', 'Drive'>;
//type test_1_expected = true;
type test_2_actual4 = StreetSufixTester<'Sugar Lane', 'Drive'>;
//type test_2_expected = false;
type test_3_actual4 = StreetSufixTester<
  'Fifth Dimensional Nebulo 9',
  'invalid'
>;
//type test_3_expected = false;

//type SantaListProtector = unknown;
// type SantaListProtector<T> = T extends Function
// 	? T
// 	: T extends object
// 		? { readonly [K in keyof T]: SantaListProtector<T[K]> }
// 		: T;

// type SantaListProtector<T> = keyof T extends never
// 	? T
// 	: { readonly [K in keyof T]: SantaListProtector<T[K]> };

type SantaListProtector<T> = T extends (...args: any) => any
  ? T
  : T extends Record<keyof any, any>
  ? {
      readonly [K in keyof T]: SantaListProtector<T[K]>;
    }
  : T;

type test_0_actual5 = SantaListProtector<{
  //   ^?
  hacksore: () => 'naughty';
  trash: string;
  elliot: {
    penny: boolean;
    candace: {
      address: {
        street: {
          name: 'candy cane way';
          num: number;
        };
        k: 'hello';
      };
      children: [
        'harry',
        {
          saying: ['hey'];
        }
      ];
    };
  };
}>;
type test_0_expected5 = {
  readonly hacksore: () => 'naughty';
  readonly trash: string;
  readonly elliot: {
    readonly penny: boolean;
    readonly candace: {
      readonly address: {
        readonly street: {
          readonly name: 'candy cane way';
          readonly num: number;
        };
        readonly k: 'hello';
      };
      readonly children: readonly [
        'harry',
        {
          readonly saying: readonly ['hey'];
        }
      ];
    };
  };
};
type test_1_actual6 = SantaListProtector<{
  //   ^?
  theo: () => 'naughty';
  prime: string;
  netflix: {
    isChill: boolean;
  };
}>;
type test_1_expected6 = {
  readonly theo: () => 'naughty';
  readonly prime: string;
  readonly netflix: {
    readonly isChill: boolean;
  };
};

//type FindSanta = unknown;

/**
 * Line 6 is checking if Forest type ends with 🎄, if so, call recursivaly FindSanta on line 7
 * Line 8, is call when Forest does not ends with 🎄, so if Forest ends with 🎅🏼, return its length
 * Line 10 is call when there is no santa on the list
 */
type FindSanta<Forest> = Forest extends [...infer SantaPosition, '🎄']
  ? FindSanta<SantaPosition>
  : Forest extends [...infer TreePostion, '🎅🏼']
  ? TreePostion['length']
  : never;

type Forest0 = ['🎅🏼', '🎄', '🎄', '🎄'];
type test_0_actual7 = FindSanta<Forest0>;
//   ^?
// type test_0_expected = 0;

type Forest1 = ['🎄', '🎅🏼', '🎄', '🎄', '🎄', '🎄'];
// type test_1_actual = FindSanta<Forest1>;
//   ^?
type test_1_expected = 1;

type Forest2 = ['🎄', '🎄', '🎅🏼', '🎄'];
type test_2_actual7 = FindSanta<Forest2>;
//   ^?
// type test_2_expected = 2;

type Forest3 = ['🎄', '🎄', '🎄', '🎅🏼', '🎄'];
type test_3_actual7 = FindSanta<Forest3>;
//   ^?
// type test_3_expected = 3;

type Forest4 = ['🎄', '🎄', '🎄', '🎄'];
type test_4_actual7 = FindSanta<Forest4>;
//   ^?
// type test_4_expected = never;

//type DayCounter = unknown;
// type SizeOf<A extends unknown[]> = A extends { length: infer L } ? L : never;
// type IndexOf<T, A extends unknown[]> = A extends [...infer A2, infer LI]
// 	? LI extends T
// 		? SizeOf<A2>
// 		: IndexOf<T, A2>
// 	: never;

type DayCounter<
  S extends number,
  E extends number,
  A extends unknown[] = [unknown]
> = A extends {
  length: infer L;
}
  ? L extends E
    ? E
    : L | DayCounter<S, E, [unknown, ...A]>
  : never;

type TwelveDaysOfChristmas = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type test_0_actual7 = DayCounter<1, 12>;
//   ^?
type test_0_expected7 = TwelveDaysOfChristmas;

type DaysUntilChristmas =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25;
type test_1_actual7 = DayCounter<1, 25>;
//   ^?
type test_1_expected7 = DaysUntilChristmas;

//type DecipherNaughyList = unknown;
type DecipherNaughtyList<P extends string> =
  P extends `${infer C}/${infer Rest}` ? C | DecipherNaughtyList<Rest> : P;

type test_0_actual8 = DecipherNaughtyList<'timmy/jimmy'>;
//   ^?
type test_0_expected8 = 'jimmy' | 'timmy';

type test_1_actual8 = DecipherNaughtyList<'elliot'>;
//   ^?
type test_1_expected8 = 'elliot';

type test_2_actual8 = DecipherNaughtyList<'melkey/prime/theo/trash'>;
//   ^?
type test_2_expected = 'melkey' | 'prime' | 'theo' | 'trash';

//type BoxToys = unknown;
type BoxToys<
  T extends string,
  U extends number,
  R extends unknown[] = []
> = U extends R['length'] ? R : BoxToys<T, U, [...R, T]>;

type test_doll_actual = BoxToys<'doll', 1>;
//   ^?
type test_doll_expected = ['doll'];

type test_nutcracker_actual = BoxToys<'nutcracker', 3 | 4>;
//   ^?
type test_nutcracker_expected =
  | ['nutcracker', 'nutcracker', 'nutcracker']
  | ['nutcracker', 'nutcracker', 'nutcracker', 'nutcracker'];

//type FindSanta = unknown;
type SizeOf<A> = A extends { readonly length: infer L } ? L : never;
type FindIndex<T, A extends unknown[]> = A extends [...infer A2, infer Item]
  ? Item extends T
    ? SizeOf<A2>
    : FindIndex<T, A2>
  : -1;
type FindSanta2<A, T extends string = '🎅🏼'> = A extends [
  ...infer A1_O,
  infer A1
]
  ? A1 extends string[]
    ? FindIndex<T, A1> extends -1
      ? FindSanta2<A1_O, T>
      : [SizeOf<A1_O>, FindIndex<T, A1>]
    : never
  : never;

type Forest09 = [
  ['🎅🏼', '🎄', '🎄', '🎄'],
  ['🎄', '🎄', '🎄', '🎄'],
  ['🎄', '🎄', '🎄', '🎄'],
  ['🎄', '🎄', '🎄', '🎄']
];
type test_0_actual9 = FindSanta2<Forest0>;
//   ^?
type test_0_expected9 = [0, 0];

type Forest19 = [
  ['🎄', '🎄', '🎄', '🎄'],
  ['🎄', '🎄', '🎄', '🎄'],
  ['🎄', '🎄', '🎄', '🎄'],
  ['🎄', '🎅🏼', '🎄', '🎄']
];
type test_1_actual9 = FindSanta<Forest1>;
//   ^?
type test_1_expected9 = [3, 1];

type Forest29 = [
  ['🎄', '🎄', '🎄', '🎄'],
  ['🎄', '🎄', '🎄', '🎄'],
  ['🎄', '🎄', '🎅🏼', '🎄'],
  ['🎄', '🎄', '🎄', '🎄']
];
type test_2_actual9 = FindSanta<Forest2>;
//   ^?
type test_2_expected9 = [2, 2];

type Forest39 = [
  ['🎄', '🎄', '🎄', '🎄'],
  ['🎄', '🎄', '🎄', '🎄'],
  ['🎄', '🎅🏼', '🎄', '🎄'],
  ['🎄', '🎄', '🎄', '🎄']
];
type test_3_actual9 = FindSanta<Forest3>;
//   ^?
type test_3_expected = [2, 1];

type Forest49 = [
  ['🎄', '🎄', '🎄', '🎄'],
  ['🎄', '🎄', '🎅🏼', '🎄'],
  ['🎄', '🎄', '🎄', '🎄'],
  ['🎄', '🎄', '🎄', '🎄']
];
type test_4_actual9 = FindSanta<Forest4>;
//   ^?
type test_4_expected = [1, 2];

// type RockPaperScissors = '👊🏻' | '🖐🏾' | '✌🏽';

// type WhoWins = unknown;

// type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

// type WinCaseTable = {
// 	"👊🏻": {
// 		"👊🏻": "draw";
// 		"🖐🏾": "lose";
// 		"✌🏽": "win";
// 	};
// 	"🖐🏾": {
// 		"🖐🏾": "draw";
// 		"👊🏻": "win";
// 		"✌🏽": "lose";
// 	};
// 	"✌🏽": {
// 		"✌🏽": "draw";
// 		"👊🏻": "lose";
// 		"🖐🏾": "win";
// 	};
// };

// type WhoWins<
// 	Opponent extends RockPaperScissors,
// 	Me extends RockPaperScissors,
// > = WinCaseTable[Me][Opponent];

type RockPaperScissors = '👊🏻' | '🖐🏾' | '✌🏽';
type TrueTable = {
  '👊🏻': '✌🏽';
  '🖐🏾': '👊🏻';
  '✌🏽': '🖐🏾';
};
type WhoWins<
  F extends RockPaperScissors,
  S extends RockPaperScissors
> = S extends F ? 'draw' : F extends TrueTable[S] ? 'win' : 'lose';

type test_0_actual11 = WhoWins<'👊🏻', '🖐🏾'>;
//   ^?
type test_0_expected11 = 'win';

type test_1_actual11 = WhoWins<'👊🏻', '✌🏽'>;
//   ^?
type test_1_expected11 = 'lose';

type test_2_actual11 = WhoWins<'👊🏻', '👊🏻'>;
//   ^?
type test_2_expected11 = 'draw';

type test_3_actual11 = WhoWins<'🖐🏾', '👊🏻'>;
//   ^?
type test_3_expected11 = 'lose';

type test_4_actual11 = WhoWins<'🖐🏾', '✌🏽'>;
//   ^?
type test_4_expected11 = 'win';

type test_5_actual = WhoWins<'🖐🏾', '🖐🏾'>;
//   ^?
type test_5_expected = 'draw';

type test_6_actual = WhoWins<'✌🏽', '👊🏻'>;
//   ^?
type test_6_expected = 'win';

type test_7_actual = WhoWins<'✌🏽', '✌🏽'>;
//   ^?
type test_7_expected = 'draw';

type test_8_actual = WhoWins<'✌🏽', '🖐🏾'>;
//   ^?
type test_8_expected = 'lose';

//type Count = unknown;

type Count<
  Toys extends string[],
  FindToy extends string,
  C extends string[] = []
> = Toys extends [...infer Spread, infer Toy]
  ? Toy extends FindToy
    ? Count<Spread extends string[] ? Spread : [], FindToy, [...C, FindToy]>
    : Count<Spread extends string[] ? Spread : [], FindToy, C>
  : C['length'];

type ToySack = [
  '🎸',
  '🎧',
  '👟',
  '👟',
  '💻',
  '🪀',
  '🧩',
  '🎮',
  '🎨',
  '🕹️',
  '📱',
  '🧩',
  '🧸',
  '🎧',
  '👟',
  '🚲',
  '📚',
  '⌚',
  '🎨',
  '👟',
  '🎸',
  '🧸',
  '👟',
  '🎸',
  '📱',
  '🎧',
  '🎮',
  '🎒',
  '📱',
  '🧩',
  '🧩',
  '🚲',
  '🕹️',
  '🧵',
  '📱',
  '🕹️',
  '🕰️',
  '🧢',
  '🕹️',
  '👟',
  '🧸',
  '📚',
  '🧁',
  '🧩',
  '🎸',
  '🎮',
  '🧁',
  '📚',
  '💻',
  '⌚',
  '🛹',
  '🧁',
  '🧣',
  '🪁',
  '🎸',
  '🧸',
  '🧸',
  '🧸',
  '🧩',
  '🪁',
  '🏎️',
  '🏎️',
  '🧁',
  '📚',
  '🧸',
  '🕶️',
  '💻',
  '⌚',
  '⌚',
  '🕶️',
  '🎧',
  '🎧',
  '🎧',
  '💻',
  '👟',
  '🎸',
  '💻',
  '🪐',
  '📚',
  '🎨',
  '📱',
  '🎧',
  '📱',
  '🎸',
  '🏎️',
  '👟',
  '🚲',
  '📱',
  '🚲',
  '🎸'
];

type test_0_actual12 = Count<ToySack, '👟'>;
//   ^?
type test_0_expected12 = 8;

type test_1_actual12 = Count<ToySack, '🧦'>;
//   ^?
type test_1_expected12 = 0;

type test_2_actual12 = Count<ToySack, '🧩'>;
//   ^?
type test_2_expected12 = 6;

type test_3_actual12 = Count<ToySack, '🛹'>;
//   ^?
type test_3_expected12 = 1;

type test_4_actual12 = Count<ToySack, '🏎️'>;
//   ^?
type test_4_expected12 = 3;

type test_5_actual12 = Count<ToySack, '📚'>;
//   ^?
type test_5_expected12 = 5;

//type Rebuild = unknown;
type StuffList = ['🛹', '🚲', '🛴', '🏄'];
type IsArrayWithLength<A, L extends number> = A extends { readonly length: L }
  ? A
  : never;
type ArrayWithLength<
  T,
  L extends number,
  A extends T[] = [T]
> = IsArrayWithLength<A, L> extends never
  ? ArrayWithLength<T, L, [...A, T]>
  : A;
type SizeOf<A> = A extends { readonly length: infer L } ? L : never;
type PickStuff<
  I extends number,
  L extends string[] = StuffList
> = L[I] extends string ? L[I] : PickStuff<I, [...L, ...L]>;
type Rebuild<L extends number[]> = L extends [...infer Other, infer I1]
  ? [
      ...Rebuild<Other extends number[] ? Other : never>,
      ...ArrayWithLength<PickStuff<SizeOf<Other>>, I1 extends number ? I1 : 0>
    ]
  : [];
type test_0_actual13 = Rebuild<[2, 1, 3, 3, 1, 1, 2]>;
//   ^?
type test_0_expected13 = [
  '🛹',
  '🛹',
  '🚲',
  '🛴',
  '🛴',
  '🛴',
  '🏄',
  '🏄',
  '🏄',
  '🛹',
  '🚲',
  '🛴',
  '🛴'
];

type test_1_actual13 = Rebuild<[3, 3, 2, 1, 2, 1, 2]>;
//   ^?
type test_1_expected13 = [
  '🛹',
  '🛹',
  '🛹',
  '🚲',
  '🚲',
  '🚲',
  '🛴',
  '🛴',
  '🏄',
  '🛹',
  '🛹',
  '🚲',
  '🛴',
  '🛴'
];

type test_2_actual13 = Rebuild<[2, 3, 3, 5, 1, 1, 2]>;
//   ^?
type test_2_expected13 = [
  '🛹',
  '🛹',
  '🚲',
  '🚲',
  '🚲',
  '🛴',
  '🛴',
  '🛴',
  '🏄',
  '🏄',
  '🏄',
  '🏄',
  '🏄',
  '🛹',
  '🚲',
  '🛴',
  '🛴'
];
