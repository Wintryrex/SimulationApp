## SimulationApp

SimulationApp is a Node.js console application for simulating object movement and direction within a grid with the help of commands entered into the command line. The lowest position in the grid is (0,0)

Besides Node.js, the app uses Typescript and Oxlint as well. Even though Typescript might be a bit overkill for this project I decided to add it because I think it's always good practice to add types to your variables in order to help prevent bugs.

### Commands

The available commands are:

| Command | Description                                           |
| ------- | ----------------------------------------------------- |
| 0       | quit simulation and print results to stdout           |
| 1       | move forward one step                                 |
| 2       | move backwards one step                               |
| 3       | rotate clockwise 90 degrees (eg north to east)        |
| 4       | rotate counterclockwise 90 degrees (eg west to south) |

### Some assumptions I have made:

- Since there is no requirement regarding validation I have implemented a validation where if the validation fails, the application stops completely and the steps of [How to run](#how-to-run) have to be redone. The app will throw if we:
  - Enter a higher x and y value than the shape size
  - Enter non-integer values
  - Enter other values than numbers or if we enter other values than what we can parse

- Because there's no requirement regarding what happens after the simulation is finished I've implemented so that the application stops after we print out the results.

- If we try to move outside the shape, the move will be skipped as I'm assuming that we want to stay within its boundries.

## Requirements

Node v22.12.0 or newer

## How to run

1. Install the npm packages by running `npm install`.
2. There are two ways you can run this project:

   a) Run the commands step by step:
   1. Run `npm run start`.
   2. Enter the grid size and object position as `width,height,x,y`, for example `23,25,0,0`. This creates a grid with a width of `23` and a height of `25`, and places the object at position `x:0, y:0`. Press Enter to finish the line.
   3. Enter the commands, for example `1,4,1,3,2,3,2,4,1,0`, and press Enter. See [Commands](#commands) for what each command does. The app then simulates movement and direction and prints the object's final position on the grid, for example `[0, 1]`.

   b) Run everything in a single line in powershell or cmd, enter a 0 to end the simulation.
   First run `npm run build` to build the project into a dist folder and then you can run for example in powershell:

   ```powershell
   "4,4,2,2`n1,4,1,3,2,3,2,4,1,0" | node dist/index.js
   ```

## Testing

Run `npm run test` to run the unit tests.

To run test coverage scan you can run `npm run test:coverage`

Note that not all files have test coverage, that is because I'd like to wrap up this project fast and not spend too much time on writing tests. If there's one more test file I'd add in this repository it would be for `input-reader.ts`

## Linting

This project uses oxlint to lint the code. To lint the code you can run `npm run lint`
