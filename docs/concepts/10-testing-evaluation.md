# Lesson 10: Integration, testing and evaluation

**Learning intention:** Combine earlier concepts, prevent duplicate requests and evaluate against requirements.

## Understand the concept

A requirement says what the system must do. A useful test has an action, an expected result and an actual result. Debugging finds and repairs faults; evaluation uses evidence to judge how well requirements were met.

## Connect it to the micro:bit

![Press A repeatedly; Check waiting state; Send one request.](../_assets/concepts/10-testing-evaluation.svg)

Set waiting to false at startup. Setting it true before sending closes the opportunity for another request while waiting. Keep the teacher counter so you can prove that repeated presses do not send duplicates.

## Read the example

This is **pseudocode** showing the order and structure of the MakeCode Blocks. It is not code to paste into the editor.

```text
on button A pressed:
    if NOT waiting:
        set waiting to true
        radio send string "HELP"
        show question mark
on radio received receivedString:
    if receivedString = "OK":
        set waiting to false
        show tick
```

## Predict and discuss

After one request and three more A presses, what should the teacher count show? What must happen before another request is allowed?

## Apply it in your workbook

Improve the Lesson 9 programs, reuse showReady and run the full test table. Record faults and retests.

**Evidence and explanation:** Include expected and actual results, both final programs, a repair if needed, and an evaluation naming one limitation.

Complete **Tasks 10.1, 10.2 and 10.3** in the [Google Docs pupil workbook](https://docs.google.com/document/d/1TtgnkWvogK3TJ2bSEFirT5LDdON6QLlhlYuBmnWRdAc/edit?usp=drivesdk){ target="_blank" rel="noopener noreferrer" }. Use the lesson heading to find your tasks.

## Practical references

These guides retain their original project numbers; those numbers are not the new teaching lesson numbers. Use the relevant tasks described below.

- [Use the improvement tasks and complete test table.](../10-classroom-help-test.md)

[Back to the teaching sequence](index.md)
