import React from "react";

import {
  Img,
  List,
  Button,
  SelectBox,
  Text,
  PagerIndicator,
  Input,
  CheckBox,
  Line,
} from "components";
import { useGoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-urbanist sm:gap-[20px] md:gap-[20px] items-start mx-[auto] sm:pr-[20px] pr-[40px] w-[100%]">
        <div className="bg-gray_50 flex items-start justify-start p-[23px] md:px-[20px] md:w-[100%] w-[51%]">
          <div className="flex flex-col md:gap-[40px] gap-[85px] items-center justify-start mb-[77px] md:ml-[0] ml-[37px] md:w-[100%] w-[83%]">
            <div className="flex flex-col gap-[100px] md:gap-[40px] justify-start w-[100%]">
              <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[23%]">
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
              <div className="h-[515px] md:ml-[0] ml-[40px] relative sm:w-[100%] w-[514px]">
                <div className="absolute bg-bluegray_100 h-[515px] inset-y-[0] left-[0] my-[auto] rounded-bl-[0] rounded-br-[80px] rounded-tl-[0] rounded-tr-[0] w-[71%]"></div>
                <div className="absolute bg-white_A700 bottom-[11%] flex items-center justify-start p-[16px] right-[0] rounded-[16px] w-[64%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <List
                      className="flex-col gap-[12px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-[12px] items-center justify-between my-[0] w-[100%]">
                        <Button className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex h-[40px] items-center justify-center p-[12px] rounded-[8px] w-[40px]">
                          <Img
                            src="images/img_volume.svg"
                            className="h-[16px]"
                            alt="volume"
                          />
                        </Button>
                        <SelectBox
                          className="border-[1px] border-indigo_50 border-solid sm:flex-1 font-semibold pl-[14px] pr-[10px] py-[10px] rounded-[8px] text-[14px] text-bluegray_900 text-left sm:w-[100%] w-[83%]"
                          placeholderClassName="text-bluegray_900"
                          name="filter"
                          placeholder="Buy a Building"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                      </div>
                      <div className="flex flex-1 flex-row gap-[12px] items-center justify-between my-[0] w-[100%]">
                        <Button className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex h-[40px] items-center justify-center p-[12px] rounded-[8px] w-[40px]">
                          <Img
                            src="images/img_calendar.svg"
                            className="h-[16px]"
                            alt="calendar"
                          />
                        </Button>
                        <SelectBox
                          className="border-[1px] border-indigo_50 border-solid sm:flex-1 font-semibold pl-[14px] pr-[10px] py-[10px] rounded-[8px] text-[14px] text-bluegray_400 text-left sm:w-[100%] w-[83%]"
                          placeholderClassName="text-bluegray_400"
                          name="filter"
                          placeholder="Date"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                      </div>
                      <div className="flex flex-1 flex-row gap-[12px] items-center justify-between my-[0] w-[100%]">
                        <Button className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex h-[40px] items-center justify-center p-[12px] rounded-[8px] w-[40px]">
                          <Img
                            src="images/img_eye.svg"
                            className="h-[16px]"
                            alt="eye"
                          />
                        </Button>
                        <SelectBox
                          className="border-[1px] border-indigo_50 border-solid sm:flex-1 font-semibold pl-[14px] pr-[10px] py-[10px] rounded-[8px] text-[14px] text-bluegray_400 text-left sm:w-[100%] w-[83%]"
                          placeholderClassName="text-bluegray_400"
                          name="filter"
                          placeholder="Location"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                      </div>
                      <Button className="bg-indigo_A200 cursor-pointer font-bold my-[0] px-[16px] py-[9px] rounded-[8px] text-[16px] text-center text-white_A700 w-[295px]">
                        Search
                      </Button>
                    </List>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:w-[100%] w-[88%]">
              <Text
                className="text-bluegray_900 text-left tracking-[0.48px] w-[auto]"
                as="h1"
                variant="h1"
              >
                Find your sweet home
              </Text>
              <Text
                className="leading-[30.00px] mt-[19px] text-bluegray_400 text-left tracking-[0.20px] sm:w-[100%] w-[65%]"
                as="h4"
                variant="h4"
              >
                Schedule visit in just a few clicks visits in just a few clicks
              </Text>
              <PagerIndicator
                className="flex h-[8px] mt-[32px] w-[80px]"
                count={3}
                activeCss="inline-block cursor-pointer h-[8px] bg-indigo_A200 w-[48px] rounded-[4px]"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-blue_100 w-[8px]"
                selectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start md:ml-[0] ml-[140px] md:mt-[0] mt-[233px] md:px-[20px] md:w-[100%] w-[32%]">
          <div className="flex flex-col items-start justify-start w-[100%]">
            <Text
              className="font-urbanist text-bluegray_900 text-left tracking-[0.36px] w-[auto]"
              as="h2"
              variant="h2"
            >
              Welcome Back to Sewo!
            </Text>
            <Text
              className="font-semibold font-urbanist mt-[20px] text-bluegray_400 text-left w-[auto]"
              variant="body1"
            >
              Sign in your account
            </Text>
            <div className="flex flex-col font-urbanist gap-[13px] items-start justify-start mt-[49px] w-[100%]">
              <Text
                className="font-medium text-bluegray_900 text-left w-[auto]"
                variant="body1"
              >
                Your Email
              </Text>
              <Input
                wrapClassName="border-[1px] border-bluegray_900 border-solid px-[24px] py-[13px] rounded-[8px] w-[100%]"
                className="font-semibold p-[0] placeholder:text-bluegray_900 sm:px-[20px] text-[16px] text-bluegray_900 text-center w-[100%]"
                name="button"
                placeholder="Albertflorest@gmail.com |"
              ></Input>
            </div>
            <div className="flex flex-col font-urbanist gap-[13px] items-start justify-start mt-[25px] w-[100%]">
              <Text
                className="font-medium text-bluegray_400 text-left w-[auto]"
                variant="body1"
              >
                Password
              </Text>
              <Input
                wrapClassName="border-[1px] border-bluegray_400 border-solid flex px-[24px] py-[13px] rounded-[8px] sm:w-[100%] w-[446px]"
                className="font-semibold p-[0] placeholder:text-bluegray_900 sm:px-[20px] text-[16px] text-bluegray_900 text-center w-[100%]"
                name="password"
                placeholder="*********"
                suffix={
                  <Img
                    src="images/img_location.svg"
                    className="mt-[1px] mb-[auto] ml-[35px]"
                    alt="location"
                  />
                }
              ></Input>
            </div>
            <div className="flex flex-row font-urbanist gap-[214px] items-start justify-between mt-[16px] self-stretch sm:w-[100%] w-[auto]">
              <CheckBox
                className="font-normal not-italic text-[14px] text-bluegray_900 text-left tracking-[0.14px]"
                inputClassName="bg-indigo_A200 h-[16px] mr-[5px] rounded-[4px] w-[16px]"
                name="rememberme"
                label="Remember Me"
              ></CheckBox>
              <Text
                className="font-normal not-italic text-bluegray_400 text-left tracking-[0.14px] w-[auto]"
                variant="body1"
              >
                Forgot Password?
              </Text>
            </div>
            <Button className="bg-indigo_A200 cursor-pointer font-bold font-urbanist mt-[40px] sm:px-[20px] px-[24px] py-[13px] rounded-[8px] text-[18px] text-center text-white_A700 w-[446px]">
              Login
            </Button>
            <div className="flex sm:flex-col flex-row font-urbanist gap-[15px] items-center justify-center mt-[40px] self-stretch sm:w-[100%] w-[auto]">
              <Line className="bg-indigo_100 h-[1px] w-[39%]" />
              <Text
                className="font-normal not-italic text-bluegray_400 text-left tracking-[0.14px] w-[auto]"
                variant="body1"
              >
                Instan Login
              </Text>
              <Line className="bg-indigo_100 h-[1px] w-[39%]" />
            </div>
            <div className="flex sm:flex-col flex-row font-urbanist gap-[16px] items-center justify-between mt-[40px] w-[100%]">
              <Button
                className="common-pointer bg-white_A700 border-[1px] border-gray_100 border-solid cursor-pointer flex items-center justify-center min-w-[215px] px-[24px] py-[13px] rounded-[8px] w-[auto]"
                onClick={() => googleSignIn()}
                leftIcon={
                  <Img
                    src="images/img_google.svg"
                    className="mr-[8px]"
                    alt="google"
                  />
                }
              >
                <div className="font-semibold sm:px-[20px] text-[14px] text-bluegray_400 text-center">
                  Continue with Google
                </div>
              </Button>
              <Button
                className="bg-white_A700 border-[1px] border-gray_100 border-solid cursor-pointer flex items-center justify-center min-w-[215px] px-[24px] py-[13px] rounded-[8px] w-[auto]"
                leftIcon={
                  <Img
                    src="images/img_facebook.svg"
                    className="mr-[8px]"
                    alt="facebook"
                  />
                }
              >
                <div className="font-semibold sm:px-[20px] text-[14px] text-bluegray_400 text-center">
                  Continue with Facebook
                </div>
              </Button>
            </div>
            <Text
              className="font-inter font-normal md:ml-[0] ml-[122px] mt-[83px] not-italic text-bluegray_400 text-left w-[auto]"
              variant="body1"
            >
              <span className="text-bluegray_400 text-[14px] tracking-[0.14px] font-urbanist">
                Don’t have any acount?
              </span>
              <span className="text-indigo_A200 text-[14px] font-urbanist">
                {" "}
              </span>
              <span className="text-indigo_A200 text-[14px] font-urbanist font-semibold">
                Register
              </span>
            </Text>
          </div>
        </div>
        <Text
          className="font-semibold md:ml-[0] ml-[70px] md:mt-[0] mt-[28px] text-bluegray_900 text-left tracking-[0.12px] w-[auto]"
          variant="body2"
        >
          Login
        </Text>
      </div>
    </>
  );
};

export default LoginPage;
