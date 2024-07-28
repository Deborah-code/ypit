import { describe, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import Blog from "@/pages/blog";
describe("Blog post", () => {
  // Renders the H1 Element in blog.tsx file
  it("renders the blog post h1Element", () => {
    render(<Blog />);

    const h1Element = screen.getByText("TechTrailblazers");
    expect(h1Element).toBeInTheDocument();
  });

  // Renders the P Element and in blog.tsx file
  it("renders the blog post pElement", () => {
    render(<Blog />);

    const pElement = screen.getByText(/Navigating the Future -/);
    expect(pElement).toBeInTheDocument();
  });

  // Renders the Span Element nested into P Element
  it("renders the blog post spanElement", () => {
    render(<Blog />);

    const spanElement = screen.getByText(/Insights, Stories, and Innovations/);
    expect(spanElement).toBeInTheDocument();
  });

  // Renders the Div Element in blog.tsx file using
  it("renders the subsatck feed emded div", () => {
    render(<Blog />);
    const substackDiv = screen.getByTestId("substack-feed-embed");
    expect(substackDiv).toBeInTheDocument();
  });

  // Making sure data-testid matches the Script Element in blog.tsx file
  it("includes the subsatck feed script", () => {
    render(<Blog />);
    const scriptElement = screen.getByTestId("substack-feed-script");
    expect(scriptElement).toBeInTheDocument();
  });
});
