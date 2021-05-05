import * as React from "react";
import * as icons from "./icons.js";
import { COLORS } from "../../utils/theme/constants";

export interface IIconProps {
  name: string;
  fill?: string;
  height?: string;
  width?: string;
}

const findIcon = (name, iconsObj = icons) => {
  const icon = iconsObj[name];
  if (icon) {
    return icon;
  }
  return false;
};

const svgShapes = (svgData) => {
  return svgData.map((data, index): any => {
    if (data.name === "path") {
      return <path key={`key${index}`} d={data.value.d} />;
    }
    if (data.name === "circle") {
      return (
        <circle
          key={`key${index}`}
          cx={data.value.cx}
          cy={data.value.cy}
          r={data.value.r}
        />
      );
    }
  });
};

export const Icon: React.SFC<IIconProps> = ({ name, fill, height, width }) => {
  const icon = findIcon(name);
  if (!icon) {
    console.log(`icon ${name} not found!`);
    return null;
  }
  const props = {
    fill,
    name,
    height: height || 70,
    width: width || 70,
    viewBox: icon.viewBox,
  };
  const svgContent = icon ? svgShapes(icon.svgData) : "";
  return <svg {...props}>{svgContent}</svg>;
};

Icon.defaultProps = {
  name: "alert",
  fill: COLORS.GRAY_3,
  height: "70",
  width: "70",
};
