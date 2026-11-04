# Project reference 01: Pocket personality

**Learning intention:** Program a character that reacts to buttons using inputs, events and sequence.

**Key ideas:** Events; sequence; inputs; processing; outputs

**Time:** 55 minutes.

## Related teaching pages

This is a practical reference with its original project number. Your teacher will choose the relevant tasks for the new teaching sequence.

- [Lesson 1: Inputs, events and sequence](concepts/01-inputs-events-sequence.md)

## Before you start

- Work in [**MakeCode Blocks**](https://makecode.microbit.org/){ target="_blank" rel="noopener noreferrer" }.
- Use the exact project and variable names below. `=` in a condition means "is equal to".
- `set` replaces a stored value; `change by` adds to the current value.
- Put a block **inside** a condition or loop when the instruction says so. Indentation matters.
- If the task uses radio, both boards need power and the same allocated group. No internet or Bluetooth pairing is needed between the boards.
- Keep the board close to the desk. Do not throw it, pull its USB cable or cover it with metal.

## Task 1: Start your project

1. Open [MakeCode for micro:bit](https://makecode.microbit.org/){ target="_blank" rel="noopener noreferrer" } and choose New Project. Name it S1-01-Personality. Stay in Blocks.
2. Keep on start. Remove the empty forever block by dragging it back into the toolbox.
3. From Basic, put show icon inside on start. Choose a heart. The start event runs when the program starts or the board resets.

## Task 2: Create two button sequences

1. From Input, add on button A pressed. Inside it, show a happy face, pause 500 ms, then show a heart.
2. Add another button event and select B. Inside it, show a sad face, pause 500 ms, then show a diamond.
3. Predict the image order for each button, then test in the simulator.
4. Swap the two images in one event. Predict and test the difference, then restore your chosen order.

## Task 3: Use the real micro:bit

1. Connect the board with a USB data cable. Follow the download instructions in the Getting Started guide.
2. Try each button separately. Wait for its sequence to finish before trying the other button.
3. Change the startup icon and the two button reactions to suit your character. Keep both button events.
4. Save your project and download a backup .hex file. Complete workbook lesson 1.

## Test your program

| Test | Expected result |
| --- | --- |
| Reset the board | Your chosen startup icon appears. |
| Press A | Happy face, pause, then heart. |
| Press B | Sad face, pause, then diamond. |

## Complete your workbook

- Screenshot: All three event blocks: startup and both complete button sequences.

Answer these questions in your own words:

1. Name two inputs and one output in this program.
2. What is an event? Give an example from your code.
3. Why does the order of images and pauses inside a button event matter?

## Optional challenge

Add an A+B event that shows your character name. Test it after the other animations finish.

## Before you leave

- Save the named project and a .hex backup.
- Paste readable screenshots into this lesson's workbook section.
- Record actual test results and any repair.
