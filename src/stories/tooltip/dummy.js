import React, { useState } from "react";
import { Tooltip } from "../../lib";

export const TooltipExample = (props) => {
  const [showParagraph, setShowParagraph] = useState(false);
  return (
    <div
      style={{ position: "relative", width: "max-content" }}
      onMouseEnter={() => setShowParagraph(true)}
      onMouseLeave={() => setShowParagraph(false)}
    >
      {props.children}
      {showParagraph && (
        <Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor." />
      )}
    </div>
  );
};
