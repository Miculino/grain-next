import clsx from "clsx";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-6xl flex mx-auto gap-2 px-3", className)}>
      {children}
    </div>
  );
}
