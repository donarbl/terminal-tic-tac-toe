import { validateMove, makeMove } from '../move-maker'; // Adjust the import path if necessary

// Mock board for testing
let board;

beforeEach(() => {
    // Reset the board before each test
    board = [
        ['X', '_', '_'],
        ['_', 'X', '_'],
        ['O', 'O', 'X'],
    ];
});

// Test suite for validateMove
describe('validateMove function', () => {
    it('should return true for valid moves in an empty space', () => {
        const move = '1,2'; // Row 1, Column 2
        const result = validateMove(move, board);
        expect(result).toBe(true); // Move is valid
    });

    it('should return false for moves out of bounds (row too low)', () => {
        const move = '0,2'; // Invalid row
        const result = validateMove(move, board);
        expect(result).toBe(false); // Move is invalid
    });

    it('should return false for moves out of bounds (column too high)', () => {
        const move = '2,4'; // Invalid column
        const result = validateMove(move, board);
        expect(result).toBe(false); // Move is invalid
    });

    it('should return false for moves to a non-empty space', () => {
        const move = '1,1'; // Row 1, Column 1 is occupied by 'X'
        const result = validateMove(move, board);
        expect(result).toBe(false); // Space is not empty
    });
});

// Test suite for makeMove
describe('makeMove function', () => {
    it('should return true and update the board for valid moves', () => {
        const move = '2,3'; // Row 2, Column 3
        const player = 'X';
        const result = makeMove(board, move, player);

        // Check if the move was valid
        expect(result).toBe(true);

        // Check if the board was updated
        expect(board[1][2]).toBe('X'); // Row 2 (index 1), Column 3 (index 2)
    });

    it('should return false for invalid moves (out of bounds)', () => {
        const move = '4,3'; // Invalid row
        const player = 'O';
        const result = makeMove(board, move, player);

        // Check if the move was invalid
        expect(result).toBe(false);

        // Check if the board was not updated
        expect(board).toEqual([
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X'],
        ]); // Board remains the same
    });

    it('should return false for invalid moves (space occupied)', () => {
        const move = '3,1'; // Row 3, Column 1 is occupied by 'O'
        const player = 'X';
        const result = makeMove(board, move, player);

        // Check if the move was invalid
        expect(result).toBe(false);

        // Check if the board was not updated
        expect(board).toEqual([
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X'],
        ]); // Board remains the same
    });
});
