export default function Tag({
  children,
  color = "#999",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div
      className={`border-[1px] border-[${color}] rounded-sm w-fit p-1 text-xs text-[${color}]`}
    >
      {children}
    </div>
  );
}
