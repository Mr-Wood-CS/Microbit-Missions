# Lesson 9: Radio communication

## Learning intention & success criteria

**Learning intention:** Send and receive agreed messages between two micro:bits.

By the end of this lesson, you should be able to:

- Trace a request and acknowledgement across two programs.
- Explain why groups and message text must agree.
- Explain what the request counter does and does not measure.

Read one page at a time. Predict before checking the explanations. Your practical tasks are in your workbook.

## The idea in everyday life

Two people using walkie-talkies need the same channel and an agreement about their messages. Hearing a message is only useful if the receiver knows what it means. The two micro:bit programs need that agreement too.

## Agree a group and message

Both boards must set the same teacher-allocated radio group in on start. Agree that HELP requests assistance and OK acknowledges it. These strings must match exactly, including capitals. A radio group helps organise classroom messages; it does not identify an individual pupil or provide a private connection.

<aside class="word-note" markdown="1">
**Key word: Radio group**

A setting used to group radio communication.
</aside>

## Sending and receiving are separate

On the pupil board, A sends HELP. On the teacher board, on radio received runs when a message arrives. The receivedString value holds that message. Check it before responding, so an unrelated string does not count as a request. Keep the two programs clearly named so you download each to the intended board.

<aside class="word-note" markdown="1">
**Key word: Message**

Information sent from one board to another.
</aside>

## Follow the reply and the count

Initialise requests to 0 on the teacher board. Each received HELP adds 1. Teacher B sends OK, and the pupil shows a tick when OK is received. The count records messages, not unique pupils: one pupil sending HELP three times adds three. If several pupils share a group, the simple OK reply does not identify which pupil it is for.

<aside class="word-note" markdown="1">
**Key word: Receive event**

Instructions started by an arriving radio message.
</aside>

## Follow it on the micro:bit

![Pupil sends HELP; Teacher receives HELP; Teacher replies OK.](../_assets/concepts/09-radio-communication.svg)

Pupil A sends HELP. Teacher B sends OK. The pupil displays a tick when OK arrives. Text must match exactly, including capitals. The counter records requests, not different pupils.

## Example explained

This is **pseudocode** describing the MakeCode Blocks. Rebuild it using blocks; it is not code to paste into the editor. Any setup or surrounding events described on the previous pages are also needed.

<div class="example-layout" markdown="1">
<div markdown="1">

### Example structure

```text
on radio received receivedString:
    if receivedString = "HELP":
        change requests by 1
        show string "H"
```

</div>
<div class="code-reading" markdown="1">

### Reading the instructions

**on start → radio set group**

Must use the allocated matching group on both boards.

**pupil A → radio send string "HELP"**

Sends a request; it does not directly change the other board’s variables.

**if receivedString = "HELP"**

Checks the content of the arriving message.

**change requests by 1 → show string "H"**

Counts the request and indicates that help was requested.

</div>
</div>

### What should happen?

After one received HELP, the teacher count is 1 and H appears. Teacher B sends OK; the pupil receives it and shows a tick. Another HELP increases the count again, even if it came from the same pupil.

<aside class="word-note" markdown="1">
**Watch out**

A successful send block does not prove a reply arrived. If the receiver does nothing, check power, the downloaded program, matching groups and exact message text, then test the journey again on two boards.
</aside>

## Predict, trace and check

Which event sends HELP? Which event handles it? Why can two boards with different groups fail to communicate?

Explain your prediction before trying the program. Follow the event one instruction at a time, keeping track of any stored values.

<details markdown="1">
<summary>Check your reasoning</summary>

Pupil A sends HELP. The teacher’s receive event handles it. Different groups prevent this intended exchange. Repeated requests increase a message count rather than a count of distinct pupils.

</details>

## What to remember

<p class="main-idea">Agree the message, send it, then handle it in the receiver’s event.</p>

### Can you explain it?

- I can trace a request and acknowledgement across two programs.
- I can explain why groups and message text must agree.
- I can explain what the request counter does and does not measure.

Return to the example if you cannot yet explain one of these points. Use the key words to explain what the blocks do, rather than only describing where to click.

## Apply it in your workbook

Build the pupil and teacher help programs. Test the request, acknowledgement and repeated requests. Save them for Lesson 10.

**Evidence and explanation:** Draw the message journey, include both programs and record what happens after repeated A presses.

Complete **Tasks 9.1, 9.2 and 9.3** in the [Google Docs pupil workbook](https://docs.google.com/document/d/1TtgnkWvogK3TJ2bSEFirT5LDdON6QLlhlYuBmnWRdAc/edit?usp=drivesdk){ target="_blank" rel="noopener noreferrer" }. Use the lesson heading to find your tasks.

### Practical references

These guides retain their original project numbers; those numbers are not the new teaching lesson numbers. Use the relevant tasks described below.

- [Use the two-board help-system build and its request counter.](../09-classroom-help.md)
- [Additional reference for sending and receiving HELP and OK.](../07-wireless-rescue.md)

[Back to the teaching sequence](index.md)
