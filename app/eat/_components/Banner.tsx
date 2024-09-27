import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div>
      <Image
        src={
          "https://storage.googleapis.com/spineproduction/uploads/banner/picture/134/picture.jpeg"
        }
        role="presentation"
        alt=""
        width={500}
        height={500}
      />
    </div>
  );
}
