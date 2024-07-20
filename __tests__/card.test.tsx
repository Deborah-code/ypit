import CardSection from "@/components/home/CardSection";
import { describe, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Card component", () => {
  it("renders a heading", () => {
    render(<CardSection />);
    const heading = screen.findByRole("heading", { level: 1 });
    expect(heading).toBeTruthy();
  });
});
