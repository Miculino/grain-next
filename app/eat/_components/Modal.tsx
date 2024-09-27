import React from "react";
import Tag from "./Tag";
import Button from "./Button";
import ProductInfo from "./ProductInfo";

export default function Modal() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/20 w-full h-full grid place-content-center">
      <div className="bg-white flex max-w-[52rem]">
        <div className="bg-[url('https://storage.googleapis.com/spineproduction/uploads/alacarte_bundle_template/vertical_image/1772/density_2_VERT-Thai-Green-Curry-Fish.jpg')] bg-cover flex-1 flex bg-top">
          <div className="bg-gradient-overlay flex items-end  h-full text-white">
            <div className="flex flex-col gap-2  p-4 ">
              <Tag color="white">Warm</Tag>
              <h3 className="font-bold">THAI GREEN CURRY FISH</h3>
              <p>
                thai style green curry, seared dory, butterfly blue pea rice
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 relative">
          <div className="h-[750px] overflow-y-scroll">
            {/* STORY */}
            <ProductInfo title="STORY">
              <p>
                Our undying love for Thai street food led to the birth of this
                Thai dish. A truly authentic flavour experience, bringing to the
                table the full robust flavours of the spices paired with our
                flakey dory and butterfly blue pea rice — a bold, traditional,
                yet exciting dish.
              </p>
            </ProductInfo>
            {/* INGREDIENTS */}
            <ProductInfo title="INGREDIENTS">
              <p>
                white rice, butterfly blue pea flower, salt, vegetable stock,
                vegetable oil, garlic, fried shallot, dory fish, black pepper,
                whole cherry tomato, thyme, sugar, green curry paste, milk,
                cream, lemongrass, kaffir lime leaf, onion, ginger, green chilli
                large, curry leaf, coriander
              </p>
            </ProductInfo>
            {/* TAGS */}
            <ProductInfo title="TAGS">
              <div className="flex flex-wrap gap-2">
                <Tag>Vegetarian</Tag>
                <Tag>Eggs</Tag>
              </div>
            </ProductInfo>
            {/* NUTRITIONAL INFO */}
            <ProductInfo title="NUTRITIONAL INFO" className="border-b-0">
              <ul>
                <li>Calories: 416</li>
                <li>Fat: 20g</li>
                <li>Carb: 43g</li>
                <li>Protein: 16g</li>
              </ul>
            </ProductInfo>
          </div>
          <div className="w-full absolute bottom-0 left-0 p-4 border-t-[1px] border-t-light-gray bg-white justify-between flex items-center">
            <b>$17.50</b>
            <Button>Add</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
