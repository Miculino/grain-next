// Components
import Button from "./Button";
import ProgressBar from "./ProgressBar";

export default function BundleCreationProgress({ price }: { price: number }) {
  return (
    <div className="absolute bottom-0 w-full p-4  bg-white drop-shadow-md border-t border-t-light-gray flex flex-col gap-2">
      <p className="text-sm">Add 9 more items to complete your bundle</p>
      <ProgressBar />
      <div className="flex justify-between items-center">
        <span className="font-bold">${price.toFixed(2)}</span>
        <Button className="py-1 px-10" disabled intent={"disabled"}>
          Add
        </Button>
      </div>
    </div>
  );
}
