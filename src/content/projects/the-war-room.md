---
title: "The War Room"
description: "A multi-LLM interface enabling simultaneous queries to multiple AI models to obtain diversified opinions and perspectives"
date: "2026-01-25"
priority: 0
image: "../../../public/images/war_room_demo.png"
status: "In Progress"
githubUrl: "https://github.com/harris-mohamed/war-room"
tags: ["AI/ML", "LLM", "Full Stack"]
---

## Project Overview
The War Room is an innovative multi-LLM (Large Language Model) interface designed to facilitate comprehensive AI-powered analysis by enabling simultaneous queries across multiple AI models. The project aims to provide users with diversified opinions and perspectives on any given question by creating a "council of LLMs with different personalities."

## Technologies Used
- **Frontend**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma with SQLite
- **LLM Integration**: OpenRouter API
- **Deployment**: Docker Compose

## Key Features
- Parallel fan-out queries to multiple language models
- Capability tier system (Strategic, Operational, Tactical, Support)
- Persistent conversation sessions
- Side-by-side response comparison
- Mode indicators for capability tiers

## Implementation Details
The War Room leverages modern web technologies to create a unique AI interaction platform. By using OpenRouter API, the application can query multiple AI models simultaneously, allowing for comparative analysis of different AI reasoning styles and strengths.

## Challenges & Solutions
- Implementing parallel API calls while maintaining responsive user experience
- Designing a user interface that effectively displays multiple AI responses
- Managing session state and persistence across different model interactions

## Results/Outcomes
The project demonstrates an experimental approach to AI consultation, providing users with a multi-perspective analysis tool that goes beyond single-model interactions.

## Future Work
- Expand support for more AI models
- Implement more advanced comparison and analysis features
- Enhance session management and export capabilities

## Demo/Documentation
Detailed project documentation and live demo available in the GitHub repository.