export const digits = '123456789';
export const letters = 'ABCDEFGHI';
export const rows = letters.split('');
export const cols = digits.split('');
export const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const validSectionRows = [1, 2, 3];

export const rRows = [
	['A', 'B', 'C'],
	['D', 'E', 'F'],
	['G', 'H', 'I'],
];

export const cCols = [
	['1', '2', '3'],
	['4', '5', '6'],
	['7', '8', '9'],
];

export const STATUS = {
	ABORT: 'abort',
	VALID: 'valid',
	INVALID: 'invalid',
	COMPLETED: 'completed',
	UNKNOWN: 'unknown',
	TIMER: 'timer',
	SOLVE: 'solve',
};

export const STRATEGIES = {
	HIDDEN_SINGLE: 'Hidden Single in cell',
	NAKED_SINGLE: 'Naked Single in cell',
	POINTING_PAIRS: 'Pointing Pair in cells',
	BACKTRACKING: 'Backtracking search',
};

// String used to clean the board.
export const emptySudokuString = '.'.repeat(81);

export const acceptedStringRegExp = /^(([1-9]|\.)+|\W+)$/g;

// Default sudoku string (valid)
export const initialSudokuString =
	'4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......';
