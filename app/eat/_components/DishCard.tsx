import Image from "next/image";
import React from "react";

export default function DishCard() {
  return (
    <div>
      <Image
        src={
          "https://storage.googleapis.com/spineproduction/uploads/alacarte_bundle_template/horizontal_image/1772/daily_normal_HORZ-Thai-Green-Curry-Fish.jpg"
        }
        alt="Thai Green Curry Fish"
        width={500}
        height={500}
      />
    </div>
  );
}
