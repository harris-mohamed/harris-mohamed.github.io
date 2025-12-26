---
title: "Custom Pipelined RISC-V Implementation"
date: "2020-12-01"
image: "risc.jpeg"
status: "Completed"
description: "Custom implementation of a pipelined RISC-V CPU"
tags: ["Computer Architecture", "RISC-V", "SystemVerilog", "Hardware Design", "Class Project", "CPU Design"]
---

## Overview

The RISC-V pipelined CPU is the capstone assignment in ECE 411: Computer Organization and Design. This is an intensive course that teaches fundamentals in computer architecture and then those fundamentals are designed in System Verilog. Working in a group with 2 others, we designed a 5-stage 32-bit classic RISC-V processor that could perform hazard detection and data forwarding.

## My Contributions

I played a significant role in implementing the base CPU and had the chance to augment the CPU with the RISC-V M extension, which supports multiplication and division operation. I decided to use the well-known Wallace Tree to achieve a faster multiplication than an algorithm like add-shift. For the divider, I used a shift-subtract algorithm.

## Future Work

Although I enjoyed this course, I feel that I could accomplish a lot more with more time. I am planning to revisit this CPU design and augment additional features, such as a tournament branch predictor, multiple-way L1 caches, and . My ultimate goal is to program an FPGA with this CPU and run actual code on it. I might even pursue Tomasulo's algorithm, as that algorithm makes much more sense to me than a pipeline. Due to academic integrity violations, I can't upload the CPU from my class but I will update my GitHub if I make something else not in a class.
