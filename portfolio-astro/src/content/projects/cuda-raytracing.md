---
title: "CUDA Ray Tracing: GPU-accelerated ray tracing renderer"
date: "2019-12-01"
image: "cuda.png"
status: "Class Final - Completed"
description: "High-performance ray tracing renderer implemented in CUDA for ECE 408."
githubUrl: "https://github.com/harris-mohamed/cuda-raytracing"
tags: ["CUDA", "Graphics", "GPU"]
---

## Project Description

For the final project in ECE 408 (Applied Parallel Programming), I implemented a ray tracing renderer using NVIDIA CUDA to leverage GPU parallelization for significant performance improvements.

## Implementation

### Core Features
- Sphere and plane primitive support
- Phong reflection model
- Shadow ray casting
- Reflective surfaces
- Anti-aliasing through supersampling

### CUDA Optimization Techniques
- Thread-per-pixel parallelization
- Shared memory for scene data
- Texture memory for acceleration structures
- Occupancy optimization
- Memory coalescing

## Performance Results

Compared to a single-threaded CPU implementation:
- **10x** speedup on simple scenes
- **50x** speedup on complex scenes with reflections
- Achieved real-time rendering for simple scenes at 720p

### Profiling Insights
- Memory bandwidth was the primary bottleneck
- Optimizing memory access patterns provided the largest gains
- Kernel launch overhead minimized through larger workloads per kernel

## Technical Challenges

1. **Ray-surface intersection** - Implemented efficient bounding volume hierarchies
2. **Divergent execution** - Minimized warp divergence through scene organization
3. **Memory management** - Careful allocation and transfer between host and device

## Course Context

ECE 408 - Applied Parallel Programming focused on heterogeneous parallel programming with emphasis on GPU architectures and CUDA programming. This project showcased the performance potential of GPU acceleration for computationally intensive graphics tasks.
