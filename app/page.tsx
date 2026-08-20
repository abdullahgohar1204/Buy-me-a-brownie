import Image from "next/image";
import StarthereButton from "@/components/startherebutton";
import ReadMoreButton from "@/components/readmorebutton";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center text-white min-h-[44vh] gap-3 px-4 text-center">
    <h1 className="font-bold text-3xl sm:text-5xl gap-1 flex items-center flex-wrap justify-center">
        Buy Me A Brownie
        <span>
            <img src="/assets/brownie1.gif" alt="" className="w-16 h-16 sm:w-25 sm:h-25 inline-block" />
        </span>
    </h1>
        <p className="text-sm sm:text-base">A crowed funding platform built to fund favourite creators</p>
      <div className="flex flex-col sm:flex-row gap-3.5">
        <StarthereButton />
        <ReadMoreButton />
      </div>
    </div>

      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-16">
          Fans can buy you a Brownie
        </h2>

        <div className="flex gap-8 justify-around ">
          <div className="item space-y-3 flex flex-col items-center">
            <img
              width={88}
              src="/assets/man.gif"
              alt=""
              className="bg-slate-400 rounded-full p-2 "
            />
            <p className="font-bold">Fans will help</p>
            <p className="text-center">Yous fans are available to help you </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center">
            <img
              width={88}
              src="/assets/coin.gif"
              alt=""
              className="bg-slate-400 rounded-full p-2 "
            />
            <p className="font-bold">Fans will help</p>
            <p className="text-center">Yous fans are available to help you </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center">
            <img
              width={88}
              src="/assets/group.gif"
              alt=""
              className="bg-slate-400 rounded-full p-2 "
            />
            <p className="font-bold">Fans will help</p>
            <p className="text-center">Yous fans are available to help you </p>
          </div>
        </div>
      </div>


      <div className="bg-white h-1 my-16 opacity-10"></div>
      <div className="text-white container mx-auto mb-16 mt-16 py-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          Learn More About Us
        </h2>
        <div className="flex gap-8 justify-around ">
          <div className="item space-y-3 flex flex-col items-center">
            <img
              width={88}
              src="/assets/man.gif"
              alt=""
              className="bg-slate-400 rounded-full p-2 "
            />
            <p className="font-bold">Fans will help</p>
            <p className="text-center">Yous fans are available to help you </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center">
            <img
              width={88}
              src="/assets/coin.gif"
              alt=""
              className="bg-slate-400 rounded-full p-2 "
            />
            <p className="font-bold">Fans will help</p>
            <p className="text-center">Yous fans are available to help you </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center">
            <img
              width={88}
              src="/assets/group.gif"
              alt=""
              className="bg-slate-400 rounded-full p-2 "
            />
            <p className="font-bold">Fans will help</p>
            <p className="text-center">Yous fans are available to help you </p>
          </div>
        </div>
      </div>
    </>
  );
}
