import { checkIfNoMovesLeft } from "../board-printer";

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = ["_"];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});
test("check _ and can not be move", () => {
  const board = [];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});
