# Project reference 04: Protect the treasure

**Learning intention:** Use a measured light threshold to trigger an armed alarm.

**Key ideas:** Real-world input; thresholds; Boolean variables; repetition

**Time:** 55 minutes.

## Related teaching pages

This is a practical reference with its original project number. Your teacher will choose the relevant tasks for the new teaching sequence.

- [Lesson 4: Iteration](concepts/04-iteration.md)
- [Lesson 5: Boolean logic and state](concepts/05-boolean-logic-state.md)

## Before you start

- Work in [**MakeCode Blocks**](https://makecode.microbit.org/){ target="_blank" rel="noopener noreferrer" }.
- Use the exact project and variable names below. `=` in a condition means "is equal to".
- `set` replaces a stored value; `change by` adds to the current value.
- Put a block **inside** a condition or loop when the instruction says so. Indentation matters.
- If the task uses radio, both boards need power and the same allocated group. No internet or Bluetooth pairing is needed between the boards.
- Keep the board close to the desk. Do not throw it, pull its USB cable or cover it with metal.

## Task 1: Measure the light

1. Create S1-04-Alarm. Add on button A+B pressed containing show number light level. Find light level in Input.
2. Download. Cover the front LED display with your hand, press A+B and record the reading. Uncover it and repeat.
3. The display also senses light. Use a threshold between your covered and uncovered readings. Do not assume everyone needs the same number.

## Task 2: Set up the alarm

1. Create variables armed, triggered and threshold. In on start, set armed to false, triggered to false and threshold to your chosen number. Find true and false in Logic.
2. In on button A pressed: clear screen, set triggered to false, then set armed to true.
3. In on button B pressed: set armed to false, set triggered to false, then clear screen.
4. In forever, add if armed AND light level > threshold then set triggered to true. Build AND using Logic.

## Task 3: Make a warning that stays on

1. Below that if, still inside forever, add another if: armed AND triggered.
2. Inside, show icon No (cross), pause 200 ms, clear screen, pause 200 ms.
3. This is a visual alarm. No speaker is required. It keeps flashing even if the light level drops again.
4. Cover the board before pressing A to arm it, then uncover it. B must stop the alarm. Leave the A+B light reader for calibration while disarmed.
5. Save, test and record your threshold and readings in the workbook.

## Test your program

| Test | Expected result |
| --- | --- |
| Disarmed; expose display to light | No flashing alarm. |
| Cover display, then press A | Board arms without triggering if reading is below threshold. |
| Uncover armed board | Warning starts flashing. |
| Cover again after triggering | Warning continues. |
| Press B while flashing | Alarm stops within one flash cycle, allowing for an in-progress pause. |

## Complete your workbook

- Screenshot: All event blocks and the complete forever loop.

Answer these questions in your own words:

1. What is a threshold?
2. Why does triggered stay true after the board is covered again?
3. Explain the input, processing and output.

## Optional challenge

After testing, choose a different threshold and record one example of a false alarm or missed opening.

## Before you leave

- Save the named project and a .hex backup.
- Paste readable screenshots into this lesson's workbook section.
- Record actual test results and any repair.
