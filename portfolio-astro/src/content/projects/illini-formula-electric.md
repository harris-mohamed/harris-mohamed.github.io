---
title: "DAQA Leader for Illini Formula Electric"
date: "2018-08-01"
image: "car.jpg"
status: "Club"
description: "DAQA leader for Illini Formula Electric"
tags: ["Formula SAE", "Data Acquisition", "Embedded Systems", "PCB Design", "Raspberry Pi", "CAN Bus"]
---

## Overview

Illini Formula Electric (IFE) is a club at UIUC where we design and build a formula-style electric racecar from scratch. The club is entirely student-run. In the summer we compete at the FSAE competition in several events. I was a member of IFE for two years, detailed below.

## 2017-2018

We were limited to 300V (that limit has since be raised to 600V). The battery that our car runs off of is comprised of 336 LiFePO4 cells that are wired together in a series-parallel combination that yields 300V and 175A overall. The competition rules require us to monitor the temperature and voltage of each battery cell. The old method of doing this was using the Elithion Proprietary Battery Management System (BMS). This system only runs on very old team laptops, which are archaic, cumbersome, and limited to a hardwire connection. As a freshman, I designed a PCB that could read data off the CAN bus and then output it over bluetooth to a laptop.

I also developed a GUI that was capable of outputting the data in realtime. This was done in C# using the .NET framework.

![Screenshot of GUI application](/images/gemini-graph.png)

## 2018-2019

After my first year on IFE, I got promoted to the leader of the Data Acquisition and Quantitative Analysis (DAQA) team, whose primary goal is to log data from all the sensors on the car, timestamp them, and then upload it to a server. It gathers data from 4 accelerometers, 30 strain gauges, a GPS, the position of the steering wheel, the coolant temperature, the brake pressure, the throttle and regen pedal potentiometer, CAN, hall effect sensors, and the voltage of the low voltage battery pack.

The system consisted of Raspberry Pi Zero boards with a custom PCB on top of each Pi. There would be one board near each tire and one in the center, by the driver's seat, which would distribute the data evenly across each board. Each Pi would then send data to the central pi, which would then timestamp and upload the data. The data would then be parsed and analyzed using AWS. Due to time constraints and hardware issues, the final system did not work as intended. However, it was a valuable learning experience.

![Render of board developed for DAQA](/images/apollo-board.png)
