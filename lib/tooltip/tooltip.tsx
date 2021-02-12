import * as React from "react";
import { TooltipDiv, Paragraph } from './styled';

interface Props {
  title: React.ReactNode | string;
}

export const Tooltip: React.FC<Props> = (props) => {
  const { title } = props;

  return (
      <TooltipDiv>
        <Paragraph>{title}</Paragraph>
      </TooltipDiv>
  );
};

export default Tooltip;
