import React from "react";

import HomeNavbar from "components/HomeNavbar";
import { Line, Input, Img, Text, Button, SelectBox, List } from "components";
import { CloseSVG } from "../../assets/images";
import HomeBoldlocation from "components/HomeBoldlocation";
import HomeLightbedroom from "components/HomeLightbedroom";
import HomeLighttoilet from "components/HomeLighttoilet";
import HomeColumnairplane from "components/HomeColumnairplane";
import { postList, postLogin } from "service/api";
import { useNavigate } from "react-router-dom";

const Home1Page = () => {
  const [apiData, setapiData] = React.useState();
  const [apiData1, setapiData1] = React.useState();
  const navigate = useNavigate();

  function callApi() {
    const req = {};

    postList(req)
      .then((res) => {
        setapiData(res?.data);

        navigate("/detailbuilding");
      })
      .catch((err) => {
        console.error(err);
        navigate("/forgotpassword");
      });
  }
  function callApi1() {
    const req = {};

    postLogin(req)
      .then((res) => {
        setapiData1(res?.data);

        navigate("/detailbuilding");
      })
      .catch((err) => {
        console.error(err);
        navigate("/forgotpassword");
      });
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_101 flex font-urbanist items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <div className="flex md:flex-1 flex-col items-center justify-start md:px-[20px] md:w-[100%] w-[18%]">
            <HomeNavbar
              className="bg-white_A700 flex flex-col items-center justify-start p-[23px] sm:px-[20px] w-[100%]"
              dashboard="Dashboard"
              foodorder="Explore"
              managemenu="My Order"
              customerreview="Message"
              customerreview_One="My Profile"
              customerreview_Two="Logout"
            />
            <div className="bg-white_A700 h-[105px] sm:hidden w-[100%]"></div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start md:px-[20px] md:w-[100%] w-[83%]">
            <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-start sm:justify-start sm:pr-[20px] pr-[40px] w-[100%]">
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
                className="bg-cover bg-no-repeat flex h-[24px] items-end justify-start md:ml-[0] ml-[606px] pb-[16px] pl-[16px] w-[24px]"
                style={{
                  backgroundImage: "url('images/img_notification.svg')",
                }}
              >
                <div className="bg-red_700 border-[1px] border-solid border-white_A700 h-[8px] rounded-[50%] w-[8px]"></div>
              </div>
              <div className="bg-gray_400 h-[44px] md:ml-[0] ml-[40px] md:mt-[0] my-[18px] rounded-[50%] w-[44px]"></div>
            </div>
            <div className="flex flex-col items-start justify-start md:w-[100%] w-[94%]">
              <Text
                className="text-bluegray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Find Your Best Real Estate
              </Text>
              <div className="bg-white_A700 flex items-center justify-start mt-[19px] p-[14px] rounded-[16px] w-[100%]">
                <div className="flex flex-col gap-[24px] items-center justify-start my-[10px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] sm:hidden items-center sm:justify-between justify-start w-[100%]">
                    <Button className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex h-[40px] items-center justify-center p-[12px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_volume.svg"
                        className="h-[16px]"
                        alt="volume_One"
                      />
                    </Button>
                    <SelectBox
                      className="border-[1px] border-indigo_50 border-solid md:flex-1 font-semibold md:ml-[0] ml-[12px] pl-[14px] pr-[10px] py-[10px] rounded-[8px] text-[14px] text-bluegray_900 text-left md:w-[100%] w-[16%]"
                      placeholderClassName="text-bluegray_900"
                      name="filter"
                      placeholder="Rent a Building"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_900.svg"
                          className="h-[16px] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Button className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex h-[40px] items-center justify-center md:ml-[0] ml-[40px] p-[12px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_calendar.svg"
                        className="h-[16px]"
                        alt="calendar"
                      />
                    </Button>
                    <SelectBox
                      className="border-[1px] border-indigo_50 border-solid md:flex-1 font-semibold md:ml-[0] ml-[12px] pl-[14px] pr-[10px] py-[10px] rounded-[8px] text-[14px] text-bluegray_400 text-left md:w-[100%] w-[15%]"
                      placeholderClassName="text-bluegray_400"
                      name="filter_One"
                      placeholder="Date"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_900.svg"
                          className="h-[16px] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Button className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex h-[40px] items-center justify-center md:ml-[0] ml-[40px] p-[12px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_eye.svg"
                        className="h-[16px]"
                        alt="eye"
                      />
                    </Button>
                    <SelectBox
                      className="border-[1px] border-indigo_50 border-solid md:flex-1 font-semibold md:ml-[0] ml-[12px] pl-[14px] pr-[10px] py-[10px] rounded-[8px] text-[14px] text-bluegray_400 text-left md:w-[100%] w-[17%]"
                      placeholderClassName="text-bluegray_400"
                      name="filter_Two"
                      placeholder="Location"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_900.svg"
                          className="h-[16px] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Button className="bg-indigo_A200 cursor-pointer font-bold md:ml-[0] ml-[40px] px-[16px] py-[9px] rounded-[8px] text-[16px] text-center text-white_A700 w-[143px]">
                      Search
                    </Button>
                    <Button className="border-[1px] border-indigo_50 border-solid flex h-[40px] items-center justify-center md:ml-[0] ml-[114px] p-[12px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_menu.svg"
                        className="h-[16px]"
                        alt="menu"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                    <Line className="bg-gray_100 h-[1px] w-[100%]" />
                    <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between w-[100%]">
                      <List
                        className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[auto]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[12px] items-start justify-start sm:ml-[0] self-stretch w-[auto]">
                          <Img
                            src="images/img_frame33903.svg"
                            className="common-pointer h-[180px] rounded-[8px] w-[320px]"
                            onClick={() => {
                              callApi();
                            }}
                            alt="frame33903"
                          />
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                              <div className="flex flex-row items-start justify-between w-[100%]">
                                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_900 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Star Sun Hotel & Apartment
                                  </Text>
                                  <div className="flex flex-row gap-[9.71px] items-center justify-center self-stretch w-[auto]">
                                    <HomeBoldlocation className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                                    <Text
                                      className="font-medium text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Jl Letda Nasir 45 RT 001/02
                                    </Text>
                                  </div>
                                </div>
                                <Button className="bg-indigo_A200_1e cursor-pointer font-bold mb-[20px] min-w-[45px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-indigo_A200 w-[auto]">
                                  $80
                                </Button>
                              </div>
                              <div className="flex flex-row gap-[25px] items-start justify-start self-stretch w-[auto]">
                                <div className="flex flex-row gap-[6px] items-center justify-center self-stretch w-[auto]">
                                  <HomeLightbedroom className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                                  <Text
                                    className="font-semibold text-bluegray_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    2
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[6px] items-center justify-center self-stretch w-[auto]">
                                  <HomeLighttoilet className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                                  <Text
                                    className="font-semibold text-bluegray_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    3
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[6px] items-center justify-center self-stretch w-[auto]">
                                  <HomeColumnairplane
                                    className="bg-cover bg-no-repeat flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_lightbuildingsize.svg')",
                                    }}
                                  />
                                  <Text
                                    className="font-semibold text-bluegray_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    24M
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start sm:ml-[0] self-stretch w-[auto]">
                          <div
                            className="common-pointer bg-bluegray_100 h-[180px] rounded-[8px] w-[100%]"
                            onClick={() => {
                              callApi1();
                            }}
                          ></div>
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                              <div className="flex flex-row items-start justify-between w-[100%]">
                                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_900 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Star Sun Hotel & Apartment
                                  </Text>
                                  <div className="flex flex-row gap-[9.71px] items-center justify-center self-stretch w-[auto]">
                                    <HomeBoldlocation className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                                    <Text
                                      className="font-medium text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Jl Letda Nasir 45 RT 001/02
                                    </Text>
                                  </div>
                                </div>
                                <Button className="bg-indigo_A200_1e cursor-pointer font-bold mb-[20px] min-w-[45px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-indigo_A200 w-[auto]">
                                  $80
                                </Button>
                              </div>
                              <div className="flex flex-row gap-[25px] items-start justify-start self-stretch w-[auto]">
                                <div className="flex flex-row gap-[6px] items-center justify-center self-stretch w-[auto]">
                                  <HomeLightbedroom className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                                  <Text
                                    className="font-semibold text-bluegray_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    2
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[6px] items-center justify-center self-stretch w-[auto]">
                                  <HomeLighttoilet className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                                  <Text
                                    className="font-semibold text-bluegray_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    3
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[6px] items-center justify-center self-stretch w-[auto]">
                                  <HomeColumnairplane
                                    className="bg-cover bg-no-repeat flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_lightbuildingsize.svg')",
                                    }}
                                  />
                                  <Text
                                    className="font-semibold text-bluegray_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    24M
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start sm:ml-[0] self-stretch w-[auto]">
                          <div className="bg-bluegray_100 h-[180px] rounded-[8px] w-[100%]"></div>
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                              <div className="flex flex-row items-start justify-between w-[100%]">
                                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_900 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Star Sun Hotel & Apartment
                                  </Text>
                                  <div className="flex flex-row gap-[9.71px] items-center justify-center self-stretch w-[auto]">
                                    <HomeBoldlocation className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                                    <Text
                                      className="font-medium text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Jl Letda Nasir 45 RT 001/02
                                    </Text>
                                  </div>
                                </div>
                                <Button className="bg-indigo_A200_1e cursor-pointer font-bold mb-[20px] min-w-[45px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-indigo_A200 w-[auto]">
                                  $80
                                </Button>
                              </div>
                              <div className="flex flex-row gap-[25px] items-start justify-start self-stretch w-[auto]">
                                <div className="flex flex-row gap-[6px] items-center justify-center self-stretch w-[auto]">
                                  <HomeLightbedroom className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                                  <Text
                                    className="font-semibold text-bluegray_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    2
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[6px] items-center justify-center self-stretch w-[auto]">
                                  <HomeLighttoilet className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                                  <Text
                                    className="font-semibold text-bluegray_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    3
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[6px] items-center justify-center self-stretch w-[auto]">
                                  <HomeColumnairplane
                                    className="bg-cover bg-no-repeat flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_lightbuildingsize.svg')",
                                    }}
                                  />
                                  <Text
                                    className="font-semibold text-bluegray_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    24M
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                      <Button className="bg-white_A700 flex h-[40px] items-center justify-center md:mt-[0] my-[121px] p-[12px] rounded-[50%] shadow-bs w-[40px]">
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
              <div className="bg-white_A700 flex items-center justify-start mt-[24px] p-[24px] sm:px-[20px] rounded-[16px] w-[100%]">
                <div className="flex flex-col gap-[34px] items-center justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] sm:items-center items-start sm:justify-between justify-start w-[100%]">
                    <Button className="bg-bluegray_900_1e cursor-pointer font-bold mb-[4px] min-w-[82px] px-[16px] py-[8px] rounded-[6px] text-[14px] text-bluegray_900 text-center w-[auto]">
                      Popular
                    </Button>
                    <div className="flex items-center justify-center md:ml-[0] ml-[16px] px-[16px] py-[8px] self-stretch w-[auto]">
                      <Text
                        className="font-bold text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Recommended
                      </Text>
                    </div>
                    <div className="flex items-center justify-center md:ml-[0] ml-[16px] px-[16px] py-[8px] self-stretch w-[auto]">
                      <Text
                        className="font-bold text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Nearest
                      </Text>
                    </div>
                    <SelectBox
                      className="border-[1px] border-indigo_50 border-solid md:flex-1 font-semibold md:ml-[0] ml-[521px] pl-[14px] pr-[10px] py-[10px] rounded-[8px] text-[14px] text-bluegray_900 text-left md:w-[100%] w-[14%]"
                      placeholderClassName="text-bluegray_900"
                      name="filter_Three"
                      placeholder="Most Recent"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_900.svg"
                          className="h-[16px] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Button className="border-[1px] border-indigo_50 border-solid flex h-[40px] items-center justify-center md:ml-[0] ml-[40px] p-[12px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_volume_bluegray_900.svg"
                        className="h-[16px]"
                        alt="volume_Two"
                      />
                    </Button>
                  </div>
                  <div className="md:gap-[20px] gap-[59px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[97%]">
                    <div className="flex sm:flex-col flex-row gap-[14px] items-start justify-start self-stretch w-[100%]">
                      <div className="bg-bluegray_100 h-[134px] rounded-[8px] w-[41%]"></div>
                      <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                        <Button className="bg-indigo_A200_1e cursor-pointer font-bold min-w-[45px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-indigo_A200 w-[auto]">
                          $80
                        </Button>
                        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Metro Jayakarta Hotel & Spa
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeBoldlocation className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left tracking-[0.14px] w-[auto]"
                              variant="body1"
                            >
                              Kemal Ataturk Avenue, 10294, Indonesia
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[30px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeLightbedroom className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                            <Text
                              className="font-semibold text-bluegray_700 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body2"
                            >
                              2
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeLighttoilet className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                            <Text
                              className="font-semibold text-bluegray_700 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body2"
                            >
                              3
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeColumnairplane
                              className="bg-cover bg-no-repeat flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_lightbuildingsize.svg')",
                              }}
                            />
                            <Text
                              className="font-semibold text-bluegray_700 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body2"
                            >
                              24m
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[14px] items-start justify-start self-stretch w-[100%]">
                      <div className="bg-bluegray_100 h-[134px] rounded-[8px] w-[41%]"></div>
                      <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                        <Button className="bg-indigo_A200_1e cursor-pointer font-bold min-w-[45px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-indigo_A200 w-[auto]">
                          $80
                        </Button>
                        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Metro Jayakarta Hotel & Spa
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeBoldlocation className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left tracking-[0.14px] w-[auto]"
                              variant="body1"
                            >
                              Kemal Ataturk Avenue, 10294, Indonesia
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[30px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeLightbedroom className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                            <Text
                              className="font-semibold text-bluegray_700 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body2"
                            >
                              2
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeLighttoilet className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                            <Text
                              className="font-semibold text-bluegray_700 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body2"
                            >
                              3
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeColumnairplane
                              className="bg-cover bg-no-repeat flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_lightbuildingsize.svg')",
                              }}
                            />
                            <Text
                              className="font-semibold text-bluegray_700 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body2"
                            >
                              24m
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[14px] items-start justify-start self-stretch w-[100%]">
                      <div className="bg-bluegray_100 h-[134px] rounded-[8px] w-[41%]"></div>
                      <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                        <Button className="bg-indigo_A200_1e cursor-pointer font-bold min-w-[45px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-indigo_A200 w-[auto]">
                          $80
                        </Button>
                        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Metro Jayakarta Hotel & Spa
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeBoldlocation className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left tracking-[0.14px] w-[auto]"
                              variant="body1"
                            >
                              Kemal Ataturk Avenue, 10294, Indonesia
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[30px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeLightbedroom className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                            <Text
                              className="font-semibold text-bluegray_700 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body2"
                            >
                              2
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeLighttoilet className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                            <Text
                              className="font-semibold text-bluegray_700 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body2"
                            >
                              3
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeColumnairplane
                              className="bg-cover bg-no-repeat flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_lightbuildingsize.svg')",
                              }}
                            />
                            <Text
                              className="font-semibold text-bluegray_700 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body2"
                            >
                              24m
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[14px] items-start justify-start self-stretch w-[100%]">
                      <div className="bg-bluegray_100 h-[134px] rounded-[8px] w-[41%]"></div>
                      <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                        <Button className="bg-indigo_A200_1e cursor-pointer font-bold min-w-[45px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-indigo_A200 w-[auto]">
                          $80
                        </Button>
                        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Metro Jayakarta Hotel & Spa
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeBoldlocation className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left tracking-[0.14px] w-[auto]"
                              variant="body1"
                            >
                              Kemal Ataturk Avenue, 10294, Indonesia
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[30px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeLightbedroom className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                            <Text
                              className="font-semibold text-bluegray_700 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body2"
                            >
                              2
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeLighttoilet className="flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]" />
                            <Text
                              className="font-semibold text-bluegray_700 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body2"
                            >
                              3
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center self-stretch w-[auto]">
                            <HomeColumnairplane
                              className="bg-cover bg-no-repeat flex flex-col h-[16px] items-center justify-start sm:w-[100%] w-[16px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_lightbuildingsize.svg')",
                              }}
                            />
                            <Text
                              className="font-semibold text-bluegray_700 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body2"
                            >
                              24m
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
