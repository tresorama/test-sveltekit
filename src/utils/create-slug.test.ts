import { describe, expect, test } from "vitest";
import { createSlug } from "./create-slug";

describe('create-slug', () => {
  test('must produce a only letters and dash string', () => {
    const result = createSlug('Ciao bastardo ingrato!');
    expect(result).toBe('ciao-bastardo-ingrato');
  });
  test('must produce a only letters, numbers and dash string', () => {
    const result = createSlug('80 Leghe sotto i mari??!');
    expect(result).toBe('80-leghe-sotto-i-mari');
  });
});