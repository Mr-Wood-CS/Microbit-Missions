# Project reference 03: Beat the reaction timer

**Learning intention:** Measure a reaction time and detect an early press.

**Key ideas:** State; multiple variables; selection; time calculations

**Time:** 55 minutes.

## Related teaching pages

This is a practical reference with its original project number. Your teacher will choose the relevant tasks for the new teaching sequence.

- [Selection and comparisons](concepts/03-selection-comparisons.md)
- [Boolean logic and state](concepts/05-boolean-logic-state.md)

## Before you start

- Work in [**MakeCode Blocks**](https://makecode.microbit.org/){ target="_blank" rel="noopener noreferrer" }.
- Use the exact project and variable names below. `=` in a condition means "is equal to".
- `set` replaces a stored value; `change by` adds to the current value.
- Put a block **inside** a condition or loop when the instruction says so. Indentation matters.
- If the task uses radio, both boards need power and the same allocated group. No internet or Bluetooth pairing is needed between the boards.
- Keep the board close to the desk. Do not throw it, pull its USB cable or cover it with metal.

## Task 1: Load the starter

1. Create S1-03-Reaction. Your teacher supplies 03-reaction-starter.ts. Follow the JavaScript-to-Blocks steps in Getting Started.
2. Read the starter: B begins a round; phase is 0 when idle, 1 while waiting, and 2 when the signal is showing.
3. The starter already waits a random 1000 to 3000 ms. Do not change its B event yet.

## Task 2: Finish the A event

1. Add on button A pressed. Inside it, add if / else if from Logic using the small plus button on the if block.
2. First condition: phase = 1. Inside, set phase to 0, then show string EARLY.
3. Second condition: phase = 2. Inside, set reactionTime to running time (ms) minus startTime. Find running time under Input, more.
4. Still inside the second branch, set phase to 0, then show number reactionTime.
5. Leave out an else branch. A should do nothing when phase is 0.

## Task 3: Test the timer

1. Press B, wait for the diamond, then press A. The displayed value is your time in milliseconds.
2. Start another round. Press A before the diamond: EARLY should appear and the round should stop.
3. Complete five valid attempts in your workbook. Restart only after a result or message finishes.
4. Keep the board on the desk so everyone has the same starting setup. Save and screenshot all event blocks.

## Test your program

| Test | Expected result |
| --- | --- |
| Press A before starting | No reaction time is displayed. |
| Press B, wait for diamond, press A | A non-negative reaction time in ms appears. |
| Press B then press A before signal | EARLY appears; no later diamond starts that round. |
| Press B again during waiting | The existing round continues; no extra round starts. |

## Complete your workbook

- Screenshot: All event blocks and startup variables. Split into two readable images if necessary.

Answer these questions in your own words:

1. What do phase values 0, 1 and 2 mean?
2. Why calculate running time minus startTime?
3. Why use a random waiting time?

## Optional challenge

Add bestTime, starting at 99999. Update it only when a valid reactionTime is smaller. Show it with A+B.

## Before you leave

- Save the named project and a .hex backup.
- Paste readable screenshots into this lesson's workbook section.
- Record actual test results and any repair.
