---
title: "Eigenmask"
date: "2020-05-01"
image: "../../../public/images/eigenmask.png"
status: "Class Final"
description: "Eigenmask: A solution to detect if masks are being worn or not"
priority: 3
tags: ["Signal Processing", "Android"]
---

## Overview

This was the final project for ECE 420, Signal Processing Lab. The final project is to take any signal processing application described in a paper and implement it on an Android app. I worked with a partner to create Eigenmask: an application of Eigenfaces with the purpose of distinguishing not only who the person is, but whether or not they are wearing a mask.

## Process

The Eigenface algorithm works by finding the eigenvectors from the covariance matrix of the probability distribution over the extremely high-dimensional vector space of face images. This provides dimensionality-reduction, and unknown faces can be classified by comparing them to the eigenvectors determined in training. Training was done on Python, and this was ported over to Android. The project was a success, able to distinguish a few friends and I, as well as whether we were masked or maskless.
