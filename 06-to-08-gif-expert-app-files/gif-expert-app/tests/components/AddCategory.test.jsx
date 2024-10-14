import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Tests in <AddCategory />", () => {
  test("should update value in input box", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");
  });

  test("should call onNewCategory if the input has a value", () => {
    const onNewCategory = jest.fn();
    const inputValue = "Saitama";

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByTestId("form");
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    // expect(onNewCategory).toHaveBeenCalled();
    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should not call onNewCategory if the input is empty", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByTestId("form");

    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
