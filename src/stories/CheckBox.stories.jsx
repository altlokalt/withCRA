import React from "react";
import { CheckBox } from "components";

export default {
  title: "altlokalt_s_application41/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = { label: "Checkbox", inputClassName: "mr-1" };
