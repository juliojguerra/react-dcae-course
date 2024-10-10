import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const inputVal = inputValue.trim();
    if (inputVal.length <= 1) return;

    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputVal);

    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={onInputChange}
      ></input>
    </form>
  );
};
