import { render, screen } from "@testing-library/react";
import Blog from "@/pages/blog";

it("should have head", () => {
  render(<Blog />);

  const myElem = screen.getByText("Heading");
  expect(myElem).toBeInTheDocument();
});
