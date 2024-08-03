import React from "react";
import "../styles/Square.css";

const Square = ({ isWhite, isRed, isClicked, row, col, onClick }) => {
  const handleClick = () => {
    onClick(row, col);
  };

  return (
    <div
      className={`square ${isWhite ? "white" : "black"} ${isRed ? "red" : ""}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {isClicked && <span className="clicked-message" style={{color:"white"}}>Clicked</span>}
    </div>
  );
};

export default Square;
