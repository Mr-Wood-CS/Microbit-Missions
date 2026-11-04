# Project reference 07: Wireless rescue team

**Learning intention:** Send a help message and receive an acknowledgement between two boards.

**Key ideas:** Sender; receiver; messages; communicating processes

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

## Task 1: Prepare two projects

1. Work with another pupil so there are two boards. Label them FIELD and BASE. Keep both connected to computers if you have no battery packs.
2. Your teacher allocates a radio group from 1 to 255. Both your boards use the same group. Other teams use different groups.
3. Create S1-07-Field and S1-07-Base as separate projects. In each on start, add Radio > radio set group with your allocated number.
4. A radio group filters traffic; it is not a password, private channel or individual device address.

## Task 2: Build FIELD

1. In FIELD, on button A pressed: radio send string HELP, then show icon Question.
2. Add on radio received receivedString. Inside, if receivedString = OK, show icon Yes. Text must match exactly, including capitals.

## Task 3: Build BASE

1. In BASE, add on radio received receivedString. Inside, if receivedString = HELP, show string H.
2. In on button B pressed: radio send string OK, then clear screen.
3. Download each project to the correctly labelled board. Test A on FIELD, then B on BASE.
4. Swap who operates each board and repeat. Draw the message journey in the workbook. Save both projects and add both code screenshots.

## Test your program

| Test | Expected result |
| --- | --- |
| Both boards use same group; FIELD A | FIELD shows question mark; BASE shows H. |
| BASE B after request | BASE clears; FIELD shows tick. |
| Temporarily change BASE to a different group and download | A new FIELD request is not received by BASE. |
| Restore matching group and download | Communication works again. |

## Complete your workbook

- Screenshot: Complete FIELD program.
- Screenshot: Complete BASE program.

Answer these questions in your own words:

1. Which board sends and which receives? Can a board do both?
2. Do two forever loops on different boards automatically communicate?
3. What does the radio group do?

## Optional challenge

FIELD A+B sends CHECK. BASE displays C on receiving CHECK. Keep HELP and OK working.

## Before you leave

- Save the named project and a .hex backup.
- Paste readable screenshots into this lesson's workbook section.
- Record actual test results and any repair.
