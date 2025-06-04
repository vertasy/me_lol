"use client";
import Image from "next/image";
import cat from "../../public/image.png";
import { useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

function Card() {
  const [visitorId, setVisitorId] = useState<string | null>(null);

  useEffect(() => {
    async function getFingerprint() {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      setVisitorId(result.visitorId);
    }
    getFingerprint();
  }, []);

  return (
    <div className="border border-border rounded-2xl p-4 flex flex-col items-center">
      <Image className="w-[330px]" src={cat} alt="cat says hi" />
      <p className="mt-4 text-center break-words text-white">
        <strong>Visitor ID:</strong> {visitorId ?? "Loading..."}
      </p>
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
