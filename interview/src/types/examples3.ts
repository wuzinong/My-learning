type TicTacToeChip = '❌' | '⭕';
type TicTacToeEndState = '❌ Won' | '⭕ Won' | 'Draw';
type TicTacToeState = TicTacToeChip | TicTacToeEndState;
type TicTacToeEmptyCell = '  ';
type TicTacToeCell = TicTacToeChip | TicTacToeEmptyCell;
type TicTacToeYPositions = 'top' | 'middle' | 'bottom';
type TicTacToeXPositions = 'left' | 'center' | 'right';
type TicTacToePositions = `${TicTacToeYPositions}-${TicTacToeXPositions}`;
type TicTactToeBoard = TicTacToeCell[][];
type TicTacToeGame = {
  board: TicTactToeBoard;
  state: TicTacToeState;
};

type EmptyBoard = [['  ', '  ', '  '], ['  ', '  ', '  '], ['  ', '  ', '  ']];

type NewGame = {
  board: EmptyBoard;
  state: '❌';
};

type IndexPostion<S> = S extends 'top' | 'left'
  ? 0
  : S extends 'middle' | 'center'
  ? 1
  : S extends 'right' | 'bottom'
  ? 2
  : -1;

type Position<S> = S extends `${infer R}-${infer V}`
  ? [IndexPostion<R>, IndexPostion<V>]
  : [];

type SizeOf<A> = A extends { length: infer L } ? L : 0;

type FillArray<A, I extends number, S> = A extends [...infer Other, infer Item]
  ? SizeOf<Other> extends I
    ? [...Other, S]
    : [...FillArray<Other, I, S>, Item]
  : [];

type NextBoard<T extends string[][], P extends number[], State> = FillArray<
  T,
  P[0],
  FillArray<T[P[0]], P[1], State>
>;

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
type AllFill = ArrayWithLength<ArrayWithLength<'❌' | '⭕', 3>, 3>;

type WinStr = '❌❌❌' | '⭕⭕⭕';
type RowWin<
  T extends string[][],
  RI extends number
> = `${T[RI][0]}${T[RI][1]}${T[RI][2]}` extends WinStr ? true : false;
type ColWin<
  T extends string[][],
  CI extends number
> = `${T[0][CI]}${T[1][CI]}${T[2][CI]}` extends WinStr ? true : false;
type DiaWin<T extends string[][]> =
  `${T[0][0]}${T[1][1]}${T[2][2]}` extends WinStr
    ? true
    : `${T[2][0]}${T[1][1]}${T[0][2]}` extends WinStr
    ? true
    : false;
type IsWin<T extends string[][], P extends number[]> = RowWin<
  T,
  P[0]
> extends false
  ? ColWin<T, P[1]> extends false
    ? DiaWin<T>
    : true
  : true;
type IsDraw<T extends string[][]> = T extends AllFill ? true : false;

type TicTacToe<
  T extends TicTacToeGame,
  TP extends TicTacToePositions,
  P extends [number, number] = Position<TP>,
  Next extends string[][] = NextBoard<T['board'], P, T['state']>
> = T['board'][P[0]][P[1]] extends TicTacToeChip
  ? T
  : {
      board: Next;
      state: IsWin<Next, P> extends true
        ? T['state'] extends '❌'
          ? '❌ Won'
          : '⭕ Won'
        : IsDraw<Next> extends true
        ? 'Draw'
        : T['state'] extends '❌'
        ? '⭕'
        : '❌';
    };

type test_move1_actual = TicTacToe<NewGame, 'top-center'>;
//   ^?
type test_move1_expected = {
  board: [['  ', '❌', '  '], ['  ', '  ', '  '], ['  ', '  ', '  ']];
  state: '⭕';
};
type test_move1 = Expect<Equal<test_move1_actual, test_move1_expected>>;

type test_move2_actual = TicTacToe<test_move1_actual, 'top-left'>;
//   ^?
type test_move2_expected = {
  board: [['⭕', '❌', '  '], ['  ', '  ', '  '], ['  ', '  ', '  ']];
  state: '❌';
};
type test_move2 = Expect<Equal<test_move2_actual, test_move2_expected>>;

type test_move3_actual = TicTacToe<test_move2_actual, 'middle-center'>;
//   ^?
type test_move3_expected = {
  board: [['⭕', '❌', '  '], ['  ', '❌', '  '], ['  ', '  ', '  ']];
  state: '⭕';
};
type test_move3 = Expect<Equal<test_move3_actual, test_move3_expected>>;

type test_move4_actual = TicTacToe<test_move3_actual, 'bottom-left'>;
//   ^?
type test_move4_expected = {
  board: [['⭕', '❌', '  '], ['  ', '❌', '  '], ['⭕', '  ', '  ']];
  state: '❌';
};
type test_move4 = Expect<Equal<test_move4_actual, test_move4_expected>>;

type test_x_win_actual = TicTacToe<test_move4_actual, 'bottom-center'>;
//   ^?
type test_x_win_expected = {
  board: [['⭕', '❌', '  '], ['  ', '❌', '  '], ['⭕', '❌', '  ']];
  state: '❌ Won';
};
type test_x_win = Expect<Equal<test_x_win_actual, test_x_win_expected>>;

type type_move5_actual = TicTacToe<test_move4_actual, 'bottom-right'>;
//   ^?
type type_move5_expected = {
  board: [['⭕', '❌', '  '], ['  ', '❌', '  '], ['⭕', '  ', '❌']];
  state: '⭕';
};
type test_move5 = Expect<Equal<type_move5_actual, type_move5_expected>>;

type test_o_win_actual = TicTacToe<type_move5_actual, 'middle-left'>;
//   ^?
type test_o_win_expected = {
  board: [['⭕', '❌', '  '], ['⭕', '❌', '  '], ['⭕', '  ', '❌']];
  state: '⭕ Won';
};

// invalid move don't change the board and state
type test_invalid_actual = TicTacToe<test_move1_actual, 'top-center'>;
//   ^?
type test_invalid_expected = {
  board: [['  ', '❌', '  '], ['  ', '  ', '  '], ['  ', '  ', '  ']];
  state: '⭕';
};
type test_invalid = Expect<Equal<test_invalid_actual, test_invalid_expected>>;

type test_before_draw = {
  board: [['⭕', '❌', '⭕'], ['⭕', '❌', '❌'], ['❌', '⭕', '  ']];
  state: '⭕';
};
type test_draw_actual = TicTacToe<test_before_draw, 'bottom-right'>;
//   ^?
type test_draw_expected = {
  board: [['⭕', '❌', '⭕'], ['⭕', '❌', '❌'], ['❌', '⭕', '⭕']];
  state: 'Draw';
};
type test_draw = Expect<Equal<test_draw_actual, test_draw_expected>>;
