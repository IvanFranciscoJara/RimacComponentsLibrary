import * as React from "react";
import { LoaderStyles } from './styled';

interface Props {
    color?: string;
    background?: string,
    size?: string,
}

export const Loader: React.FC<Props> = props => {
  const { color, background, size } = props;
  return(
      <LoaderStyles
        color={color}
        background={background}
        size={size}
      />
  )
};