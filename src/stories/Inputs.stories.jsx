import React from "react";

import { Input } from "components";

export default {
  title: "altlokalt_s_application41/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
