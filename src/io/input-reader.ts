import readline from "readline/promises";
import { IoAdapter } from "./io-adapter.js";

const INITIAL_VALUES_LENGTH = 4;

export const createTerminalAdapter = (): IoAdapter => ({
  async readInput() {
    const readLine = readline.createInterface({ input: process.stdin });

    let header: number[] | undefined;
    const commands: number[] = [];

    for await (const line of readLine) {
      if (!header) {
        header = parseInput(line);
        continue;
      }
      commands.push(...parseInput(line));
      if (commands.includes(0)) break;
    }

    if (!header || header.length !== INITIAL_VALUES_LENGTH) {
      throw new Error(
        `Expected ${INITIAL_VALUES_LENGTH} values: width,height,x,y`,
      );
    }

    const [width, height, startX, startY] = header;
    return { width, height, start: { x: startX, y: startY }, commands };
  },

  writeResult({ x, y }) {
    console.log(`[${x}, ${y}]`);
  },
});

const parseInput = (str: string) => {
  const items = str.split(",").map(Number);

  if (!items.every(Number.isFinite)) {
    throw new Error("Expected comma-separated numbers");
  }

  if (!items.every(Number.isInteger)) {
    throw new Error("Expected integer numbers only");
  }

  return items;
};
