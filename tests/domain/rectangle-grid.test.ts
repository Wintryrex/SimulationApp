import { describe, expect, it } from "vitest";
import { createGrid } from "../../src/domain/grid";

describe("contains", () => {
  it.for([
    [10, 50, 2, 3],
    [25, 12, 2, 3],
    [25, 12, 0, 0],
  ])(
    `grid with a width of %s and height of %s should contain position`,
    ([width, height, x, y]) => {
      //Arrange
      const grid = createGrid(width, height);

      // Act
      const result = grid.contains(x, y);

      // Assert
      expect(result).toEqual(true);
    },
  );

  it.for([
    [5, 10, 50, 100],
    [3, 2, -2, 3],
    [3, 2, 1, -3],
    [25, 12, 25, 12],
  ])(
    `grid with a width of %s and height of %s should not contain position`,
    ([width, height, x, y]) => {
      //Arrange
      const grid = createGrid(width, height);

      // Act
      const result = grid.contains(x, y);

      // Assert
      expect(result).toEqual(false);
    },
  );
});
