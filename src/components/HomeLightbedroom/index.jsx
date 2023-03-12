import React from "react";

import { Img } from "components";

const HomeLightbedroom = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img src="images/img_car.svg" className="h-[16px] w-[16px]" alt="car" />
      </div>
    </>
  );
};

HomeLightbedroom.defaultProps = {};

export default HomeLightbedroom;
