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

export const IconCheck = () => {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.3178 0.927476C10.634 1.19503 10.6734 1.66827 10.4059 1.98447L4.90588 8.48447C4.76799 8.64743 4.56719 8.74391 4.3538 8.74974C4.14041 8.75556 3.93465 8.67018 3.78808 8.51498L0.954742 5.51498C0.670333 5.21384 0.683896 4.73916 0.985034 4.45476C1.28617 4.17035 1.76085 4.18391 2.04526 4.48505L4.30263 6.87521L9.2608 1.01556C9.52835 0.699354 10.0016 0.659918 10.3178 0.927476Z" />
    </svg>
  );
};

export const IconLeftDouble = () => {
  return (
    <svg
      width="15"
      height="10"
      viewBox="0 0 15 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.0302 9.76126C13.6849 10.0796 13.1311 10.0796 12.7858 9.76126L8.26573 5.5946C7.91151 5.26808 7.91151 4.73192 8.26573 4.4054L12.7858 0.238737C13.1311 -0.0795793 13.6849 -0.0795792 14.0302 0.238737C14.3845 0.565257 14.3845 1.10141 14.0302 1.42793L10.1552 5L14.0302 8.57207C14.3845 8.89859 14.3845 9.43474 14.0302 9.76126Z" />
      <path d="M6.03024 9.76126C5.68492 10.0796 5.13113 10.0796 4.78581 9.76126L0.265726 5.5946C-0.0884898 5.26808 -0.0884898 4.73192 0.265727 4.4054L4.78581 0.238737C5.13113 -0.0795793 5.68492 -0.0795792 6.03024 0.238737C6.38445 0.565257 6.38445 1.10141 6.03024 1.42793L2.15518 5L6.03024 8.57207C6.38445 8.89859 6.38445 9.43474 6.03024 9.76126Z" />
    </svg>
  );
};
