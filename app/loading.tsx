"use client"
import React from "react";
import { Spinner } from "@nextui-org/spinner";

const loading = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <Spinner color="warning" />
    </div>
  );
};

export default loading;
