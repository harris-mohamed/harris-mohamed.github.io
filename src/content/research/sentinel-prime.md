---
title: "Sentinel Prime: Real-time LIDAR point cloud FPGA-based 3D classification"
date: "2023-01-01"
image: "SentinelPrime.png"
advisor: "Dr. Deming Chen"
advisorUrl: "https://dchen.ece.illinois.edu/"
---

## Overview

Sentinel Prime was a continuation of Project Sentinel. Sentinel Prime's goal was to detect and classify 3D objects in indoor environments in real time. Originally, the idea was to pair Sentinel with a camera and use the existing LIDAR sensor, then employ a signal fusion network to combine the data and outperform existing 2D and 3D pipelines. Then, the computation would be performed on an FPGA or embedded device to attain real-time computation. However, I set my timeline a little too aggressively. At the start, my approach was to use an NVIDIA Jetson Nano to run existing KITTI models (KITTI is a challenging 3D dataset, a useful benchmark for 3D object detection and classification). The Jetson Nano actually gave me a lot of grief. The primary issue was the ARM-based architecture, which required me to build several libraries from scratch, which took an extremely long time. In the end, I was only able to get a few models running, and had very little time to actually pair the camera and LIDAR sensor. However, I got to explore the state of the art in 3D classification, including testing of Google's Objectron model as well as some of the top-performing KITTI models. I also learned a lot about how to allocate time and perform literature reviews. Even though functionally Sentinel Prime was a failure, I learned a lot and will carry this forward in my career.

I also got the chance to test out some virtual simulators such as Microsoft AirSim, which I definitely aim to return to for another project.

![Screenshot captured in the middle of an AirSim simulation](/images/airsim.png)
*Screenshot captured in the middle of an AirSim simulation*

## Advisor

Professor [Deming Chen](https://dchen.ece.illinois.edu/)
