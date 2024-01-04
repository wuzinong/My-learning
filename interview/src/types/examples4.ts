type Board = any[][];

//Utils
type ArrayToUnion<T extends string[]> = T[number];

type FillArray<
  T,
  N extends number,
  A extends any[] = []
> = A['length'] extends N ? A : FillArray<T, N, [T, ...A]>;

type Flatten<T extends any[] = []> = T extends [infer Head, ...infer Tail]
  ? Head extends any[]
    ? [...Flatten<Head>, ...Flatten<Tail>]
    : [Head, ...Flatten<Tail>]
  : [];

type FlattenRows<T extends any[][]> = { [I in keyof T]: Flatten<T[I]> };

type TraverseCols<T extends Array<Array<string>>, ColIndex extends number> = {
  [I in keyof T]: ColIndex extends keyof T[I] ? T[I][ColIndex] : never;
};

type TakeSegment<
  T extends string[][][],
  RowIndex extends number[] = [],
  ColIndex extends number = 0,
  Count extends number = 3,
  Res extends string[][] = []
> = Res['length'] extends Count
  ? Flatten<Res>
  : TakeSegment<
      T,
      [...RowIndex, 1],
      ColIndex,
      Count,
      [...Res, T[RowIndex['length']][ColIndex]]
    >;

type TraverseSegments<
  T extends string[][][],
  RowIndex extends number[] = [],
  ColIndex extends number[] = [],
  R extends string[][] = []
> = R['length'] extends T['length']
  ? R
  : TraverseSegments<
      T,
      ColIndex['length'] extends 2
        ? [...RowIndex, ...FillArray<1, 3>]
        : RowIndex,
      ColIndex['length'] extends 2 ? [] : [...ColIndex, 1],
      [...R, TakeSegment<T, RowIndex, ColIndex['length']>]
    >;

// Validations
type AllValid = '111';

type ValidateH<T extends Board, R extends number = 1> = R extends 0
  ? R
  : T extends [infer Head, ...infer Tail]
  ? Reindeer extends (string[] & Head)[number]
    ? Tail extends Board
      ? ValidateH<Tail, 1>
      : 0
    : 0
  : R;

type ValidateSeg<T extends Board> = ValidateH<TraverseSegments<T>>;

type ValidateV<
  T extends Board,
  Counter extends any[] = []
> = Counter['length'] extends T['length']
  ? 1
  : Reindeer extends TraverseCols<T, Counter['length']>[number]
  ? ValidateV<T, [...Counter, 1]>
  : 0;

type Validate<T extends Board> = `${ValidateH<FlattenRows<T>>}${ValidateV<
  FlattenRows<T>
>}${ValidateSeg<T>}` extends AllValid
  ? true
  : false;
type test_sudoku_1_actual = Validate<
  [
    //   ^?
    [['💨', '💃', '🦌'], ['☄️', '❤️', '🌩️'], ['🌟', '⚡', '🔴']],
    [['🌟', '⚡', '🔴'], ['💨', '💃', '🦌'], ['☄️', '❤️', '🌩️']],
    [['☄️', '❤️', '🌩️'], ['🌟', '⚡', '🔴'], ['💨', '💃', '🦌']],
    [['🦌', '💨', '💃'], ['⚡', '☄️', '❤️'], ['🔴', '🌩️', '🌟']],
    [['🌩️', '🔴', '🌟'], ['🦌', '💨', '💃'], ['⚡', '☄️', '❤️']],
    [['⚡', '☄️', '❤️'], ['🌩️', '🔴', '🌟'], ['🦌', '💨', '💃']],
    [['💃', '🦌', '💨'], ['❤️', '🌟', '☄️'], ['🌩️', '🔴', '⚡']],
    [['🔴', '🌩️', '⚡'], ['💃', '🦌', '💨'], ['❤️', '🌟', '☄️']],
    [['❤️', '🌟', '☄️'], ['🔴', '🌩️', '⚡'], ['💃', '🦌', '💨']]
  ]
>;
type test_sudoku_1 = Expect<Equal<test_sudoku_1_actual, true>>;

