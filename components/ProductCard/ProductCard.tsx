import { Badge } from "@nextui-org/badge";
import Image from "next/image";
import React from "react";
import { FaRegEye } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { MdOutlineFavoriteBorder } from "react-icons/md";

const ProductCard = () => {
  return (
    <div>
      <div className="relative bg-slate-100 p-5 flex justify-center items-center">
        <div className="absolute text-2xl top-5 right-3 z-50 bg-white p-1 rounded-full">
          <MdOutlineFavoriteBorder className="" />
        </div>
        <div className="absolute top-7 left-7 flex items-center justify-center">
          <Badge
            className="rounded p-0.5 px-1"
            content="new"
            color="danger"
            size="sm"
          ></Badge>
        </div>
        <div className="absolute text-2xl top-14 bg-white right-3 z-50 p-1 rounded-full">
          <FaRegEye />
        </div>
        <Image
          width="100"
          height={100}
          alt="card"
          className="w-[170px] h-[170px]"
          src="/images/products/product.png"
        />
      </div>
      <div className="my-2 space-y-3">
        <h3 className="font-semibold uppercase text-lg">
          HAVIT HV-G92 Gamepad
        </h3>
        <div className="flex items-center justify-start gap-5">
          <span className="font-semibold text-red-600">$160</span>
          <span className="line-through font-semibold text-gray-500" deleted>
            $200
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Rating style={{ maxWidth: 100 }} value={4} readOnly />
          <span>(75)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
