# React useEffect Cleanup Function Memory Leak

This example demonstrates a common mistake in React's `useEffect` hook, where the cleanup function doesn't effectively clear an interval, leading to memory leaks.

## Problem

The `setInterval` function is used to update the count every second.  However, the provided `clearInterval` within the `useEffect`'s return function only runs when the component unmounts.  If the component is remounted, multiple intervals continue to run concurrently, causing a memory leak.

## Solution

The solution is to ensure the interval is cleared correctly regardless of the component's lifecycle. The use of the `useRef` hook helps control this effectively.