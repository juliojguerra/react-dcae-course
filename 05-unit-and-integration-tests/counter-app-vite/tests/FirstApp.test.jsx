import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Tests in <FirstApp />", () => {
  test("should match with snapshot", () => {
    const title = "Hi, Iam Goku";
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("should show title in h1", () => {
    const title = "Hi, I'm Goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toBe(title);
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("should show subtitle sent by props", () => {
    const title = "Hi, I'm goku";
    const subtitle = "I'm a subtitle";
    const { getByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getByText(subtitle)).toBeTruthy();
  });
});
