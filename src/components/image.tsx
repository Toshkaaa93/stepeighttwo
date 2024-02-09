import React from "react";

type Props = {
  image: string;
  width: number | string;
  height: number | string;
  style ?: React.CSSProperties;
};

const Image = (props: Props) => {
  return (
    <div
      className="custom-image"
      style={{
        width: props.width,
        height: props.height,
        backgroundImage: `url('${require(`../assets/${props.image}`)}')`,
        ...props.style
      }}
    ></div>
  );
};

export default Image;
