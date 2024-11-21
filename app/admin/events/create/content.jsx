"use client"
import React from "react";

const Content = ({ types, formats }) => {
  console.log(types.result, formats.result);
  return <div className="w-full h-full bg-white p-6 overflow-y-auto"></div>;
};

export default Content;
