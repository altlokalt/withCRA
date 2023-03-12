import React from "react";

import HomeNavbar from "components/HomeNavbar";
import { Line, Input, Img, Text, Button, List } from "components";
import { CloseSVG } from "../../assets/images";
import HomeBoldlocation from "components/HomeBoldlocation";
import HomeLightbedroom from "components/HomeLightbedroom";
import HomeLighttoilet from "components/HomeLighttoilet";
import HomeColumnairplane from "components/HomeColumnairplane";

const DetailBuildingPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_101 flex font-urbanist items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
            <HomeNavbar
              className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-[23px] md:px-[20px] md:w-[100%] w-[auto]"
              dashboard="Dashboard"
              foodorder="Explore"
              managemenu="My Order"
              customerreview="Message"
              customerreview_One="My Profile"
              customerreview_Two="Logout"
            />
            <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:px-[20px] md:w-[100%] w-[83%]">
              <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-start sm:pr-[20px] pr-[40px] w-[100%]">
                <Line className="bg-indigo_50 md:h-[1px] h-[80px] md:w-[100%] w-[1px]" />
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  wrapClassName="bg-gray_102 flex md:flex-1 gap-[16px] md:ml-[0] ml-[39px] md:mt-[0] my-[18px] pl-[16px] pr-[40px] py-[10px] rounded-[12px] md:w-[100%] w-[35%]"
                  className="font-medium p-[0] placeholder:text-bluegray_200 sm:pr-[20px] text-[14px] text-bluegray_200 text-left w-[100%]"
                  name="frame33899"
                  placeholder="Search here ..."
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer mr-[16px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      color="#a9b4cd"
                      className="cursor-pointer my-[auto]"
                      onClick={() => setInputvalue("")}
                      style={{
                        visibility:
                          inputvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                    />
                  }
                ></Input>
                <div
                  className="bg-cover bg-no-repeat flex h-[24px] sm:hidden items-end justify-start md:ml-[0] ml-[606px] pb-[16px] pl-[16px] w-[24px]"
                  style={{
                    backgroundImage: "url('images/img_notification.svg')",
                  }}
                >
                  <div className="bg-red_700 border-[1px] border-solid border-white_A700 h-[8px] rounded-[50%] w-[8px]"></div>
                </div>
                <div className="bg-gray_400 h-[44px] sm:hidden md:ml-[0] ml-[40px] md:mt-[0] my-[18px] rounded-[50%] w-[44px]"></div>
              </div>
              <div className="bg-white_A700 flex items-center justify-start p-[23px] sm:px-[20px] rounded-[16px] md:w-[100%] w-[94%]">
                <div className="flex md:flex-col flex-row gap-[24px] items-end justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[70%]">
                    <div className="flex md:flex-col flex-row gap-[24px] items-end justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[24px] items-start justify-start md:w-[100%] w-[71%]">
                        <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] w-[22%]">
                            <Img
                              src="images/img_arrowleft_bluegray_900.svg"
                              className="h-[24px] w-[24px]"
                              alt="arrowleft_One"
                            />
                            <Text
                              className="text-bluegray_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Detail
                            </Text>
                          </div>
                          <div className="bg-bluegray_100 flex items-center justify-end p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                            <Button className="bg-gradient  cursor-pointer font-bold mt-[236px] sm:px-[20px] px-[24px] py-[13px] rounded-[8px] text-[16px] text-bluegray_900 text-center w-[161px]">
                              Virtual Tour
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            APARTMENT
                          </Text>
                          <Text
                            className="text-bluegray_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Star Sun Hotel & Apartment
                          </Text>
                          <div className="flex flex-row gap-[9.71px] items-center justify-center self-stretch w-[auto]">
                            <HomeBoldlocation className="flex flex-col h-[24px] items-center justify-start sm:w-[100%] w-[24px]" />
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Jl Letda Nasir 45 RT 001/02
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[53px] md:w-[100%] w-[27%]">
                        <div className="bg-bluegray_100 h-[154px] rounded-[8px] w-[100%]"></div>
                        <div className="bg-black_900_7f flex items-center justify-end mt-[24px] p-[66px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            +12
                          </Text>
                        </div>
                        <Img
                          src="images/img_frame33909.svg"
                          className="h-[24px] mt-[24px] w-[120px]"
                          alt="frame33909"
                        />
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[12px] self-stretch w-[auto]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Price
                          </Text>
                          <div className="flex flex-row gap-[2px] items-center justify-end self-stretch w-[auto]">
                            <Text
                              className="text-indigo_A200 text-right w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              $80
                            </Text>
                            <Text
                              className="font-semibold text-bluegray_400 text-right w-[auto]"
                              variant="body1"
                            >
                              /night
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start mt-[24px] self-stretch md:w-[100%] w-[auto]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Facility
                      </Text>
                      <div className="flex md:flex-col flex-row md:gap-[40px] gap-[80px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                        <List
                          className="sm:flex flex-row md:gap-[40px] gap-[80px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[67%]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                            <div className="flex flex-row gap-[12px] items-center justify-center self-stretch w-[auto]">
                              <HomeLightbedroom className="flex flex-col h-[24px] items-center justify-start sm:w-[100%] w-[24px]" />
                              <Text
                                className="font-semibold text-bluegray_900 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                2 Beds
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-center self-stretch w-[auto]">
                              <Img
                                src="images/img_save.svg"
                                className="h-[24px] w-[24px]"
                                alt="save"
                              />
                              <Text
                                className="font-semibold text-bluegray_900 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Kitchen
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                            <div className="flex flex-row gap-[12px] items-center justify-center self-stretch w-[auto]">
                              <HomeLighttoilet className="flex flex-col h-[24px] items-center justify-start sm:w-[100%] w-[24px]" />
                              <Text
                                className="font-semibold text-bluegray_900 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                3 Baths
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-center self-stretch w-[auto]">
                              <Img
                                src="images/img_lightbalcony.svg"
                                className="h-[24px] w-[24px]"
                                alt="lightbalcony"
                              />
                              <Text
                                className="font-semibold text-bluegray_900 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Balcony
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                            <div className="flex flex-row gap-[12px] items-center justify-center self-stretch w-[auto]">
                              <HomeColumnairplane
                                className="bg-cover bg-no-repeat flex flex-col h-[24px] items-center justify-start sm:w-[100%] w-[24px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_lightbuildingsize.svg')",
                                }}
                              />
                              <Text
                                className="font-semibold text-bluegray_900 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                24M area
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-center self-stretch w-[auto]">
                              <Img
                                src="images/img_signal.svg"
                                className="h-[24px] w-[24px]"
                                alt="signal"
                              />
                              <Text
                                className="font-semibold text-bluegray_900 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Wifi
                              </Text>
                            </div>
                          </div>
                        </List>
                        <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex flex-row gap-[12px] items-center justify-center self-stretch w-[auto]">
                            <Img
                              src="images/img_computer_indigo_100.svg"
                              className="h-[24px] w-[24px]"
                              alt="computer"
                            />
                            <Text
                              className="font-semibold text-bluegray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Smooking Area
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[12px] items-center justify-center self-stretch w-[auto]">
                            <Img
                              src="images/img_clock.svg"
                              className="h-[24px] w-[24px]"
                              alt="clock"
                            />
                            <Text
                              className="font-semibold text-bluegray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Parking Area
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start max-w-[732px] mt-[24px] w-[100%]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Description
                      </Text>
                      <Text
                        className="font-normal leading-[20.00px] md:max-w-[100%] max-w-[732px] not-italic text-bluegray_400 text-left tracking-[0.14px]"
                        variant="body1"
                      >
                        <span className="text-bluegray_400 text-[14px] font-urbanist">
                          Star Apartment by Star Hotel is an inn that has a room
                          concept in an apartment, which is comfortable and
                          clean. This apartment is located in a strategic area
                          of ​​Semarang City, thus providing easy access to
                          several famous places in Semarang City. With the
                          facilities and services in this apartment, you can
                          make this apartment your vacation accommodation with
                          your family or partner
                        </span>
                        <span className="text-bluegray_400 text-[14px] font-urbanist">
                          .
                        </span>
                        <span className="text-indigo_A200 text-[14px] font-urbanist font-semibold">
                          {" "}
                          Learn More
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start md:mt-[0] mt-[54px] md:w-[100%] w-[29%]">
                    <div className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex items-center justify-start p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <Img
                          src="images/img_user_bluegray_900.svg"
                          className="h-[24px] md:ml-[0] ml-[228px] w-[24px]"
                          alt="user_Two"
                        />
                        <div className="bg-gray_100 h-[48px] mt-[23px] mx-[auto] rounded-[4px] w-[48px]"></div>
                        <Text
                          className="font-bold md:ml-[0] ml-[65px] mt-[19px] text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Jaydon Lipshutz
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] ml-[103px] mt-[8px] text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          AGENT
                        </Text>
                        <div className="flex flex-row gap-[12px] items-center justify-center md:ml-[0] ml-[31px] mt-[17px] self-stretch w-[auto]">
                          <Img
                            src="images/img_eye_bluegray_904.svg"
                            className="h-[16px] w-[16px]"
                            alt="eye_One"
                          />
                          <Text
                            className="font-medium text-bluegray_400 text-left w-[auto]"
                            variant="body2"
                          >
                            Ampera 3 no 8 Daerah Khusus
                          </Text>
                        </div>
                        <Text
                          className="font-medium md:ml-[0] ml-[86px] mt-[10px] text-bluegray_900 text-left w-[auto]"
                          variant="body1"
                        >
                          12 Properties
                        </Text>
                        <div className="flex flex-row gap-[16px] items-center justify-between mt-[22px] w-[100%]">
                          <Button
                            className="bg-indigo_A400 cursor-pointer flex items-center justify-center min-w-[118px] px-[16px] py-[9px] rounded-[4px] w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_user_white_a700.svg"
                                className="mb-[1px] mr-[16px]"
                                alt="user"
                              />
                            }
                          >
                            <div className="font-semibold text-[12px] text-center text-white_A700 tracking-[0.12px]">
                              Message
                            </div>
                          </Button>
                          <Button
                            className="bg-light_green_600 cursor-pointer flex items-center justify-center min-w-[118px] px-[16px] py-[9px] rounded-[4px] w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_call.svg"
                                className="mr-[16px]"
                                alt="call"
                              />
                            }
                          >
                            <div className="font-semibold text-[12px] text-center text-white_A700 tracking-[0.12px]">
                              Call
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_frame33905.svg"
                      className="h-[297px] mt-[23px] rounded-[8px] w-[auto]"
                      alt="frame33905"
                    />
                    <Button className="bg-indigo_A200 cursor-pointer font-bold mt-[24px] sm:px-[20px] px-[24px] py-[13px] rounded-[8px] shadow-bs text-[16px] text-center text-white_A700 tracking-[0.16px] w-[302px]">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1400px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="bg-white_A700 h-[319px] w-[18%]"></div>
            <div className="bg-white_A700 flex md:flex-1 items-center justify-end mb-[40px] md:mt-[0] mt-[14px] p-[24px] sm:px-[20px] rounded-[16px] md:w-[100%] w-[auto]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="flex flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Review
                  </Text>
                  <Text
                    className="font-medium text-indigo_A200 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    View All
                  </Text>
                </div>
                <div className="flex flex-row gap-[12px] items-center justify-start mt-[9px] md:w-[100%] w-[17%]">
                  <Button className="bg-indigo_A200 cursor-pointer font-bold min-w-[47px] px-[12px] py-[4px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                    4.2
                  </Button>
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    from 28 reviews
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between mt-[24px] w-[100%]">
                  <List
                    className="sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[auto]"
                    orientation="horizontal"
                  >
                    <div className="border-[1px] border-gray_100 border-solid flex items-center justify-center sm:ml-[0] p-[12px] rounded-[8px] self-stretch w-[auto]">
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                        <div className="flex flex-row gap-[108px] items-center justify-between self-stretch w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Albert Flores
                          </Text>
                          <div className="bg-blue_50 flex flex-row items-center justify-center px-[8px] rounded-[4px] self-stretch w-[auto]">
                            <Text
                              className="font-semibold text-indigo_A200 text-left w-[auto]"
                              variant="body1"
                            >
                              5.0
                            </Text>
                            <Text
                              className="font-normal not-italic text-indigo_A100 text-left tracking-[0.12px] w-[auto]"
                              variant="body2"
                            >
                              /5
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-gray_100 h-[1px] w-[100%]" />
                        <Text
                          className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[222px] not-italic text-bluegray_400 text-left tracking-[0.14px]"
                          variant="body1"
                        >
                          comfortable apartment, friendly staff, and very
                          careful with the covid protocol
                        </Text>
                      </div>
                    </div>
                    <div className="border-[1px] border-gray_100 border-solid flex items-center justify-center sm:ml-[0] p-[12px] rounded-[8px] self-stretch w-[auto]">
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                        <div className="flex flex-row gap-[108px] items-center justify-between self-stretch w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Albert Flores
                          </Text>
                          <div className="bg-blue_50 flex flex-row items-center justify-center px-[8px] rounded-[4px] self-stretch w-[auto]">
                            <Text
                              className="font-semibold text-indigo_A200 text-left w-[auto]"
                              variant="body1"
                            >
                              5.0
                            </Text>
                            <Text
                              className="font-normal not-italic text-indigo_A100 text-left tracking-[0.12px] w-[auto]"
                              variant="body2"
                            >
                              /5
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-gray_100 h-[1px] w-[100%]" />
                        <Text
                          className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[222px] not-italic text-bluegray_400 text-left tracking-[0.14px]"
                          variant="body1"
                        >
                          comfortable apartment, friendly staff, and very
                          careful with the covid protocol
                        </Text>
                      </div>
                    </div>
                    <div className="border-[1px] border-gray_100 border-solid flex items-center justify-center sm:ml-[0] p-[12px] rounded-[8px] self-stretch w-[auto]">
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                        <div className="flex flex-row gap-[108px] items-center justify-between self-stretch w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Albert Flores
                          </Text>
                          <div className="bg-blue_50 flex flex-row items-center justify-center px-[8px] rounded-[4px] self-stretch w-[auto]">
                            <Text
                              className="font-semibold text-indigo_A200 text-left w-[auto]"
                              variant="body1"
                            >
                              5.0
                            </Text>
                            <Text
                              className="font-normal not-italic text-indigo_A100 text-left tracking-[0.12px] w-[auto]"
                              variant="body2"
                            >
                              /5
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-gray_100 h-[1px] w-[100%]" />
                        <Text
                          className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[222px] not-italic text-bluegray_400 text-left tracking-[0.14px]"
                          variant="body1"
                        >
                          comfortable apartment, friendly staff, and very
                          careful with the covid protocol
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[auto]">
                    <div className="border-[1px] border-gray_100 border-solid flex items-center justify-center p-[12px] rounded-[8px] self-stretch w-[auto]">
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                        <div className="flex items-center justify-center self-stretch w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Albert Flores
                          </Text>
                        </div>
                        <Line className="bg-gray_100 h-[1px] w-[100%]" />
                        <Text
                          className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[137px] not-italic text-bluegray_400 text-left tracking-[0.14px]"
                          variant="body1"
                        >
                          comfortable apartment, friendly staff, and very
                          careful with the covid protocol
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-white_A700 flex h-[40px] items-center justify-center md:mt-[0] my-[45px] p-[12px] rounded-[50%] shadow-bs w-[40px]">
                    <Img
                      src="images/img_arrowdown_bluegray_900.svg"
                      className="h-[16px]"
                      alt="arrowright"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBuildingPage;
