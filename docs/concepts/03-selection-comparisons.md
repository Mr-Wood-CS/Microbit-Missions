# Lesson 3: Selection and comparisons

## Learning intention & success criteria

**Learning intention:** Use an if condition to choose whether instructions run.

By the end of this lesson, you should be able to:

- Write a comparison and explain when it is true.
- Trace both branches of an if / else decision.
- Explain why replacing every 6 with 1 makes the dice unfair.

Read one page at a time. Predict before checking the explanations. Your practical tasks are in your workbook.

## The idea in everyday life

A sign might say: if the pool is open, go swimming; otherwise, choose another activity. Only one of those paths is followed. A program uses a condition to choose a path too.

## A question with two answers

A condition is a check whose result is true or false. The comparison roll = 6 asks whether the saved roll equals 6. It does not put 6 into roll. In MakeCode Blocks, the comparison block and set variable block have different shapes and jobs.

<aside class="word-note" markdown="1">
**Key word: Condition**

A check with a true or false result.
</aside>

## Choose one branch

An if / else block has two branches. When its condition is true, the instructions inside if run. When false, the instructions inside else run instead. After the selected branch finishes, the program continues after the whole decision. Both branches do not run for the same check.

<aside class="word-note" markdown="1">
**Key word: Selection**

Choosing instructions by checking a condition.
</aside>

## Read the stored result

Keep the dice from Lesson 2. Button B checks the result already stored in roll. A result of 6 shows a happy face; any other result is displayed as a number. Greater than and less than compare size: roll > 3 is true for 4, 5 and 6, but false for 3.

<aside class="word-note" markdown="1">
**Key word: Comparison**

A check such as equal to, greater than or less than.
</aside>

## Follow it on the micro:bit

![Read stored roll; Is roll equal to 6?; Choose a response.](../_assets/concepts/03-selection-comparisons.svg)

Continue with the dice from Lesson 2. Button B checks the stored roll; it does not generate another number. The else branch runs when roll is not 6.

## Example explained

This is **pseudocode** describing the MakeCode Blocks. Rebuild it using blocks; it is not code to paste into the editor. Any setup or surrounding events described on the previous pages are also needed.

<div class="example-layout" markdown="1">
<div markdown="1">

### Example structure

```text
on button B pressed:
    if roll = 6:
        show happy face
    else:
        show number roll
```

</div>
<div class="code-reading" markdown="1">

### Reading the instructions

**on button B pressed**

Starts the check; it does not roll the dice again.

**if roll = 6**

Reads roll and compares it with 6.

**show happy face**

Runs only when the condition is true.

**else → show number roll**

Runs when the saved value is not 6.

</div>
</div>

### What should happen?

With roll set to 6, B shows a face and roll still stores 6. With roll set to 2, B shows 2. To check both branches reliably, temporarily set known values rather than waiting for random rolls.

<aside class="word-note" markdown="1">
**Watch out**

Changing every generated 6 to 1 makes 6 impossible to display and gives 1 an extra way to occur. The fault is in the rule after the random choice, even if the random block itself is correct.
</aside>

## Predict, trace and check

Trace the event for roll = 6 and roll = 2. Does displaying a face change the value stored in roll?

Explain your prediction before trying the program. Follow the event one instruction at a time, keeping track of any stored values.

<details markdown="1">
<summary>Check your reasoning</summary>

For 6 the condition is true, so the face appears. For 2 it is false, so 2 appears. Neither display instruction changes roll.

</details>

## What to remember

<p class="main-idea">A condition checks a value. Selection chooses the instructions to run.</p>

### Can you explain it?

- I can write a comparison and explain when it is true.
- I can trace both branches of an if / else decision.
- I can explain why replacing every 6 with 1 makes the dice unfair.

Return to the example if you cannot yet explain one of these points. Use the key words to explain what the blocks do, rather than only describing where to click.

## Apply it in your workbook

Add a decision to your existing dice. Then inspect the faulty rule that changes every 6 to 1 and explain why it makes the dice unfair.

**Evidence and explanation:** Include your condition, predictions for both outcomes and actual test results.

Complete **Tasks 3.1, 3.2 and 3.3** in the [Google Docs pupil workbook](https://docs.google.com/document/d/1TtgnkWvogK3TJ2bSEFirT5LDdON6QLlhlYuBmnWRdAc/edit?usp=drivesdk){ target="_blank" rel="noopener noreferrer" }. Use the lesson heading to find your tasks.

### Practical references

These guides retain their original project numbers; those numbers are not the new teaching lesson numbers. Use the relevant tasks described below.

- [Faulty dice investigation: trace the if rule in Task 1, then repair it.](../02-unfair-dice.md)

[Back to the teaching sequence](index.md)
