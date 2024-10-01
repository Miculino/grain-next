// Core React
import { useRef, useState } from "react";

// Components
import Button from "./Button";

// Next
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

// CLSX
import clsx from "clsx";

// Types
import { Swiper as SwiperType } from "swiper/types";

export default function ProductCarousel({
  products,
}: {
  products: {
    product_name: string;
    product_price: string;
    product_thumbnail: string;
  }[];
}) {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveSlideIndex(swiperRef.current.activeIndex);
    }
  };

  return (
    <div className="mt-2 px-4 py-3 pb-4">
      <div className="flex gap-4 mb-2">
        <span className="font-bold text-sm">Better paired with</span>
        <CarouselPagination activeSlideIndex={activeSlideIndex} />
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {products.map(({ product_name, product_price, product_thumbnail }) => (
          <SwiperSlide key={product_name}>
            <div className="bg-white flex w-full">
              <Image
                className="h-auto object-cover"
                src={product_thumbnail}
                alt={`${product_name} Presentation`}
                width={85}
                height={85}
              />
              <div className="w-full p-2 flex flex-col gap-4">
                <p className="font-bold text-xs">{product_name}</p>
                <div className="flex justify-between items-center mt-1">
                  <span className="font-bold text-xs">{product_price}</span>
                  <Button intent={"primary"} className="py-1 px-2">
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function CarouselPagination({
  activeSlideIndex,
}: {
  activeSlideIndex: number;
}) {
  return (
    <div className="flex items-center gap-1 ml-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className={clsx(
            "w-[6px] h-[6px] rounded-full transition-all duration-100",
            activeSlideIndex === index ? "bg-black" : "bg-gray"
          )}
        ></div>
      ))}
    </div>
  );
}
