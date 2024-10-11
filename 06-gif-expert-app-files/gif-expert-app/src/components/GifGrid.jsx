import PropTypes from "prop-types";
import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";

export const GifGrid = ({ category }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
