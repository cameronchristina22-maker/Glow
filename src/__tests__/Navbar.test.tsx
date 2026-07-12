import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import { Navbar } from "../components/Navbar";

describe("Navbar", () => {
  it("renders navigation links", () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Navbar />
        </CartProvider>
      </MemoryRouter>,
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop All")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Sustainability")).toBeInTheDocument();
  });

  it("renders the shopping cart link", () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Navbar />
        </CartProvider>
      </MemoryRouter>,
    );
    expect(screen.getByLabelText("Shopping Cart")).toBeInTheDocument();
  });
});