type test_sudoku_2_actual = Validate<
  [
    //   ^?
    [['🌩️', '💨', '☄️'], ['🌟', '🦌', '⚡'], ['❤️', '🔴', '💃']],
    [['🌟', '⚡', '❤️'], ['🔴', '💃', '☄️'], ['🌩️', '💨', '🦌']],
    [['🔴', '🦌', '💃'], ['💨', '❤️', '🌩️'], ['🌟', '⚡', '☄️']],
    [['❤️', '☄️', '🌩️'], ['💃', '⚡', '🔴'], ['💨', '🦌', '🌟']],
    [['🦌', '💃', '⚡'], ['🌩️', '🌟', '💨'], ['🔴', '☄️', '❤️']],
    [['💨', '🌟', '🔴'], ['🦌', '☄️', '❤️'], ['⚡', '💃', '🌩️']],
    [['☄️', '🔴', '💨'], ['❤️', '🌩️', '🦌'], ['💃', '🌟', '⚡']],
    [['💃', '❤️', '🦌'], ['⚡', '🔴', '🌟'], ['☄️', '🌩️', '💨']],
    [['⚡', '🌩️', '🌟'], ['☄️', '💨', '💃'], ['🦌', '❤️', '🔴']]
  ]
>;
type test_sudoku_2 = Expect<Equal<test_sudoku_2_actual, true>>;

type test_sudoku_3_actual = Validate<
  [
    //   ^?
    [['🦌', '🔴', '💃'], ['🌩️', '☄️', '💨'], ['⚡', '❤️', '🌟']],
    [['🌟', '⚡', '💨'], ['❤️', '💃', '🔴'], ['☄️', '🌩️', '🦌']],
    [['☄️', '🌩️', '❤️'], ['⚡', '🌟', '🦌'], ['💃', '🔴', '💨']],
    [['🌩️', '💃', '🔴'], ['🦌', '💨', '⚡'], ['🌟', '☄️', '❤️']],
    [['❤️', '☄️', '⚡'], ['💃', '🌩️', '🌟'], ['🦌', '💨', '🔴']],
    [['💨', '🌟', '🦌'], ['☄️', '🔴', '❤️'], ['🌩️', '💃', '⚡']],
    [['💃', '💨', '🌟'], ['🔴', '🦌', '☄️'], ['❤️', '⚡', '🌩️']],
    [['🔴', '❤️', '☄️'], ['🌟', '⚡', '🌩️'], ['💨', '🦌', '💃']],
    [['⚡', '🦌', '🌩️'], ['💨', '❤️', '💃'], ['🔴', '🌟', '☄️']]
  ]
>;
type test_sudoku_3 = Expect<Equal<test_sudoku_3_actual, true>>;

type test_sudoku_4_actual = Validate<
  [
    //   ^?
    [['💨', '💃', '🦌'], ['☄️', '❤️', '🌩️'], ['🌟', '⚡', '🔴']],
    [['🌟', '⚡', '🔴'], ['💨', '💃', '🦌'], ['☄️', '❤️', '🌩️']],
    [['☄️', '❤️', '🌩️'], ['🌟', '⚡', '🔴'], ['💨', '💃', '🦌']],
    [['🦌', '💨', '💃'], ['⚡', '☄️', '❤️'], ['🔴', '🌩️', '🌟']],
    [['🌩️', '🔴', '🌟'], ['🦌', '💨', '💃'], ['⚡', '☄️', '❤️']],
    [['⚡', '☄️', '❤️'], ['🌩️', '🔴', '🌟'], ['🦌', '💨', '💃']],
    [['💃', '🦌', '💨'], ['❤️', '🌟', '☄️'], ['⚡', '🔴', '🌟']],
    [['🔴', '🌩️', '⚡'], ['💃', '🦌', '💨'], ['❤️', '🌟', '☄️']],
    [['❤️', '🌟', '☄️'], ['🔴', '🌩️', '⚡'], ['💃', '🦌', '💨']]
  ]
>;
type test_sudoku_4 = Expect<Equal<test_sudoku_4_actual, false>>;

type test_sudoku_5_actual = Validate<
  [
    //   ^?
    [['🌩️', '💨', '☄️'], ['🌟', '🦌', '⚡'], ['❤️', '🔴', '💃']],
    [['🌟', '⚡', '❤️'], ['🔴', '💃', '☄️'], ['🌩️', '💨', '🦌']],
    [['🔴', '🦌', '💃'], ['💨', '❤️', '🌩️'], ['🌟', '⚡', '☄️']],
    [['❤️', '☄️', '🌩️'], ['💃', '⚡', '🔴'], ['💨', '🦌', '🌟']],
    [['🦌', '💃', '⚡'], ['🌩️', '🌟', '💨'], ['🔴', '☄️', '❤️']],
    [['💨', '🌟', '🔴'], ['🦌', '☄️', '❤️'], ['⚡', '💃', '🌩️']],
    [['☄️', '🔴', '💨'], ['❤️', '💃', '🦌'], ['💃', '🌟', '⚡']],
    [['💃', '❤️', '🦌'], ['⚡', '🔴', '🌟'], ['☄️', '🌩️', '💨']],
    [['⚡', '🌩️', '🌟'], ['☄️', '💨', '💃'], ['🦌', '❤️', '🔴']]
  ]
