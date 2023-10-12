import Navbar from "../components/Navbar";
import pic from "../assets/Rectangle 247.png";
import pic2 from "../assets/Rectangle 245.png";
import pic3 from "../assets/Rectangle 246.png";
import group from "../assets/Group 482.svg";
import out from "../assets/Rectangle 57.png";
import under from "../assets/Rectangle 58.png";

export default function Auctions() {
  return (
    <>
      <Navbar />

      <p className="text-2xl text-start mt-10">
        Here’s an overview of products actively on auction, explore!
      </p>

      <div className="flex">
        <div className="relative">
          <img src={pic} alt="" />
          <img src={group} alt="" className="absolute bottom-8 left-6" />
        </div>

        <div className="relative">
          <img src={pic2} alt="" />
          <img src={group} alt="" className="absolute bottom-8 left-6" />
        </div>

        <div className="md:relative hidden md:block">
          <img src={pic3} alt="" />
          <img src={group} alt="" className="absolute bottom-8 left-6" />
        </div>
      </div>

      <p className="font-bold text-4xl font-abel text-start mt-10">
        Top bids from popular creators
      </p>

      <section className="mt-20 flex justify-between flex-col md:flex-row">
        <div className="w-96 text-start font-abel">
          <div className="my-10 border-2 border-[#f6f4f4] shadow-xl p-10 px-0">
            <img src={out} alt="" className="w-96" />
          </div>
          <p className="mt-2">
            Creator :<span className="font-semibold text-xl">Dan Murray</span>
          </p>
          <p className="mt-2">
            Date : <span className="font-semibold text-xl">12/08/22</span>
          </p>
          <p className="mt-2 hidden md:block">
            Highest Bid : <span className="font-semibold text-xl">0.57eth</span>
          </p>
          <div className="flex gap-10 bg-[#f6f4f4] mt-2 p-2 md:w-fit rounded-md justify-between">
            <div>
              <p>Current bid</p>
              <p className="font-semibold mt-4">0.987eth</p>
            </div>
            <button className="border-2 border-black h-10 my-auto md:h-auto md:my-0 md:px-10 px-16 py-1 bg-[#272727] text-white">
              Place bid
            </button>
          </div>
        </div>

        <div className="w-96 text-start font-abel">
          <div className="my-10 border-2 border-[#f6f4f4] shadow-xl p-10 px-0">
            <img src={under} alt="" className="w-96" />
          </div>
          <p className="mt-2">
            Creator :<span className="font-semibold text-xl">Jacob Banks</span>
          </p>
          <p className="mt-2">
            Date : <span className="font-semibold text-xl">12/08/22</span>
          </p>
          <p className="mt-2 hidden md:block">
            Highest Bid : <span className="font-semibold text-xl">0.34eth</span>
          </p>
          <div className="flex gap-10 bg-[#f6f4f4] mt-2 p-2  md:w-fit justify-between rounded-md">
            <div>
              <p>Current bid</p>
              <p className="font-semibold mt-4">0.99eth</p>
            </div>
            <button className="border-2 border-black px-16 h-10 my-auto md:h-auto md:my-0 md:px-10 py-1 bg-[#272727] text-white">
              Place bid
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
