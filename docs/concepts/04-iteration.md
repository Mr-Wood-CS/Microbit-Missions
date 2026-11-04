# Lesson 4: Iteration

**Learning intention:** Explain counted repetition and distinguish it from continuous repetition.

## Understand the concept

Iteration means repeating instructions. A repeat loop runs a fixed number of times. A forever loop keeps running its enclosed instructions while the program runs.

## Connect it to the micro:bit

![Shake the board; Repeat three times; Animate the display.](../_assets/concepts/04-iteration.svg)

Return to the character from Lesson 1 and add the shake animation. Both show blocks and both pauses belong inside the loop. Later, try a separate forever example that repeatedly displays the light level.

## Read the example

This is **pseudocode** showing the order and structure of the MakeCode Blocks. It is not code to paste into the editor.

```text
on shake:
    repeat 3 times:
        show diamond
        pause 200 ms
        show small diamond
        pause 200 ms
```

## Predict and discuss

How many image instructions run after one shake? How is repeat 3 different from forever?

## Apply it in your workbook

Add and test the counted animation. In a separate example, use forever to show the light level, pause 500 ms, then repeat automatically as you cover and uncover the display.

**Evidence and explanation:** Show both loop structures and explain when each is useful.

Complete **Tasks 4.1, 4.2 and 4.3** in the [Google Docs pupil workbook](https://docs.google.com/document/d/1TtgnkWvogK3TJ2bSEFirT5LDdON6QLlhlYuBmnWRdAc/edit?usp=drivesdk){ target="_blank" rel="noopener noreferrer" }. Use the lesson heading to find your tasks.

## Practical references

These guides retain their original project numbers; those numbers are not the new teaching lesson numbers. Use the relevant tasks described below.

- [Character reference: reopen the button project, then add the shake loop shown on this teaching page.](../01-pocket-personality.md)
- [Light measurement reference: the alarm is developed in Lesson 5.](../04-treasure-alarm.md)

[Back to the teaching sequence](index.md)
