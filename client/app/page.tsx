import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 h-screen w-screen">
        <div className="col-span-3">1</div>
        <div className="col-span-6">2</div>
        <div className="col-span-3">3</div>
      </div>
    </>
  );
}
