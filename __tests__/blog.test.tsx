import { render, screen } from "@testing-library/react";
import Blog from "@/pages/blog";

it("should have head", () => {
  render(<Blog />);

    const h1Element = screen.getByText("TechTrailblazers");
    expect(h1Element).toBeInTheDocument();
  });

  // Renders the P Element and in blog.tsx file
  // Also using within since the span element was nested into the P Element
  it("renders the blog post pElement", () => {
    render(<Blog />);

    const pElement = screen.getByText(/Navigating the Future -/);
    expect(pElement).toBeInTheDocument();

    const spanElement = within(pElement).getByText(
      "Insights, Stories, and Innovations"
    );
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
