import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Tests in <FirstApp />", () => {
  const title = "Hi, I'm Goku";
  const subtitle = "I'm a subtitle";

  test("should match with snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("should show message hi Im goku", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug();
  });

  test("should show title in h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("should show subtitle sent by props", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(1);
  });
});
