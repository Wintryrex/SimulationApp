import { describe, expect, it } from "vitest";
import {
  moveForward,
  moveBackward,
  rotateClockwise,
  rotateCounterClockwise,
  Entity,
  Direction,
} from "../../src/domain/entity.js";
import { move } from "../factory.ts";

describe("moveForward", () => {
  it.for([
    move({ x: 0, y: 0 }, { x: 0, y: -1 }, Direction.North),
    move({ x: 0, y: 0 }, { x: 0, y: 1 }, Direction.South),
    move({ x: 0, y: 0 }, { x: -1, y: 0 }, Direction.West),
    move({ x: 0, y: 0 }, { x: 1, y: 0 }, Direction.East),
  ])(
    `moves entity one step forward with direction $directionName`,
    ({ input, expected }) => {
      // Act
      const result = moveForward(input);

      // Assert
      expect(result).toEqual(expected);
    },
  );
});

describe("moveBackward", () => {
  it.for([
    move({ x: 0, y: 0 }, { x: 0, y: 1 }, Direction.North),
    move({ x: 0, y: 0 }, { x: 0, y: -1 }, Direction.South),
    move({ x: 0, y: 0 }, { x: 1, y: 0 }, Direction.West),
    move({ x: 0, y: 0 }, { x: -1, y: 0 }, Direction.East),
  ])(
    `moves entity one step backward with direction $directionName`,
    ({ input, expected }) => {
      // Act
      const result = moveBackward(input);

      // Assert
      expect(result).toEqual(expected);
    },
  );
});

describe("rotateClockwise", () => {
  it.for([
    ["North", "East", Direction.North, Direction.East],
    ["East", "South", Direction.East, Direction.South],
    ["South", "West", Direction.South, Direction.West],
    ["West", "North", Direction.West, Direction.North],
  ] as const)(
    `rotate entity from direction %s to %s`,
    ([, , inputDirection, expectedDirection]) => {
      //Arrange
      const input: Entity = {
        position: { x: 1, y: 2 },
        direction: inputDirection,
      };

      const expected: Entity = {
        position: input.position,
        direction: expectedDirection,
      };

      // Act
      const result = rotateClockwise(input);

      // Assert
      expect(result).toEqual(expected);
    },
  );
});

describe("rotateCounterClockwise", () => {
  it.for([
    ["North", "West", Direction.North, Direction.West],
    ["West", "South", Direction.West, Direction.South],
    ["South", "East", Direction.South, Direction.East],
    ["East", "North", Direction.East, Direction.North],
  ] as const)(
    `rotate entity from direction %s to %s`,
    ([, , inputDirection, expectedDirection]) => {
      //Arrange
      const input: Entity = {
        position: { x: 1, y: 2 },
        direction: inputDirection,
      };

      const expected: Entity = {
        position: input.position,
        direction: expectedDirection,
      };

      // Act
      const result = rotateCounterClockwise(input);

      // Assert
      expect(result).toEqual(expected);
    },
  );
});
