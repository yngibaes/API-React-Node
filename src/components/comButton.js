import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <Link to="/gatos/form">
        <button
          className="bg-violet-400 w-20 h-12 rounded text-large font-semibold mt-2" /* onClick={this.handleClick} */
        >
          +
        </button>
      </Link>
    </div>
  );
};

export default Button;
