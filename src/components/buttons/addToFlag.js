import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToFlagButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFlagButton = e => {
    e.preventDefault();
    context.addToFlag(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFlagButton}
    >
      Add to Flag
    </button>
  );
};

export default AddToFlagButton;