# Lesson 5: Boolean logic and state

**Learning intention:** Use true/false values to record state and combine checks with AND.

## Understand the concept

A Boolean value is true or false. State records the current situation of a program. AND requires both checks to be true; NOT reverses a true/false result.

## Connect it to the micro:bit

![Read light level; Armed AND above limit?; Trigger the alarm.](../_assets/concepts/05-boolean-logic-state.svg)

Set armed and triggered to false at startup. Button A clears triggered then sets armed to true. Button B sets both to false and clears the display. Once triggered is true, covering the display does not reset it.

## Read the example

This is **pseudocode** showing the order and structure of the MakeCode Blocks. It is not code to paste into the editor.

```text
forever:
    if armed AND light level > threshold:
        set triggered to true
    if armed AND triggered:
        show cross
        pause 200 ms
        clear screen
        pause 200 ms
```

## Predict and discuss

Will the alarm trigger when armed is false? Why does it keep flashing after the light drops?

## Apply it in your workbook

Measure covered and uncovered light readings. Choose a threshold between them, then build and test the armed alarm.

**Evidence and explanation:** Record your threshold, a test while disarmed, a trigger test and a stop test. Explain what each Boolean variable records.

Complete **Tasks 5.1, 5.2 and 5.3** in the [Google Docs pupil workbook](https://docs.google.com/document/d/1TtgnkWvogK3TJ2bSEFirT5LDdON6QLlhlYuBmnWRdAc/edit?usp=drivesdk){ target="_blank" rel="noopener noreferrer" }. Use the lesson heading to find your tasks.

## Practical references

These guides retain their original project numbers; those numbers are not the new teaching lesson numbers. Use the relevant tasks described below.

- [Use the alarm build instructions and test table.](../04-treasure-alarm.md)

[Back to the teaching sequence](index.md)
