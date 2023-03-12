import React from "react";

import { Img } from "components";

const HomeBoldlocation = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img src="images/img_eye.svg" className="h-[16px] w-[16px]" alt="eye" />
      </div>
    </>
  );
};

HomeBoldlocation.defaultProps = {};

export default HomeBoldlocation;
