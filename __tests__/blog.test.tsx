import { render, screen } from "@testing-library/react";
import Blog from "@/pages/blog";

it("should have head", () => {
  render(<Blog />);

  const h1Element = screen.getByText("Heading");
  expect(h1Element).toBeInTheDocument();
});
