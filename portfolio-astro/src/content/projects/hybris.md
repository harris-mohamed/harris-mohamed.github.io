---
title: "Project Hybris"
date: "2020-03-01"
image: "OpenAI.jpg"
status: "Completed"
description: "Hybris: An experiment in text generation"
tags: ["AI", "GPT-2", "NLP", "Text Generation", "Machine Learning"]
---

## Overview

I've always had an interest in using AI for text generation. One of my friends is a part of a website called Hybris Forum where they publish articles discussing technology, culture, and the dysfunction of technology with society. That same friend suggested I write an article as well, but writing it definitely not my strong suit. This was the perfect opportunity to experiment with text generation AIs. The current state of the art is GPT-3, a transformer network developed by OpenAI. Unfortunately, GPT-3 is not available to the public, because the text it generates is too realistic to that written by humans.

Rather than go through the effort of training my own network, I decided to use GPT-2. The creators have open sourced a smaller version of GPT-2, which implies that it is bad enough to be given open access to, which is something I found out firsthand. The way I generated the article was by writing a long essay, and then finetuning the 355M model of GPT-2. After this, I generated lots of output text with input prompts. It was pretty painful to sort through the outputs and get something usable, and after spending a few days I didn't have enough text for an essay. Out of frustration, I turned to InferKit, a working demo of GPT-2. This was useful for the transitions in the essay.

Check my Git to find the final Colab notebook I used. Unless GPT-3 gets released, I won't be pursuing this project any further. I would honestly call this a failure, but the final essay (also on my Git) is pretty coherent.
