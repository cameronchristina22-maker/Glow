import { describe, it, expect } from "vitest";
import { products } from "../data/products";

describe("products data", () => {
  it("has at least one product", () => {
    expect(products.length).toBeGreaterThan(0);
  });

  it("each product has required fields", () => {
    for (const p of products) {
      expect(p.id).toBeDefined();
      expect(p.name).toBeDefined();
      expect(p.price).toBeGreaterThan(0);
      expect(p.category).toBeDefined();
      expect(p.image).toBeDefined();
    }
  });

  it("all products have unique IDs", () => {
    const ids = products.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all products have positive subscription prices", () => {
    for (const p of products) {
      expect(p.subscriptionPrice).toBeGreaterThan(0);
      expect(p.subscriptionPrice).toBeLessThan(p.price);
    }
  });
});