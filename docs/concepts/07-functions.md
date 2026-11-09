# Lesson 7: Functions

## Learning intention & success criteria

**Learning intention:** Define a named group of instructions, call it and explain why reuse is useful.

By the end of this lesson, you should be able to:

- Distinguish a function definition from a call.
- Trace what changes when resetGame runs.
- Explain how reuse makes an update easier.

Read one page at a time. Predict before checking the explanations. Your practical tasks are in your workbook.

## The idea in everyday life

A recipe gives a useful set of instructions a name. You can follow the recipe again without writing it out every time. A function gives a reusable group of program instructions a name.

## Define a useful group

Create a function named resetGame. Put the instructions for returning the game to its starting state inside it: set x to 2, set score to 0, and clear the screen. Defining the function describes what it does. It does not run the reset just because the definition exists.

<aside class="word-note" markdown="1">
**Key word: Function**

A named group of instructions.
</aside>

## Call it when needed

A call tells the program to run the function now. Call resetGame from on start, and call it again from on button A pressed. Each call runs the same instructions. When they finish, execution continues after the call. In the tilt game, the forever loop will plot the player using the reset position.

<aside class="word-note" markdown="1">
**Key word: Call**

An instruction to run a function.
</aside>

## Change the behaviour in one place

If the game later has a target or a game-over state, include their reset instructions in resetGame too. Both startup and the A button will then use the updated reset. A descriptive name helps you read the program: resetGame tells you more than function1. This example uses a function for its actions; it does not need to return a value.

<aside class="word-note" markdown="1">
**Key word: Reuse**

Use the same instructions from more than one place.
</aside>

## Follow it on the micro:bit

![Startup or button A; Call resetGame; Run reset instructions.](../_assets/concepts/07-functions.svg)

Continue the tilt project. Put the reset instructions in one function and call it at startup and from button A. If both places need the same reset behaviour, you only need to edit the function once.

## Example explained

This is **pseudocode** describing the MakeCode Blocks. Rebuild it using blocks; it is not code to paste into the editor. Any setup or surrounding events described on the previous pages are also needed.

<div class="example-layout" markdown="1">
<div markdown="1">

### Example structure

```text
function resetGame:
    set x to 2
    set score to 0
    clear screen
on start:
    call resetGame
on button A pressed:
    call resetGame
```

</div>
<div class="code-reading" markdown="1">

### Reading the instructions

**function resetGame**

Defines the named instructions.

**set x to 2 / set score to 0**

Restores the starting position and score.

**on start → call resetGame**

Resets the game when the program starts.

**on button A pressed → call resetGame**

Uses the same reset whenever A is pressed.

</div>
</div>

### What should happen?

Startup sets x to 2 and score to 0. Suppose the player later reaches x = 4 with score = 7. Pressing A restores x = 2 and score = 0. The definition is shared; it is not copied into each event.

<aside class="word-note" markdown="1">
**Watch out**

A definition with no calls never performs the reset. Also check that all reset instructions are inside the function, rather than leaving one only in on start.
</aside>

## Predict, trace and check

Does defining resetGame run it? Where is it called? What changes at both call sites if you add an instruction inside it?

Explain your prediction before trying the program. Follow the event one instruction at a time, keeping track of any stored values.

<details markdown="1">
<summary>Check your reasoning</summary>

Defining resetGame does not run it. Startup and A each call it. An extra instruction inside the function runs at both call sites the next time each calls it.

</details>

## What to remember

<p class="main-idea">Define the instructions once. Call them wherever they are needed.</p>

### Can you explain it?

- I can distinguish a function definition from a call.
- I can trace what changes when resetGame runs.
- I can explain how reuse makes an update easier.

Return to the example if you cannot yet explain one of these points. Use the key words to explain what the blocks do, rather than only describing where to click.

## Apply it in your workbook

Create resetGame, move your reset instructions inside it and call it from startup and button A. Use a name that describes its purpose.

**Evidence and explanation:** Show the function and its two calls. Explain the difference between defining and calling it.

Complete **Tasks 7.1, 7.2 and 7.3** in the [Google Docs pupil workbook](https://docs.google.com/document/d/1TtgnkWvogK3TJ2bSEFirT5LDdON6QLlhlYuBmnWRdAc/edit?usp=drivesdk){ target="_blank" rel="noopener noreferrer" }. Use the lesson heading to find your tasks.

### Practical references

These guides retain their original project numbers; those numbers are not the new teaching lesson numbers. Use the relevant tasks described below.

- [Use the resetGame example; extend the reset instructions if you add the target and score.](../05-tilt-arcade.md)
- [Later reuse: showReady is another named group of instructions.](../10-classroom-help-test.md)

!!! tip "Focus on this lesson"
    Follow the instructions for any supplied blocks. You only need to explain the concepts in this lesson; extra spaces and labels in supplied function blocks are not additional vocabulary to learn.

[Back to the teaching sequence](index.md)
