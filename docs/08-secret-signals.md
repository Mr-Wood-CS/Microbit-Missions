# Project reference 08: Secret signals laboratory

**Learning intention:** Encode a numeric message with a shared key and explain its limitations.

**Key ideas:** Representation; simple encryption; variables; communication

**Time:** 55 minutes.

## Related teaching pages

This is a practical reference with its original project number. Your teacher will choose the relevant tasks for the new teaching sequence.

- [Variables and random numbers](concepts/02-variables-random-numbers.md)
- [Radio communication](concepts/09-radio-communication.md)

## Before you start

- Work in [**MakeCode Blocks**](https://makecode.microbit.org/){ target="_blank" rel="noopener noreferrer" }.
- Use the exact project and variable names below. `=` in a condition means "is equal to".
- `set` replaces a stored value; `change by` adds to the current value.
- Put a block **inside** a condition or loop when the instruction says so. Indentation matters.
- If the task uses radio, both boards need power and the same allocated group. No internet or Bluetooth pairing is needed between the boards.
- Keep the board close to the desk. Do not throw it, pull its USB cable or cover it with metal.

## Task 1: Agree the message meaning

1. Use two boards and one allocated radio group. Create S1-08-Sender and S1-08-Receiver.
2. Agree this codebook: 1 = need help; 2 = task finished; 3 = please check. Writing a meaning as a number is encoding, not encryption.
3. In both programs, make a variable key and set it to 7 in on start. Also set the same radio group in both.

## Task 2: Build SENDER

1. Create a variable message and set it to 1 in on start.
2. On button A pressed: change message by 1; if message > 3 then set message to 1; show number message.
3. On button B pressed: radio send number message + key, then show icon Yes.
4. Use A to choose a message and B to send it.

## Task 3: Build RECEIVER

1. Create a variable decoded. Add on radio received receivedNumber. This is the NUMBER event, not the string event.
2. Inside: set decoded to receivedNumber - key. Then show number decoded. Use the codebook to interpret it.
3. Send all three messages. Record the original value, transmitted value and decoded value in the workbook.
4. Temporarily change RECEIVER key to 6. Send message 2. Record the incorrect result, then restore key 7.
5. Another pair is told that the transmitted value was 9 and the original was 2. Ask them to find the key. Save and screenshot both programs.

## Task 4: Explain the security

1. The add/subtract rule is a toy encryption model for learning. It is very easy to break and must not protect real secrets.
2. A group number does not hide message contents. An observer using the same group can receive the transmitted number.
3. Discuss how knowing one original/transmitted pair reveals this key.

## Test your program

| Test | Expected result |
| --- | --- |
| Send 1 with key 7 | Transmitted 8; receiver displays 1. |
| Send 2 with key 7 | Transmitted 9; receiver displays 2. |
| Send 3 with key 7 | Transmitted 10; receiver displays 3. |
| Sender key 7; receiver key 6; send 2 | Receiver displays 3, showing the wrong meaning. |
| Restore both keys to 7 | Original meaning is recovered. |

## Complete your workbook

- Screenshot: Complete SENDER program.
- Screenshot: Complete RECEIVER program.

Answer these questions in your own words:

1. What is the difference between the codebook and the shared key?
2. How can someone find the key if 2 is transmitted as 9?
3. Could the number 1 have another meaning in a different system?

## Optional challenge

On RECEIVER, display a cross if decoded is below 1 or above 3. Explain why a wrong key can still produce a valid but incorrect message.

## Before you leave

- Save the named project and a .hex backup.
- Paste readable screenshots into this lesson's workbook section.
- Record actual test results and any repair.
