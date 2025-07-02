---
title: "What's the Vibe"
date: 2025-07-01
description: "A deep dive into the next big thing: Vibe Coding."
tags: ["AI", "Next.js", "TypeScript"]
published: true
image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
timeToComplete: "5 Hours"
category: "Project"
---

## Origin Story

&nbsp;&nbsp;&nbsp;&nbsp;One day I was sitting in the lab when one of my friends stopped by and chatted. We were talking about how our respective research papers were going and he noticed I had chat pulled up(Chat is short for ChatGPT, it's just the slang now). He asked me what I was using chat for. Suprised, I just said I use chat for boiler plate code. After discussing how AI should be used in research, he introduced me to **Cursor**. Although he didn't use it personally, he had mention that a lot of his friends had been hopping on this wave to get code out quicker. 

&nbsp;&nbsp;&nbsp;&nbsp;A couple of months later, I was in a time crunch for a paper deadline. In my original implementation, I had messed up the dataloader implementation so now the way data was being passed in was wrong and now all of our metrics were wrong. One of my mentors had suggested to start using **Cursor** simply because it was really fast at coding and as long as you told the Large Language Model(LLMs) what to exactly change/fix your code would come out looking perfect. At first, it was a great tool, I was able to refactor a majority of my code and then start running metrics. Some other bugs had appeared but they were easy enough for me to fix on my own. However, about two weeks before the deadline, I was getting an random freeze. At first I thought it was some sort of resource lock due to the way we were distributing weights during initialization, but that didn't work. A couple of prompts turned into days and nights of trying to prompt the LLM to fix the bug. On occasion it would fix the bug but it would come back when I made another change. Eventually, I decided to roll up my sleves and go old fashion and search the internet for answers. A couple of google searches later, and voila, bug fixed(maybe I'll write about it later but essentially it was some bug with NVML not matching older systems on newer CUDA distributions). 

&nbsp;&nbsp;&nbsp;&nbsp; This got me thinking, what is the hype behind vibe coding? It was able to solve a lot of my problems, but when I really needed it, it wasn't able to solve the problem. Furthermore, it seems like it's impossible without going one day without seeing something about LLMs and Agentic AI changing our lives. But really will it? During my internship with Capital One, the team I was on was working on Call Summarization with RAG. It seems like more than ever, everyone is trying to capitalize on this AI boom. But really what can AI currently do in the hands of an CS student/junior SWE, someone who's supposed to be replaced by AI. So over the weekend, I decided to do some digging and find out really what this was all about.

## Training Arc


