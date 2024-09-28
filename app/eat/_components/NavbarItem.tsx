import Link from "next/link";

export default function NavbarItem({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="py-5 inline-block text-sm font-bold" href={url}>
      {children}
    </Link>
  );
}
