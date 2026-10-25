import { createTerminalAdapter } from "./io/input-reader.js";
import { runSimulation } from "./simulation.js";
import { createGrid } from "./domain/grid.js";
import { Direction, Entity } from "./domain/entity.js";

try {
  const terminalAdapter = createTerminalAdapter();
  const input = await terminalAdapter.readInput();

  const entity: Entity = {
    position: input.start,
    direction: Direction.North,
  };

  const result = runSimulation(
    createGrid(input.width, input.height),
    entity,
    input.commands,
  );

  terminalAdapter.writeResult(result.position);
} catch (error) {
  console.error((error as Error).message);
  process.exitCode = 1;
} finally {
  process.stdin.destroy();
}
