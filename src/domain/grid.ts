import { Shape } from "./shape.js";

export interface Grid extends Shape {
  size: Size;
}

export interface Size {
  height: number;
  width: number;
}

export const createGrid = (width: number, height: number): Grid => ({
  size: { width, height },
  contains: function (x: number, y: number): boolean {
    return x >= 0 && y >= 0 && x < this.size.width && y < this.size.height;
  },
});
