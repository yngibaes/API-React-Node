import React from "react";
import { Link } from "react-router-dom";

const ButtonAdd = () => {
  return (
    <div>
      <Link to="/card/add">
        <button
          className="bg-[#BA96C1]/85 w-20 h-12 rounded text-large font-semibold m-2" /* onClick={this.handleClick} */
        >
          +
        </button>
      </Link>
    </div>
  );
};

export default ButtonAdd;