>;
type test_sudoku_5 = Expect<Equal<test_sudoku_5_actual, false>>;

type test_sudoku_6_actual = Validate<
  [
    //   ^?
    [['⚡', '🔴', '🌩️'], ['🦌', '❤️', '💨'], ['💨', '🌟', '☄️']],
    [['❤️', '🦌', '🌟'], ['💨', '🌟', '🔴'], ['💃', '⚡', '🌩️']],
    [['💨', '💃', '🌟'], ['☄️', '⚡', '🌩️'], ['🔴', '❤️', '🦌']],
    [['🦌', '⚡', '🔴'], ['❤️', '💃', '💨'], ['☄️', '🌩️', '🌟']],
    [['🌟', '🌩️', '💃'], ['⚡', '🔴', '☄️'], ['❤️', '🦌', '💨']],
    [['☄️', '💨', '❤️'], ['🌟', '🌩️', '🦌'], ['⚡', '💃', '🔴']],
    [['🌩️', '☄️', '💨'], ['💃', '🦌', '⚡'], ['🌟', '🔴', '❤️']],
    [['🔴', '❤️', '⚡'], ['🌩️', '☄️', '🌟'], ['🦌', '💨', '💃']],
    [['💃', '🌟', '🦌'], ['🔴', '💨', '❤️'], ['🌩️', '☄️', '⚡']]
  ]
>;
type test_sudoku_6 = Expect<Equal<test_sudoku_6_actual, false>>;

type test_sudoku_7_actual = Validate<
  [
    [['💨', '💃', '🦌'], ['☄️', '❤️', '🌩️'], ['🌟', '⚡', '🔴']],
    [['💃', '🦌', '☄️'], ['❤️', '🌩️', '🌟'], ['⚡', '🔴', '💨']],
    [['🦌', '☄️', '❤️'], ['🌩️', '🌟', '⚡'], ['🔴', '💨', '💃']],
    [['☄️', '❤️', '🌩️'], ['🌟', '⚡', '🔴'], ['💨', '💃', '🦌']],
    [['❤️', '🌩️', '🌟'], ['⚡', '🔴', '💨'], ['💃', '🦌', '☄️']],
    [['🌩️', '🌟', '⚡'], ['🔴', '💨', '💃'], ['🦌', '☄️', '❤️']],
    [['🌟', '⚡', '🔴'], ['💨', '💃', '🦌'], ['☄️', '❤️', '🌩️']],
    [['⚡', '🔴', '💨'], ['💃', '🦌', '☄️'], ['❤️', '🌩️', '🌟']],
    [['🔴', '💨', '💃'], ['🦌', '☄️', '❤️'], ['🌩️', '🌟', '⚡']]
  ]
>;

type test_sudoku_7 = Expect<Equal<test_sudoku_7_actual, false>>;

type test_sudoku_8_actual = Validate<
  [
    //   ^?
    [['🦌', '🔴', '💃'], ['🌩️', '☄️', '💨'], ['⚡', '❤️', '🌟']],
    [['🦌', '🔴', '💃'], ['🌩️', '☄️', '💨'], ['⚡', '❤️', '🌟']],
    [['🦌', '🔴', '💃'], ['🌩️', '☄️', '💨'], ['⚡', '❤️', '🌟']],
    [['🦌', '🔴', '💃'], ['🌩️', '☄️', '💨'], ['⚡', '❤️', '🌟']],
    [['🦌', '🔴', '💃'], ['🌩️', '☄️', '💨'], ['⚡', '❤️', '🌟']],
    [['🦌', '🔴', '💃'], ['🌩️', '☄️', '💨'], ['⚡', '❤️', '🌟']],
    [['🦌', '🔴', '💃'], ['🌩️', '☄️', '💨'], ['⚡', '❤️', '🌟']],
    [['🦌', '🔴', '💃'], ['🌩️', '☄️', '💨'], ['⚡', '❤️', '🌟']],
    [['🦌', '🔴', '💃'], ['🌩️', '☄️', '💨'], ['⚡', '❤️', '🌟']]
  ]
>;

type test_sudoku_8 = Expect<Equal<test_sudoku_8_actual, false>>;
