# Project reference 10: Classroom help system: test and improve

**Learning intention:** Prevent duplicate requests, reuse a function and evaluate against requirements.

**Key ideas:** Boolean state; selection; subprograms; systematic testing

**Time:** 55 minutes.

## Related teaching pages

This is a practical reference with its original project number. Your teacher will choose the relevant tasks for the new teaching sequence.

- [Lesson 7: Functions](concepts/07-functions.md)
- [Lesson 10: Integration, testing and evaluation](concepts/10-testing-evaluation.md)

## Before you start

- Work in [**MakeCode Blocks**](https://makecode.microbit.org/){ target="_blank" rel="noopener noreferrer" }.
- Use the exact project and variable names below. `=` in a condition means "is equal to".
- `set` replaces a stored value; `change by` adds to the current value.
- Put a block **inside** a condition or loop when the instruction says so. Indentation matters.
- If the task uses radio, both boards need power and the same allocated group. No internet or Bluetooth pairing is needed between the boards.
- Keep the board close to the desk. Do not throw it, pull its USB cable or cover it with metal.

## Task 1: Make a separate improved version

1. Open each lesson 9 project and save a copy named S1-10-Pupil or S1-10-Teacher. If your editor does not offer duplicate, download a .hex backup then rename the open project.
2. Keep the teacher counter from lesson 9. It is how you will prove duplicate requests are blocked.
3. In the PUPIL program, create a variable waiting. In on start, set waiting to false after the radio group is set.

## Task 2: Guard the request

1. In PUPIL on button A pressed, wrap the existing send and icon blocks inside if NOT waiting. Find not in Logic.
2. At the TOP of that if branch, set waiting to true. Then send HELP and show Question. Changing the state first closes the duplicate-request window.
3. In the received OK branch, add set waiting to false before showing the tick.

## Task 3: Reuse the ready display

1. Make a function showReady with no extra input spaces. Inside: clear screen, then show icon SmallSquare.
2. Call showReady at the end of on start.
3. Add pupil on button B pressed. Inside, if NOT waiting, call showReady. B returns the idle display to ready after acknowledgement; it cannot cancel an outstanding request.
4. The teacher program stays as lesson 9. Rename it clearly and download both programs.

## Task 4: Test and evaluate

1. Reset BOTH boards and wait for startup. Use the complete test table below in order.
2. Record actual results; do not write Pass until you have performed each test.
3. If a test fails, record the fault, change the code and repeat that test.
4. Take final screenshots of BOTH programs, including the function. Answer the workbook questions individually even if you shared boards.
5. Finish with two sentences: which requirements were met, and one limitation of this prototype.

## Test your program

| Test | Expected result |
| --- | --- |
| Reset both boards | Pupil shows ready symbol; teacher requests is 0. |
| Pupil A once; teacher A | Pupil waiting true; question mark; teacher count 1. |
| Pupil A three more times; teacher A | Teacher count remains 1. |
| Pupil B while waiting | No cancellation; waiting remains true. |
| Teacher B | Pupil waiting false; tick appears; teacher clears. |
| Pupil B | Ready symbol returns. |
| Pupil A again; teacher A | New request works; teacher count becomes 2. |

## Complete your workbook

- Screenshot: Final PUPIL code, including showReady and all events.
- Screenshot: Final TEACHER code, including the requests counter.

Answer these questions in your own words:

1. Explain how waiting prevents duplicate requests.
2. Where is showReady called, and why use a function?
3. Explain how the button event and receive event communicate through waiting.
4. Name one real-world limitation of this prototype.

## Optional challenge

Add a teacher-controlled recovery procedure: if a message is lost, reset BOTH boards together and test again. Explain why simply clearing waiting could create duplicate requests.

## Before you leave

- Save the named project and a .hex backup.
- Paste readable screenshots into this lesson's workbook section.
- Record actual test results and any repair.
