/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';
import { Item, colors } from './pages/ranges/utils';

export const useRenderHighlight = (className: string) => {
  // TODO fix any
  // --------------------
  // DONE: HTMLElement instead of any

  const ref = useRef<HTMLElement>(null);

  if (ref.current) {
    ref.current.classList.add(className);
    setTimeout(() => {
      if (ref.current) {
        ref.current.classList.remove(className);
      }
    }, 200);
  }

  return ref;
};

// TODO fix any
// --------------------
// DONE: Item[] instead of any

export const range = (n: number, fn: (n: number) => Item[]) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(fn(i + 1));
  }
  return result;
};

// TODO fix any
// --------------------
// DONE: colors[] instead of any

export const chooseRandomly = (items: colors[]) => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

export const addDays = (date: Date, amount: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + amount);
  return newDate;
};

export const formatDate = (date: Date) => date.toISOString().split('T')[0];
