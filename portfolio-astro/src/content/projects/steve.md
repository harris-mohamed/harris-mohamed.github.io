---
title: "S.T.E.V.E."
image: "steve.jpg"
status: "Class Final"
description: "S.T.E.V.E. - Custom drone built for natural disaster relief"
videoUrl: "https://www.youtube.com/embed/2tt2pZ0hHJs"
tags: ["Drone", "Arduino", "Raspberry Pi", "AI", "Computer Vision", "PID Control", "Embedded Systems"]
---

## Overview

S.T.E.V.E. (which stands for Self Teaching Elevated Vehicle Entity), is a drone designed from scratch that was designed to serve as an aid during natural disasters. S.T.E.V.E. was designed for Senior Tech, which was a high school capstone course where we could work on any STEM related project for a year. The concept was to create an autonomous drone capable of surveying locations where individuals stranded in dangerous situations could be without risking the life of an emergency responder. To accomplish this, we made a fully featured drone with a custom flight controller, camera to view the surroundings (to live stream what the environment looks like back to a VR headset at the base station), a speaker with an onboard AI (to communicate to a victim of a natural disaster), and sensors (to make sure it doesn't fly into any obstacles as well as update location). Even though we were extremely ambitious and did not meet all of our goals, this project was ultimately a success. The project was met with high praise and was presented at a limited engineering expo at Navistar. This is also the project that made me realize I wanted to be a Computer Engineer, as this project was worked on during the time in which I applied to colleges. Working on this project made me realize my love for combining hardware and software to produce something greater than the sum of its parts.

## Flight Controller

A crucial part of any drone is the flight controller. The flight controller is responsible for controlling the speed of each motor to Most drone projects will use an inexpensive off-the-shelf flight controller that takes care of all the flight algorithms. All you have to do is plug in the motors and battery to have a functional drone. However, we thought it would be better as a learning experience if we designed and programmed the flight controller from scratch. We used an Arduino MEGA as our primary microcontroller and an inexpensive MPU-6050 as our Inertial Measurement Unit (IMU). We then progreammed a PID controller to realize our flight controller. This took a bulk of our school year (and grew into a thousand line plus program) but was an incredibly rewarding experience. The microcontroller was programmed in C/C++ using the Arduino IDE.

![Proof of concept of PID](/images/PID.png)

## Camera/Virtual Reality Headset

The goal here was to come up with a way to stream camera footage from the drone back to a virtual reality headset. This could be used to allow emergency responders to remotely survey a disaster area without the need to send in personnel. From an engineering standpoint, it is an interesting feature to try to implement. We used a Raspberry Pi 3 as the computer and Raspberry Pi Camera for the camera. There were two reasons we went with this combination: (1) Raspberry Pis (and their cameras) are cheap, easy-to-use and well documented, and (2) This allowed to split the hardware for the project into two categories: flight essential and not flight essential. One of the most important factors optimized in a flight controller is how long the main loop of the code takes. The faster (typically) the better. By separating the hardware into what was essential for flight and what wasn't, we could could aggressively optimize the flight controller and still have other devices on the drone. If we tried to get the Arduino to compute and transfer the camera footage, the flight loop might get severely impacted and the drone would no longer fly smoothly.

## Speaker/AI

This is also not flight essential hardware and was supported by the Raspberry Pi (this was made simple by the fact that there is an audio out jack on the Pi). The main goal here was to give STEVE a natural language artificial intelligence so that STEVE could talk to people and let them know help is on the way. The initial thought was to use simple if-else constructs and hard-code the speaker outputs (i.e. "Help is on the way"), but then we had the idea of using IBM AI APIs to get a natural language output from the Raspberry Pi. After struggling for a few weeks with the IBM documentation, we contacted them and they sent us a sample Android app that used their APIs. After this, it was easy to link this with the Raspberry Pi and output it through the speaker. We trained the AI and attempted to make the outputs as helpful as possible in the relevant situation.

## Object Detection and Location Updates

One fundamental aspect of a drone is to not fly into nearby objects. Real drones use laser-detection to detect nearby objects, but those sensors are expensive and difficult to get working so we chose to use inexpensive ultrasonic sensors. Our end goal was to have 6 sensors in each axis, 3 in each direction (for instance, we would have 3 pointing directly upwards and 3 pointing directly downwards, thus covering the z-axis). We used a MUX shield, which adds 37 additional inputs to the Arduino and we ended up writing our own custom drivers to capture the ultrasonic values (it turns out provided library functions start to fail when you try to use an external shield). The driver code worked perfectly fine, but due to time constraints we were not able to interface it with the rest of the drone. We were able to add an off-the-shelf GPS module, which was capable of logging the drone's coordinates. Combined with the ultrasonic sensors, we were able to show that we could capture coordinates in 3-dimensions.

![GPS output visualized](/images/steve-map.png)

Even though we were not able to meet all of the goals we set for the project, we consider STEVE an incredible success.
