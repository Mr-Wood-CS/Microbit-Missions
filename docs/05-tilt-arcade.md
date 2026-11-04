# Project reference 05: Tilt arcade

**Learning intention:** Move a dot safely across the display by tilting the board.

**Key ideas:** Coordinates; boundaries; variables; named functions

**Time:** 55 minutes.

## Related teaching pages

This is a practical reference with its original project number. Your teacher will choose the relevant tasks for the new teaching sequence.

- [Lesson 6: Coordinates and boundaries](concepts/06-coordinates-boundaries.md)
- [Lesson 7: Functions](concepts/07-functions.md)

## Before you start

- Work in [**MakeCode Blocks**](https://makecode.microbit.org/){ target="_blank" rel="noopener noreferrer" }.
- Use the exact project and variable names below. `=` in a condition means "is equal to".
- `set` replaces a stored value; `change by` adds to the current value.
- Put a block **inside** a condition or loop when the instruction says so. Indentation matters.
- If the task uses radio, both boards need power and the same allocated group. No internet or Bluetooth pairing is needed between the boards.
- Keep the board close to the desk. Do not throw it, pull its USB cable or cover it with metal.

## Task 1: Create the game

1. Create S1-05-Tilt. Make variables x, targetX, score and playing.
2. Open Advanced > Functions. Make a function called resetGame with no extra input spaces.
3. Inside it: set x to 2; set targetX to 4; set score to 0; set playing to true; clear screen.
4. In on start, call resetGame. In on button A pressed, also call resetGame. The same instructions are reused.

## Task 2: Draw and move the player

1. In forever, add if playing. Put all the following game instructions inside it.
2. Clear screen. Plot x, 4 using Led > plot x y. Plot targetX, 0. Coordinates run from 0 to 4; x is across and y is down.
3. Add if acceleration (mg) x < -300 AND x > 0: change x by -1.
4. Below it add a separate if acceleration (mg) x > 300 AND x < 4: change x by 1. Find acceleration in Input.
5. Add pause 200 ms at the end of the if playing block. Tilt gently; keep the board near the desk.

## Task 3: Score a hit

1. Add on button B pressed. Inside, add if playing AND x = targetX.
2. Inside: change score by 1; set playing to false; show number score; set targetX to pick random 0 to 4; set x to 2; set playing to true.
3. B scores only when the player is in the target column. A resets the whole game.
4. Test both edges repeatedly. Save and screenshot the function and all events.

## Test your program

| Test | Expected result |
| --- | --- |
| Press A | Player returns to centre; score is 0; target is column 4. |
| Tilt left for several seconds | Player stops at column 0. |
| Tilt right for several seconds | Player stops at column 4. |
| Press B in wrong column | Score does not increase. |
| Press B aligned with target | Score increases by 1; a new target is selected. |

## Complete your workbook

- Screenshot: resetGame function.
- Screenshot: Startup, forever and both button events.

Answer these questions in your own words:

1. Why check x > 0 before moving left?
2. What is the difference between defining and calling resetGame?
3. How do the forever loop and button event share information?

## Optional challenge

Add a lives variable starting at 3. A wrong B press loses one life; at 0 set playing to false and show a cross.

## Before you leave

- Save the named project and a .hex backup.
- Paste readable screenshots into this lesson's workbook section.
- Record actual test results and any repair.
