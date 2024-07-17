import Image from "next/image";
import { Artists } from "./Artists";
import Intro from "./Intro";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 lg:p-10">
      <div className="bg-white py-24 max-w-7xl  pt-8 lg:pt-8">
        <Intro/>
        <Artists />
      </div>
      
    </main>
  );
}


