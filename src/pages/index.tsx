import Link from "next/link";
import Chart from "../components/Chart";

export default function Home() {
  return (
    <div>
      Hello World. <Link href="/about">About</Link>
      <Chart />
    </div>
  );
}
