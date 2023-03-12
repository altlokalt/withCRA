import React from "react";

import { Img } from "components";

const HomeColumnairplane = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_lightbuildingsize.svg')" }}
      >
        <Img
          src="images/img_airplane.svg"
          className="h-[16px] w-[16px]"
          alt="airplane"
        />
      </div>
    </>
  );
};

HomeColumnairplane.defaultProps = {};

export default HomeColumnairplane;
