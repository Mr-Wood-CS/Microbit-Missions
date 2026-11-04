# Project reference 09: Classroom help system: build

**Learning intention:** Build a specified pupil-to-teacher help and acknowledgement system.

**Key ideas:** Requirements; design; variables; radio events

**Time:** 55 minutes.

## Related teaching pages

This is a practical reference with its original project number. Your teacher will choose the relevant tasks for the new teaching sequence.

- [Lesson 9: Radio communication](concepts/09-radio-communication.md)

## Before you start

- Work in [**MakeCode Blocks**](https://makecode.microbit.org/){ target="_blank" rel="noopener noreferrer" }.
- Use the exact project and variable names below. `=` in a condition means "is equal to".
- `set` replaces a stored value; `change by` adds to the current value.
- Put a block **inside** a condition or loop when the instruction says so. Indentation matters.
- If the task uses radio, both boards need power and the same allocated group. No internet or Bluetooth pairing is needed between the boards.
- Keep the board close to the desk. Do not throw it, pull its USB cable or cover it with metal.

## Task 1: Read the requirements

1. You will build exactly this system: pupil A sends HELP; teacher sees H; teacher B sends OK; pupil sees a tick.
2. Complete the workbook design before coding: identify the user of each board, inputs, messages and outputs.
3. Work in a pair with two boards. Create two NEW projects called S1-09-Pupil and S1-09-Teacher. Use lesson 7 as a reference, but name the programs clearly.
4. Set the same teacher-allocated radio group in both on start blocks. Use a different group from other pairs.

## Task 2: Build PUPIL

1. On button A pressed: radio send string HELP, then show icon Question.
2. On radio received receivedString: if receivedString = OK, show icon Yes.
3. This first version is allowed to send repeated requests. You will fix that in lesson 10.

## Task 3: Build TEACHER with a test counter

1. Make a variable requests. Set requests to 0 in on start.
2. On radio received receivedString: if receivedString = HELP, change requests by 1 and show string H.
3. On button A pressed: show number requests. This is your diagnostic test counter. It counts requests, not different pupils.
4. On button B pressed: radio send string OK, then clear screen.
5. Test the request and acknowledgement. Press pupil A three times, waiting for each press to register. Teacher A should show 3 after a fresh reset.
6. Save both projects. Record the repeated-request problem and take both code screenshots.

## Test your program

| Test | Expected result |
| --- | --- |
| Reset both boards; pupil A once | Pupil shows question mark; teacher shows H. |
| Teacher A | Counter shows 1. |
| Pupil A twice more; teacher A | Counter shows 3. |
| Teacher B | Pupil shows tick; teacher clears. |
| Send unrelated string TEST using a temporary test sender | Neither board treats TEST as HELP or OK. |

## Complete your workbook

- Screenshot: Complete PUPIL program, before lesson 10 changes.
- Screenshot: Complete TEACHER program, including requests counter.

Answer these questions in your own words:

1. State two requirements of this system.
2. Why does the teacher counter not tell us the number of different pupils?
3. What is wrong with allowing repeated HELP requests while waiting?

## Optional challenge

Add teacher A+B to reset requests to 0. Keep B as acknowledgement and A as viewing the count.

## Before you leave

- Save the named project and a .hex backup.
- Paste readable screenshots into this lesson's workbook section.
- Record actual test results and any repair.
