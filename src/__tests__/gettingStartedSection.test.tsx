// Import necessary dependencies
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // MemoryRouter is used to wrap components that use React Router

// Import the component to be tested
import GettingStartedSection from "../components/fragments/LandingPage/gettingStartedSection";

// Describe the test suite for GettingStartedSection component
describe("GettingStartedSection Component", () => {
  // Test case to check if component renders correctly
  it("renders GettingStartedSection component correctly", () => {
    render(
      <MemoryRouter>
        <GettingStartedSection />
      </MemoryRouter>
    );

    // Assertions to check presence of specific elements or text
    expect(screen.getByText(/Sewa Mobil di/i)).toBeInTheDocument(); // Adjust text content as per your actual component
    expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument(); // Adjust text content as per your actual component
    expect(screen.getByText(/Mulai Sewa Mobil/i)).toBeInTheDocument(); // Adjust button text as per your actual component
  });
});
