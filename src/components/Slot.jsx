import redToken from "../assets/joken.svg";
import blackToken from "../assets/Sherken.svg";
import React, { useEffect, useState } from "react";
const Slot = ({ ch, y, x }) => {
  return (
    <div className="slot" x={x} y={y}>
      {ch && (
        <img
          src={ch == "X" ? redToken : blackToken}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default Slot;
