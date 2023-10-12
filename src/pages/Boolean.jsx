import Navbar from "../components/Navbar";
import boolean from "../assets/Rectangle 300.png";
import eth from "../assets/Frame 29.svg";
import add from "../assets/Group 484.svg";
import like from "../assets/Group 483.svg";
import down from "../assets/Frame 37.svg";
import left from "../assets/Frame 21.svg";
import right from "../assets/Frame 22.svg";
import ten from "../assets/Rectangle 65.png";
import eleven from "../assets/Rectangle 66.png";
import love from "../assets/Frame 36.svg";
import law from "../assets/Rectangle 62d.png";

export default function Boolean() {
  return (
    <>
      <Navbar />

      <section className="mt-20 md:border-2 md:border-black flex flex-col md:flex-row">
        <div className="p-10">
          <img src={boolean} alt="" className="md:h-[53rem]" />
          <div className="flex md:hidden justify-between items-center mt-2">
            <p className="text-xl">PHILOMENA ‘22</p>
            <p>$21.00</p>
          </div>
        </div>
        <div className="w-[2px] bg-black hidden md:block"></div>
        <div className="flex-grow">
          <div className="p-10 hidden md:flex justify-between items-center w-[45rem]">
            <h2 className="text-5xl font-abel font-semibold">
              Boolean Egyptian
            </h2>
            <div className="flex items-center">
              <img src={eth} alt="" />
              <p className="text-4xl font-medium">0.09</p>
            </div>
          </div>
          <div className="h-[1px] bg-black hidden md:block"></div>

          <div className="mt-2 text-start p-10">
            <p className="text-4xl font-abel">
              Creator: <span className="text-blue-500">Ali Dawa</span>
            </p>
            <p className="text-3xl font-abel my-8">Made in Italy</p>
            <p className="text-2xl font-abel my-8 font-bold">
              Total Views: <span className="font-normal">1.7k views</span>
            </p>
            <img src={add} alt="" className="my-8" />
            <div className="mt-4 flex items-center gap-4">
              <button className="border-2 border-black p-5 px-16 bg-[#272727] text-white">
                Add to cart
              </button>
              <img src={like} alt="" className="h-16" />
            </div>
          </div>

          <div className="h-[1px] bg-black"></div>

          <div className="md:p-10 my-5 md:my-0 flex items-center justify-between">
            <p className="text-start font-bold font-abel text-3xl">
              Description
            </p>
            <img src={down} alt="" />
          </div>
          <div className="h-[1px] bg-black"></div>
          <div className="md:p-10 my-5 md:my-0 flex items-center justify-between">
            <p className="text-start font-bold font-abel text-3xl">Listings</p>
            <img src={down} alt="" />
          </div>
          <div className="h-[1px] bg-black"></div>
          <div className="md:p-10 my-5 md:my-0 flex items-center justify-between">
            <p className="text-start font-bold font-abel text-3xl">Status</p>
            <img src={down} alt="" />
          </div>
          <div className="h-[1px] bg-black md:hidden"></div>
        </div>
      </section>

      <p className="md:hidden text-start text-3xl mt-20 font-abel">
        More from this collection
      </p>

      <div className="hidden md:flex justify-between items-center mt-10 shadow-2xl p-4 border-2 border-gray-100 rounded-md">
        <p className="text-2xl font-abel font-bold">
          Explore more from this collection
        </p>
        <div className="flex items-center gap-4">
          <img
            src={left}
            alt=""
            className="border-2 border-gray-500 rounded-full p-1 w-14"
          />
          <img
            src={right}
            alt=""
            className="border-2 border-gray-500 rounded-full p-1 w-14"
          />
        </div>
      </div>

      <section className="md:mt-20 mt-10 flex items-center gap-10">
        <div className="border-2 border-black p-10 flex flex-col">
          <div className="self-end mb-2">
            <img src={love} alt="" className="" />
          </div>
          <img src={ten} alt="" className="w-96 h-96" />
          <div className="flex items-center justify-between">
            <p className="text-3xl font-abel">Sassy</p>
            <div className="flex items-center">
              <img src={eth} alt="" />
              <p className="text-3xl">3.20</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-black p-10 md:flex flex-col hidden">
          <div className="self-end mb-2">
            <img src={love} alt="" className="" />
          </div>
          <img src={eleven} alt="" className="w-96 h-96" />
          <div className="flex items-center justify-between">
            <p className="text-3xl">Escape</p>
            <div className="flex items-center">
              <img src={eth} alt="" />
              <p className="text-3xl">0.03</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-black p-10 hidden md:flex flex-col">
          <div className="self-end mb-2">
            <img src={love} alt="" className="" />
          </div>
          <img src={law} alt="" className="w-96 h-96" />
          <div className="flex items-center justify-between">
            <p className="text-3xl">The Lawmaker</p>
            <div className="flex items-center">
              <img src={eth} alt="" />
              <p className="text-3xl">2.30</p>
            </div>
          </div>
        </div>
      </section>

      <button className="mt-20 p-4 px-12 border-2 text-2xl hidden md:inline-block font-abel border-black rounded-md">
        Explore all
      </button>
    </>
  );
}
