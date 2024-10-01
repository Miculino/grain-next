// CLSX
import clsx from "clsx";

export default function ProductInfo({
  title,
  children,
  className,
  border = "border-b-[1px]",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  border?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2 py-4  border-b-light-gray",
        border,
        className
      )}
    >
      <span className="font-bold text-xs text-dark-gray">{title}</span>

      <div className="text-sm">{children}</div>
    </div>
  );
}
