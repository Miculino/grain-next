import clsx from "clsx";
export default function ProductInfo({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2 py-4 border-b-[1px] border-b-light-gray",
        className
      )}
    >
      <span className="font-bold text-xs text-dark-gray">{title}</span>

      <div className="text-sm">{children}</div>
    </div>
  );
}
