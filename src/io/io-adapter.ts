import { Position } from "../domain/entity.js";

export interface SimulationInput {
  width: number;
  height: number;
  start: Position;
  commands: number[];
}

export interface IoAdapter {
  readInput(): Promise<SimulationInput>;
  writeResult(position: Position): void;
}
