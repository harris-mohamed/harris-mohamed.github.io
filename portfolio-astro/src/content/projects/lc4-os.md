---
title: "LC-4 Operating System"
date: "2019-12-01"
image: "penguin.jpg"
status: "Completed"
description: "LC-4 OS: Operating System developed from scratch in a small group"
priority: 7
videoUrl: "https://www.youtube.com/watch?v=ARYjKrD7jYs"
tags: ["Operating Systems", "C", "Assembly", "Systems Programming", "Class Project"]
---

## Overview

This was the final project for ECE 391, an intensive design course where I worked with a group of 4 to write code to design a unix-like operation system. This operating system (dubbed LC-4 after our university's toy ISA, LC-3) featured device drivers (for terminal, file system, interrupt controller, real-time clock), support for system calls, context-switching, virtualization, and a round-robin scheduler.

## Details

The following are some details that I worked on to implement this OS.

- **Device Drivers**
  - **Interrupt controller**: I programmed the PIC-8925A interrupt controller to interface with our OS. After this was complete, we could have the keyboard and real-time clock register as interrupts.
  - **Real-time clock**: All programs need some way to track time. I studied the datasheet for the RTC chip in order for it to interface with our OS.

- **System calls**
  - Once the interrupts were enabled, I set up support for system calls to be made.

- **Context-switching**
  - In order to run user programs, there is a context-switch that needs to happen: from the kernel space to the user space. This context switch needed considerable assembly code and something or other

- **Scheduling**
  - This was one of my favorite parts of the OS. At the point, we had three terminals and coded them such that they ran all at once. The scheduler would context switch between all 3 terminals using a special clock chip that was connected to interrupt line 0

One of my group members uploaded a video of our final OS [here](https://www.youtube.com/watch?v=ARYjKrD7jYs).
