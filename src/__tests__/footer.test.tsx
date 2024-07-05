import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/fragments/LandingPage/footer";

describe("Footer Component", () => {
  it("renders footer component correctly", () => {
    render(<Footer />);

    expect(
      screen.getByText(/Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/binarcarrental@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/081-233-334-808/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Why Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Testimonial/i)).toBeInTheDocument();
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
    expect(screen.getByLabelText("facebook")).toBeInTheDocument();
    expect(screen.getByLabelText("instagram")).toBeInTheDocument();
    expect(screen.getByLabelText("twitter")).toBeInTheDocument();
    expect(screen.getByLabelText("mail")).toBeInTheDocument();
    expect(screen.getByLabelText("twitch")).toBeInTheDocument();
    expect(screen.getByText(/Copyright Binar 2022/i)).toBeInTheDocument();
  });
});
