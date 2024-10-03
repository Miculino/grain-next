import { redirect } from "next/navigation";

export default function Home() {
  redirect("/eat");
  return <p>Test</p>;
}
