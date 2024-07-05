import React from "react";
import { render, screen } from "@testing-library/react";
import FaqSection from "../components/fragments/LandingPage/faqSection";

describe("FaqSection Component", () => {
  it("renders correctly", () => {
    render(<FaqSection />);

    // Assert that the main heading exists
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /frequently asked question/i,
    });
    expect(heading).toBeInTheDocument();

    // Assert that all FAQ items are rendered
    const faqItems = screen.getAllByRole("checkbox");
    expect(faqItems.length).toBe(5); // Adjust the number based on your actual implementation

    // Example assertion for one FAQ item
    const firstFaqItemLabel = screen.getByText(
      /apa saja syarat yang dibutuhkan/i
    );
    expect(firstFaqItemLabel).toBeInTheDocument();
  });
});
