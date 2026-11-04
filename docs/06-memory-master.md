# Project reference 06: Memory master

**Learning intention:** Store and check an ordered sequence of button choices.

**Key ideas:** Lists; indexes; iteration; selection; subprograms

**Time:** 55 minutes.

## Related teaching pages

This is a practical reference with its original project number. Your teacher will choose the relevant tasks for the new teaching sequence.

- [Lesson 8: Lists and indexing](concepts/08-lists-indexing.md)

## Before you start

- Work in [**MakeCode Blocks**](https://makecode.microbit.org/){ target="_blank" rel="noopener noreferrer" }.
- Use the exact project and variable names below. `=` in a condition means "is equal to".
- `set` replaces a stored value; `change by` adds to the current value.
- Put a block **inside** a condition or loop when the instruction says so. Indentation matters.
- If the task uses radio, both boards need power and the same allocated group. No internet or Bluetooth pairing is needed between the boards.
- Keep the board close to the desk. Do not throw it, pull its USB cable or cover it with metal.

## Task 1: Read the supplied framework

1. Create S1-06-Memory. Load 06-memory-starter.ts as explained in Getting Started, then return to Blocks.
2. The sequence list contains 0, 1, 0. In this game, 0 means A and 1 means B.
3. The list positions are 0, 1 and 2. The first item is at index 0, not index 1.
4. Find the playSequence function. It shows each item as A or B, then sets accepting to true. A+B calls this function.

## Task 2: Finish the checking function

1. Find the empty function checkChoice. Keep its supplied choice block. The A event will use 0 in the call block and the B event will use 1; use choice in the comparison below.
2. Inside it add if accepting. All checking instructions go inside this condition.
3. Inside, add if choice = sequence get value at index position. Find list get value at in Advanced > Arrays. Drag the sequence variable into the list socket.
4. In the correct branch, change position by 1. Then add if position = length of array sequence. Inside that, set accepting to false and show icon Yes (tick).
5. In the wrong branch, set accepting to false and show icon No (cross).

## Task 3: Connect the buttons and test

1. In on button A pressed, call checkChoice with 0. In on button B pressed, call checkChoice with 1.
2. Press A+B, watch the sequence finish, then enter A, B, A. You should get a tick.
3. Start again. Deliberately give a wrong answer. You should get a cross.
4. Change the list in on start to 1, 0, 1, 1. Replay it and test B, A, B, B. The same checker should work without changing a hard-coded length.
5. Save and screenshot both the list setup and the complete checking function.

## Test your program

| Test | Expected result |
| --- | --- |
| Press A before playback | No answer is accepted. |
| Play [0,1,0], enter A,B,A | Tick after the third correct answer. |
| Play [0,1,0], enter B first | Cross; further answers ignored. |
| Change list to [1,0,1,1], enter B,A,B,B | Tick after the fourth answer. |
| Press A+B after finishing | Position resets and the sequence plays again. |

## Complete your workbook

- Screenshot: Startup list, button events and playSequence.
- Screenshot: Complete checkChoice function.

Answer these questions in your own words:

1. What is stored at index 1 in [0,1,0]?
2. Why is a list better than three separate variables here?
3. Why compare position with the list length?

## Optional challenge

At the start of playSequence, replace the list with three random values from 0 to 1. Keep the checking function unchanged.

## Before you leave

- Save the named project and a .hex backup.
- Paste readable screenshots into this lesson's workbook section.
- Record actual test results and any repair.
