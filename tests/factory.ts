import { Direction, Position } from "../src/domain/entity";

export const move = (
  inputPosition: Position,
  expectedPosition: Position,
  direction: Direction,
) => {
  return {
    directionName: Direction[direction],
    input: {
      position: inputPosition,
      direction: direction,
    },
    expected: {
      position: expectedPosition,
      direction: direction,
    },
  };
};
