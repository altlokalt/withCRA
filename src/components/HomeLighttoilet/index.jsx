import React from "react";

import { Img } from "components";

const HomeLighttoilet = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_user_indigo_100.svg"
          className="h-[16px] w-[16px]"
          alt="user"
        />
      </div>
    </>
  );
};

HomeLighttoilet.defaultProps = {};

export default HomeLighttoilet;
