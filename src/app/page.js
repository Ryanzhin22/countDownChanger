import Image from "next/image";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-red-500">
      <Counter/>
    </main>
  );
}
