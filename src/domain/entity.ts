export interface Entity {
  position: Position;
  direction: Direction;
}

export enum Direction {
  North = 0,
  East = 1,
  South = 2,
  West = 3,
}

export interface Position {
  x: number;
  y: number;
}

const step: Record<Direction, Position> = {
  [Direction.North]: { x: 0, y: -1 },
  [Direction.East]: { x: 1, y: 0 },
  [Direction.South]: { x: 0, y: 1 },
  [Direction.West]: { x: -1, y: 0 },
};

const NEXT_DIRECTION = 1; // Relative to the first element in the enum, aka Direction.North
const PREVIOUS_DIRECTION = 3; // Relative to the first element in the enum, aka Direction.North
const directionsAmount = Object.keys(Direction).length / 2;

const move = (
  position: Position,
  direction: Direction,
  movement: 1 | -1,
): Position => ({
  x: position.x + step[direction].x * movement,
  y: position.y + step[direction].y * movement,
});

export const moveForward = (e: Entity): Entity => ({
  ...e,
  position: move(e.position, e.direction, 1),
});
export const moveBackward = (e: Entity): Entity => ({
  ...e,
  position: move(e.position, e.direction, -1),
});
export const rotateClockwise = (e: Entity): Entity => ({
  ...e,
  direction: (e.direction + NEXT_DIRECTION) % directionsAmount,
});
export const rotateCounterClockwise = (e: Entity): Entity => ({
  ...e,
  direction: (e.direction + PREVIOUS_DIRECTION) % directionsAmount,
});
