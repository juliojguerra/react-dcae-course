import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (onNewCategory) => {
    console.log(onNewCategory);

    setCategories([...categories, onNewCategory]);
  };

  return (
    <div>
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      {/* Gifs list */}

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}

        {/* Gif item */}
      </ol>
    </div>
  );
};
