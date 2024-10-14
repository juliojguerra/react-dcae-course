import { useState } from "react";
import PropTypes from "prop-types";

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
    <form onSubmit={onSubmit} data-testid="form">
      <input
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={onInputChange}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
