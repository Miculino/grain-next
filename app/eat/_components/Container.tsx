export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl flex mx-auto gap-2 py-4 h-screen">{children}</div>
  );
}
