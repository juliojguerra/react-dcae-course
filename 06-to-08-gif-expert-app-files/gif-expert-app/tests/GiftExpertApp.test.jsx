import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Tests in <GiftExpertApp />", () => {
  test("should show the component correctly", () => {
    render(<GifExpertApp />);

    expect(screen.getByText("GifExpertApp")).toBeInTheDocument();
  });
});
