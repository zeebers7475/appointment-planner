import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {props.children}
    </div>
  );
};
