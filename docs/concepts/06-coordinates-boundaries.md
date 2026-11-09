# Lesson 6: Coordinates and boundaries

## Learning intention & success criteria

**Learning intention:** Use display coordinates and conditions to keep a moving dot within the screen.

By the end of this lesson, you should be able to:

- Locate an LED using x and y coordinates.
- Explain why valid coordinates run from 0 to 4.
- Trace a boundary check before changing the position.

Read one page at a time. Predict before checking the explanations. Your practical tasks are in your workbook.

## The idea in everyday life

A seat in a cinema is found using two pieces of information: its position across and its row. An LED on the micro:bit also needs two coordinates so the program knows exactly which light to use.

## Find a point on the grid

The display has five columns and five rows. Both are numbered 0, 1, 2, 3, 4. The x coordinate counts across from the left; y counts down from the top. The top-left LED is (0, 0) and the bottom-right is (4, 4). In this project y stays at 4, so the player moves along the bottom row.

<aside class="word-note" markdown="1">
**Key word: Coordinate**

A number specifying a position along an axis.
</aside>

## Change a stored position

Start x at 2 so the dot begins in the middle. A sufficiently strong left tilt changes x by -1; a right tilt changes it by 1. The acceleration x reading measures tilt along that axis. The stored variable x is the chosen display column: it has a different job from the sensor reading.

<aside class="word-note" markdown="1">
**Key word: Axis**

A direction used to measure position: x across, y down.
</aside>

## Check before moving

Before moving left, check x > 0. Before moving right, check x < 4. Each movement also needs the appropriate tilt check, joined with AND. Clear the previous display, plot the new position, then pause 200 ms. Without clearing, old dots remain; without a pause, movement can reach an edge too quickly to control.

<aside class="word-note" markdown="1">
**Key word: Boundary**

The limit of the valid positions.
</aside>

## Follow it on the micro:bit

![Tilt left; Check x > 0; Decrease x by 1.](../_assets/concepts/06-coordinates-boundaries.svg)

The player stays on row 4 while x changes. Start with this moving dot; scoring and reset routines can be added later.

## Example explained

This is **pseudocode** describing the MakeCode Blocks. Rebuild it using blocks; it is not code to paste into the editor. Any setup or surrounding events described on the previous pages are also needed.

<div class="example-layout" markdown="1">
<div markdown="1">

### Example structure

```text
on start:
    set x to 2
forever:
    if acceleration x < -300 AND x > 0:
        change x by -1
    if acceleration x > 300 AND x < 4:
        change x by 1
    clear screen
    plot x, 4
    pause 200 ms
```

</div>
<div class="code-reading" markdown="1">

### Reading the instructions

**set x to 2**

Starts in the middle column.

**acceleration x < -300 AND x > 0**

Requires both a left tilt and space to move left.

**acceleration x > 300 AND x < 4**

Requires both a right tilt and space to move right.

**clear screen → plot x, 4 → pause 200 ms**

Redraws one dot on the bottom row and spaces the movement checks.

</div>
</div>

### What should happen?

At startup the dot appears at (2, 4). Holding a left tilt moves it through columns 1 and 0. Continued left tilt leaves it at 0. A right tilt can move it back across to 4, where the other boundary check stops it.

<aside class="word-note" markdown="1">
**Watch out**

There are five columns, but column 5 does not exist. Numbering starts at 0. Checking x < 5 would allow a move from 4 to 5, taking the saved position outside the visible grid.
</aside>

## Predict, trace and check

At x = 0, what happens on a left tilt? Where is the point 2, 4?

Explain your prediction before trying the program. Follow the event one instruction at a time, keeping track of any stored values.

<details markdown="1">
<summary>Check your reasoning</summary>

At x = 0, the left boundary condition is false, so x stays 0. The point (2, 4) is the middle LED on the bottom row.

</details>

## What to remember

<p class="main-idea">Check the boundary before changing the position.</p>

### Can you explain it?

- I can locate an LED using x and y coordinates.
- I can explain why valid coordinates run from 0 to 4.
- I can trace a boundary check before changing the position.

Return to the example if you cannot yet explain one of these points. Use the key words to explain what the blocks do, rather than only describing where to click.

## Apply it in your workbook

Build the moving dot and test both edges repeatedly. Reuse your conditions, loop and variable knowledge.

**Evidence and explanation:** Label the axes, explain one boundary condition and record the results at both edges.

Complete **Tasks 6.1, 6.2 and 6.3** in the [Google Docs pupil workbook](https://docs.google.com/document/d/1TtgnkWvogK3TJ2bSEFirT5LDdON6QLlhlYuBmnWRdAc/edit?usp=drivesdk){ target="_blank" rel="noopener noreferrer" }. Use the lesson heading to find your tasks.

### Practical references

These guides retain their original project numbers; those numbers are not the new teaching lesson numbers. Use the relevant tasks described below.

- [Use the movement and boundary examples. Leave resetGame until Lesson 7.](../05-tilt-arcade.md)

[Back to the teaching sequence](index.md)
