# Lesson 6: Coordinates and boundaries

**Learning intention:** Use display coordinates and conditions to keep a moving dot within the screen.

## Understand the concept

The display has five rows and five columns. Coordinates run from 0 to 4. x increases to the right; y increases downwards. Boundary checks stop a position leaving that range.

## Connect it to the micro:bit

![Tilt left; Check x > 0; Decrease x by 1.](../_assets/concepts/06-coordinates-boundaries.svg)

The player stays on row 4 while x changes. Start with this moving dot; scoring and reset routines can be added later.

## Read the example

This is **pseudocode** showing the order and structure of the MakeCode Blocks. It is not code to paste into the editor.

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

## Predict and discuss

At x = 0, what happens on a left tilt? Where is the point 2, 4?

## Apply it in your workbook

Build the moving dot and test both edges repeatedly. Reuse your conditions, loop and variable knowledge.

**Evidence and explanation:** Label the axes, explain one boundary condition and record the results at both edges.

Complete **Tasks 6.1, 6.2 and 6.3** in the [Google Docs pupil workbook](https://docs.google.com/document/d/1TtgnkWvogK3TJ2bSEFirT5LDdON6QLlhlYuBmnWRdAc/edit?usp=drivesdk){ target="_blank" rel="noopener noreferrer" }. Use the lesson heading to find your tasks.

## Practical references

These guides retain their original project numbers; those numbers are not the new teaching lesson numbers. Use the relevant tasks described below.

- [Use the movement and boundary examples. Leave resetGame until Lesson 7.](../05-tilt-arcade.md)

[Back to the teaching sequence](index.md)
