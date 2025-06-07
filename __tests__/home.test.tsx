import Home from "@/pages";
import { describe, expect } from "@jest/globals";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

describe("Home Page", () => {
  
  it("renders the heading element", () => {
    render(<Home />)
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement.textContent).toBe("Creating a Space for Young People In Tech to")
  });

  it("heading element contains span element", () => {
    render(<Home />)
    const spanElement = screen.getByText("Connect and");
    expect(spanElement).toBeTruthy()
  })

  it("renders description text", () => {
    render(<Home />)
    const description = screen.getByTestId("YPIT_description");
    expect(description).toBeTruthy()
  })

  it("renders join us button", () => {
    render(<Home />)
    const join_us_Link = screen.getByTestId("Join_us_Link");
    expect(join_us_Link).toBeTruthy()
  })
  
  it("join us button has correct href", () => {
    render(<Home />)
    const join_us_Link = screen.getByTestId("Join_us_Link");
    expect(join_us_Link).toHaveProperty("href", "https://chat.whatsapp.com/JGIXg7zr6vx48YJAFv8mF2")
  })
  
  it("renders image banner", () => {
    render(<Home />)
    const imageBanner = screen.getByAltText("Hero Image");
    expect(imageBanner).toBeTruthy()
  });

  it("renders globe image", () => {
    render(<Home />)
    const globe_img = screen.getByAltText("globe");
    expect(globe_img).toBeTruthy()
  })

  it("renders become a member button with correct href", () => {
    render(<Home />)
    const become_member_Link = screen.getByTestId("become_active_member_link");
    expect(become_member_Link).toHaveProperty("href", "https://chat.whatsapp.com/JGIXg7zr6vx48YJAFv8mF2")
  })

  it("renders card section with more than 4 cards", () => {
    render(<Home />)
    const allCard = screen.getAllByTestId("card_component");
    expect(allCard.length).toBeGreaterThan(4)
  })

  it("renders testimonials heading", () => {
    render(<Home />)
    const testimonialHeading = screen.getByRole("heading", { level: 1 });
    expect(testimonialHeading.textContent).toBe("Testimonials from our members")
  })

  it("renders partners heading", () => {
    render(<Home />)
    const partnersHeading = screen.getByRole("heading", { level: 3 });
    expect(partnersHeading.textContent).toBe("Some of our recent partners")
  })
})
