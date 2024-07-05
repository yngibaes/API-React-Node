import React from "react";
import { Link } from "react-router-dom";

const ButtonCard = () => {
  return (
    <div>
      <Link to="/card">
        <button
          className="bg-[#4B3F6E]/85 w-20 h-12 rounded text-large font-semibold m-2 text-white" /* onClick={this.handleClick} */
        >
          Tarjetas
        </button>
      </Link>
    </div>
  );
};

export default ButtonCard;
