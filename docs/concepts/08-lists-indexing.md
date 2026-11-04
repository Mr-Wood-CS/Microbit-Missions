# Lesson 8: Lists and indexing

**Learning intention:** Read values from an ordered list using their positions.

## Understand the concept

A list stores an ordered collection of values. An index identifies a position. The first item has index 0. List length is the number of items.

## Connect it to the micro:bit

![Read a button choice; Compare with list item; Move to next position.](../_assets/concepts/08-lists-indexing.svg)

Use the supplied memory-game framework to play and check a sequence. Here 0 represents A and 1 represents B. The example is the correct-answer part of the checker; the framework also handles wrong answers and playback.

## Read the example

This is **pseudocode** showing the order and structure of the MakeCode Blocks. It is not code to paste into the editor.

```text
set sequence to [0, 1, 0]
set position to 0
if choice = sequence[position]:
    change position by 1
    if position = length of sequence:
        set accepting to false
        show tick
```

## Predict and discuss

What is stored at index 1 in [0, 1, 0]? For a list of four items, what are the valid indexes?

## Apply it in your workbook

Complete the checker using the supplied framework. In the A event, use the supplied checkChoice call with 0 in its space; in B, put 1 in its space. Keep those supplied blocks and focus on the list and its positions.

**Evidence and explanation:** Record tests for both sequence lengths. Explain why checking list length works better than always checking for 3.

Complete **Tasks 8.1, 8.2 and 8.3** in the [Google Docs pupil workbook](https://docs.google.com/document/d/1TtgnkWvogK3TJ2bSEFirT5LDdON6QLlhlYuBmnWRdAc/edit?usp=drivesdk){ target="_blank" rel="noopener noreferrer" }. Use the lesson heading to find your tasks.

## Practical references

These guides retain their original project numbers; those numbers are not the new teaching lesson numbers. Use the relevant tasks described below.

- [Use the list setup, checking instructions and test table.](../06-memory-master.md)

!!! tip "Focus on this lesson"
    Follow the instructions for any supplied blocks. You only need to explain the concepts in this lesson; extra spaces and labels in supplied function blocks are not additional vocabulary to learn.

[Back to the teaching sequence](index.md)
