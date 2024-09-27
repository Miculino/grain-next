import Image from "next/image";
import React from "react";
import BannerImg from "@/app/keep-a-secret.jpeg";

export default function Banner() {
  return (
    <div>
      <Image
        src={BannerImg.src}
        role="presentation"
        alt=""
        width={BannerImg.width}
        height={BannerImg.height}
      />
    </div>
  );
}
