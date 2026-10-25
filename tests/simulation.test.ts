import { describe, it, expect } from "vitest";
import { Grid, createGrid } from "../src/domain/grid";
import { Direction, Entity } from "../src/domain/entity";
import { runSimulation } from "../src/simulation";

describe("runSimulation", () => {
  it("should throw if the initial x and y is bigger than shape size", () => {
    //Arrange
    const grid: Grid = createGrid(5, 5);
    const entity: Entity = {
      position: {
        x: 25,
        y: 35,
      },
      direction: Direction.East,
    };
    const commands = [1, 3, 1, 0, 1, 1, 1];

    // Act & Assert
    expect(() => runSimulation(grid, entity, commands)).toThrow();
  });

  it("should give us the result on command 0", () => {
    //Arrange
    const grid: Grid = createGrid(20, 35);
    const entity: Entity = {
      position: {
        x: 0,
        y: 0,
      },
      direction: Direction.East,
    };
    const commands = [1, 3, 1, 0, 1, 1, 1];

    //Act
    const result = runSimulation(grid, entity, commands);

    //Assert
    expect(result).toBeTruthy();
    expect(result.position).toEqual({ x: 1, y: 1 });
  });

  it("should skip command if command does not exist", () => {
    //Arrange
    const grid: Grid = createGrid(20, 35);
    const entity: Entity = {
      position: {
        x: 0,
        y: 0,
      },
      direction: Direction.East,
    };
    const nonExistingCommand = 6;
    const commands = [1, 3, 1, nonExistingCommand, 2, 1, 1];

    //Act
    const result = runSimulation(grid, entity, commands);

    //Assert
    expect(result).toBeTruthy();
    expect(result.position).toEqual({ x: 1, y: 2 });
  });

  it("should not pass the boundries of the grid", () => {
    //Arrange
    const grid: Grid = createGrid(20, 35);
    const entity: Entity = {
      position: {
        x: 0,
        y: 0,
      },
      direction: Direction.East,
    };
    const commands = [1, 3, 1, 3, 1, 1, 1];

    //Act
    const result = runSimulation(grid, entity, commands);

    //Assert
    expect(result).toBeTruthy();
    expect(result.position).toEqual({ x: 0, y: 1 });
  });
});
