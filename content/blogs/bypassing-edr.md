---
title: "Bypassing EDR: A Practical Study"
date: "2024-03-15"
description: "An analysis of modern Endpoint Detection and Response systems and techniques..."
tags: ["red-team", "edr", "malware"]
---

EDR (Endpoint Detection and Response) evasion is a hot topic. This post breaks down how modern agents hook APIs and monitor processes.

## The Environment
We set up a test environment using a standard Windows 11 baseline.

## Hooking the Unhookable
We utilized a custom implementation of Direct System Calls to bypass user-land hooks imposed by the EDR agent.

```c
// Sample pseudo-code representing direct syscalls
NTSTATUS status = NtAllocateVirtualMemory(...);
```

More details coming soon.
