# Project reference 02: The unfair dice challenge

**Learning intention:** Find a faulty dice rule and build a dice with six equally possible outcomes.

**Key ideas:** Variables; random numbers; selection; debugging

**Time:** 55 minutes.

## Related teaching pages

This is a practical reference with its original project number. Your teacher will choose the relevant tasks for the new teaching sequence.

- [Lesson 2: Variables and random numbers](concepts/02-variables-random-numbers.md)
- [Lesson 3: Selection and comparisons](concepts/03-selection-comparisons.md)

## Before you start

- Work in [**MakeCode Blocks**](https://makecode.microbit.org/){ target="_blank" rel="noopener noreferrer" }.
- Use the exact project and variable names below. `=` in a condition means "is equal to".
- `set` replaces a stored value; `change by` adds to the current value.
- Put a block **inside** a condition or loop when the instruction says so. Indentation matters.
- If the task uses radio, both boards need power and the same allocated group. No internet or Bluetooth pairing is needed between the boards.
- Keep the board close to the desk. Do not throw it, pull its USB cable or cover it with metal.

## Task 1: Investigate a faulty dice

1. Create S1-02-Dice. From Variables, make a variable called roll.
2. In on shake, set roll to pick random 1 to 6. Find pick random in Math.
3. Below that, add if then from Logic. Set its condition to roll = 6. Inside it, set roll to 1.
4. After the if, add show number roll. Predict which number can never appear and which has an extra chance.
5. Shake the simulator repeatedly. Explain the fault before removing anything. Take a screenshot of this faulty version.

## Task 2: Repair the rule

1. Delete the whole if block, leaving set roll to pick random 1 to 6, followed by show number roll.
2. Download and try the corrected program. Wait for each roll to finish before shaking again.
3. Make a tally for 30 rolls in your workbook. Record every result, including repeated results.
4. Check that no result is below 1 or above 6. You do not need all six tallies to be equal.

## Task 3: Explain and save

1. Use the variable roll in your explanation: it stores the chosen number until it is changed.
2. Explain why 30 rolls cannot prove that a dice is fair.
3. Save the corrected project and backup .hex. Add a second screenshot showing the repaired code.

## Test your program

| Test | Expected result |
| --- | --- |
| Read the faulty rule | A roll of 6 is changed to 1; 6 cannot be displayed. |
| Inspect corrected random limits | Lower limit is 1; upper limit is 6. |
| Carry out 30 corrected rolls | Every result is an integer from 1 to 6. |
| Add all six tally counts | The total is 30. |

## Complete your workbook

- Screenshot: Faulty dice program before the repair.
- Screenshot: Corrected dice program.

Answer these questions in your own words:

1. Explain why the faulty version favours 1.
2. What information does roll store?
3. Why might a fair dice show more 4s than 2s in 30 rolls?

## Optional challenge

Add on button A pressed to show the previous roll without generating a new one.

## Before you leave

- Save the named project and a .hex backup.
- Paste readable screenshots into this lesson's workbook section.
- Record actual test results and any repair.
