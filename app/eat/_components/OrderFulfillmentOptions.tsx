import Chevron from "../icons/Chevron";
import OrderNavigation from "./OrderNavigation";

export default function OrderFulfillmentOptions() {
  return (
    <div className="bg-[#EAE6E1] px-4 py-4">
      <div className="flex gap-1 flex-col">
        <p className="mb-1 text-sm">Ready to rock and roll!</p>
        <div className="w-full h-1 rounded-md bg-green-600"></div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm">Pick up from Food Point</p>
          <span className="text-sm">FREE</span>
        </div>
        {/* <div className="flex items-center gap-1 mt-1 cursor-pointer">
          <p className="text-xs text-[#4d4d4d]">Or get door-to-door delivery</p>
          <Chevron />
        </div> */}
        <OrderNavigation
          text="Or get door-to-door delivery"
          small
          isDropdownOpen={false}
        />
      </div>
    </div>
  );
}
