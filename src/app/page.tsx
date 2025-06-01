import Image from "next/image";
import cat from "../../public/image.png";

function Card() {
  return (
    <div className="border border-border rounded-2xl">
      <Image className="w-[330px]" src={cat} alt="cat says hi" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <Card />
    </main>
  );
}
