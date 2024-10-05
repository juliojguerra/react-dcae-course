import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("<CounterApp /> Tests", () => {
  const value = 100;

  test("should match snapshot", () => {
    const { container } = render(<CounterApp value={value} />);

    expect(container).toMatchSnapshot();
  });

  test("should show initial value", () => {
    render(<CounterApp value={value} />);

    expect(screen.getByText(value)).toBeTruthy();
  });

  test("should increase button by +1", () => {
    render(<CounterApp value={value} />);

    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("101")).toBeTruthy();
  });

  test("should decrease with button -1", () => {
    render(<CounterApp value={value} />);

    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("99")).toBeTruthy();
  });

  test("button reset should work", () => {
    render(<CounterApp value={value} />);

    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByRole("button", { name: /reset/i }));

    expect(screen.getByText(value)).toBeTruthy();

    screen.debug();
  });
});
