import {
  Entity,
  moveBackward,
  moveForward,
  rotateClockwise,
  rotateCounterClockwise,
} from "./domain/entity.js";
import { Shape } from "./domain/shape.js";

const handlers: Record<number, (e: Entity) => Entity> = {
  1: moveForward,
  2: moveBackward,
  3: rotateClockwise,
  4: rotateCounterClockwise,
};

export const runSimulation = (
  grid: Shape,
  entity: Entity,
  commands: number[],
) => {
  if (!grid.contains(entity.position.x, entity.position.y)) {
    throw new Error(
      `Start position (${entity.position.x}, ${entity.position.y}) is outside the grid`,
    );
  }

  let result: Entity = {
    position: {
      x: entity.position.x,
      y: entity.position.y,
    },
    direction: entity.direction,
  };
  for (const command of commands) {
    if (command === 0) {
      return result;
    }
    if (!handlers[command]) {
      continue;
    }

    const next = handlers[command](result);

    if (!grid.contains(next.position.x, next.position.y)) {
      continue;
    }

    result = next;
  }

  return result;
};
