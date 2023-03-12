import React from "react";

import { Img, Text } from "components";

const HomeNavbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col justify-start mb-[41px] md:w-[100%] w-[99%]">
          <div className="flex flex-row gap-[8px] items-center justify-center md:ml-[0] ml-[36px] md:w-[100%] w-[64%]">
            <Img
              src="images/img_logo.svg"
              className="h-[24px] w-[auto]"
              alt="logo"
            />
            <Img
              src="images/img_ticket.svg"
              className="h-[14px] w-[auto]"
              alt="ticket"
            />
          </div>
          <div
            className="bg-cover bg-no-repeat flex h-[48px] sm:hidden items-start justify-start mt-[63px] p-[12px] rounded-[8px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group3.svg')" }}
          >
            <div className="flex flex-row gap-[12px] items-center justify-start md:ml-[0] ml-[4px] self-stretch w-[auto]">
              <Img
                src="images/img_grid.svg"
                className="h-[24px] w-[24px]"
                alt="grid"
              />
              <Text
                className="font-semibold font-urbanist text-indigo_A200 text-left w-[auto]"
                variant="body1"
              >
                {props?.dashboard}
              </Text>
            </div>
          </div>
          <div className="flex flex-col sm:hidden items-start justify-start md:ml-[0] ml-[16px] mt-[28px] md:w-[100%] w-[50%]">
            <div className="flex flex-row gap-[12px] items-center justify-center self-stretch w-[auto]">
              <Img
                src="images/img_trash.svg"
                className="h-[24px] w-[24px]"
                alt="trash"
              />
              <Text
                className="font-semibold font-urbanist text-bluegray_400 text-left w-[auto]"
                variant="body1"
              >
                {props?.foodorder}
              </Text>
            </div>
            <div className="flex flex-row gap-[12px] items-center justify-start mt-[40px] self-stretch w-[auto]">
              <Img
                src="images/img_volume_bluegray_200.svg"
                className="h-[24px] w-[24px]"
                alt="volume"
              />
              <Text
                className="font-semibold font-urbanist text-bluegray_400 text-left w-[auto]"
                variant="body1"
              >
                {props?.managemenu}
              </Text>
            </div>
            <div className="flex flex-row gap-[12px] items-center justify-start mt-[40px] self-stretch w-[auto]">
              <Img
                src="images/img_user.svg"
                className="h-[24px] w-[24px]"
                alt="user"
              />
              <Text
                className="font-semibold font-urbanist text-bluegray_400 text-left w-[auto]"
                variant="body1"
              >
                {props?.customerreview}
              </Text>
            </div>
            <div className="flex flex-row gap-[12px] items-center justify-start mt-[40px] self-stretch w-[auto]">
              <Img
                src="images/img_user_bluegray_200.svg"
                className="h-[24px] w-[24px]"
                alt="user_One"
              />
              <Text
                className="font-semibold font-urbanist text-bluegray_400 text-left w-[auto]"
                variant="body1"
              >
                {props?.customerreview_One}
              </Text>
            </div>
            <div className="flex flex-row gap-[12px] items-center justify-start mt-[470px] self-stretch w-[auto]">
              <Img
                src="images/img_arrowleft.svg"
                className="h-[24px] w-[24px]"
                alt="arrowleft"
              />
              <Text
                className="font-semibold font-urbanist text-left text-red_500 w-[auto]"
                variant="body1"
              >
                {props?.customerreview_Two}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeNavbar.defaultProps = {
  dashboard: "Dashboard",
  foodorder: "Explore",
  managemenu: "My Order",
  customerreview: "Message",
  customerreview_One: "My Profile",
  customerreview_Two: "Logout",
};

export default HomeNavbar;
