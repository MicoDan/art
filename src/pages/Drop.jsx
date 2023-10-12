import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import eyo from "../assets/Rectangle 82.png";
import ginger from "../assets/Rectangle 84.png";
import sink from "../assets/Rectangle 87.png";
import warped from "../assets/Rectangle 232.png";

export default function Drop() {
  return (
    <>
      <Navbar />

      <h2 className="mt-20 font-bold text-5xl font-abel">Upcoming Drops</h2>
      <p className="mt-5 font-abel">
        Turn on notifications so that no drops will miss you.
      </p>
      <button className="mt-10 border-2 border-black px-20 py-2 text-xl rounded-lg">
        Notify me
      </button>

      <section className="my-20">
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="relative">
            <img src={eyo} alt="" />
            <div className="bg-[#f5f4f4]/60 font-abel p-5 md:text-5xl w-96 md:w-[45rem] absolute bottom-8 left-6 md:left-20 rounded-lg">
              <p className="text-3xl md:text-4xl text-start">Time remaining</p>
              <div className="flex justify-between items-center mt-8 md:mt-10">
                <p className="text-2xl  md:text-4xl">06 hrs: 45 mins: 22s</p>
                <button className="text-base bg-blue-300 text-white rounded-full px-10 h-8 hidden md:inline-block">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="text-start">
            <button className="uppercase mb-10 bg-[#4693ed] text-white px-8 py-1 font-abel rounded-md">
              upcoming
            </button>
            <p>November 21 at 11 am WAT</p>
            <h3 className="font-medium text-4xl my-10">Eyo : Eko For Show</h3>
            <p className="w-96 my-10">
              Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
              vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
            </p>
            <p className="my-10">
              Creator :
              <span className="text-blue-600 font-semibold"> Aliya Minat</span>
            </p>
            <a href="/" className="underline text-blue-500">
              Get notified
            </a>
          </div>
        </div>

        <div className="flex gap-10 my-10 flex-col md:flex-row">
          <div className="relative">
            <img src={ginger} alt="" />
            <div className="bg-[#f5f4f4]/60 font-abel text-5xl p-5 w-96 md:w-[45rem] absolute bottom-8 left-6 md:left-20 rounded-lg">
              <p className="text-3xl md:text-4xl text-start">Time remaining</p>
              <div className="flex justify-between items-center mt-8 md:mt-10">
                <p className="text-2xl md:text-4xl">06 hrs: 45 mins: 22s</p>
                <button className="text-base bg-blue-300 text-white rounded-full px-10 h-8 hidden md:inline-block">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="text-start">
            <button className="uppercase mb-10 bg-[#3ea03b] text-white px-8 py-1 font-abel rounded-md">
              live now
            </button>
            <p>November 21 at 11 am WAT</p>
            <h3 className="font-medium text-4xl my-10">Ginger Suburbs</h3>
            <p className="w-96 my-10">
              Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
              vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
            </p>
            <p className="my-10">
              Creator :
              <span className="text-blue-600 font-semibold"> Tina Benson</span>
            </p>
            <a href="/" className="underline text-blue-500">
              Join now
            </a>
          </div>
        </div>

        <div className="flex gap-10 my-10 flex-col md:flex-row">
          <div className="relative">
            <img src={sink} alt="" />
            <div className="bg-[#f5f4f4]/60 font-abel text-5xl p-5 w-96 md:w-[45rem] absolute bottom-8 left-6 md:left-20 rounded-lg">
              <p className="text-3xl md:text-4xl text-start">Auction ended</p>
              <div className="flex justify-between items-center mt-8 md:mt-10">
                <p className="text-2xl md:text-4xl">2 hours ago</p>
                <button className="text-base bg-[#b8babc] text-white rounded-full px-10 h-8 hidden md:inline-block">
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="text-start">
            <button className="uppercase mb-10 bg-[#999ea5] text-white px-8 py-1 font-abel rounded-md">
              ended
            </button>
            <p>November 21 at 11 am WAT</p>
            <h3 className="font-medium text-4xl my-10">Sink</h3>
            <p className="w-96 my-10">
              Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
              vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
            </p>
            <p className="my-10">
              Creator :
              <span className="text-blue-600 font-semibold"> Aliya Minat</span>
            </p>
            <a href="/" className="underline text-blue-500">
              View
            </a>
          </div>
        </div>

        <div className="flex gap-10 my-10 flex-col md:flex-row">
          <div className="relative">
            <img src={warped} alt="" />
            <div className="bg-[#f5f4f4]/60 font-abel text-5xl p-5 w-96 md:w-[45rem] absolute bottom-8 left-6 md:left-20 rounded-lg">
              <p className="text-3xl md:text-4xl text-start">Auction ended</p>
              <div className="flex justify-between items-center mt-8 md:mt-10">
                <p className="text-2xl md:text-4xl">5 hours ago</p>
                <button className="text-base bg-[#b8babc] text-white rounded-full px-10 h-8 hidden md:inline-block">
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="text-start">
            <button className="uppercase mb-10 bg-[#999ea5] text-white px-8 py-1 font-abel rounded-md">
              ended
            </button>
            <p>November 21 at 11 am WAT</p>
            <h3 className="font-medium text-4xl my-10">Warped ‘99</h3>
            <p className="w-96 my-10">
              Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
              vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
            </p>
            <p className="my-10">
              Creator :
              <span className="text-blue-600 font-semibold"> Aliya Minat</span>
            </p>
            <a href="/" className="underline text-blue-500">
              View
            </a>
          </div>
        </div>
      </section>

      <button className="mt-10 border-2 hidden md:inline-block border-black px-20 py-2 text-xl rounded-lg">
        See more
      </button>

      <section className="hidden md:block">
        <Footer />
      </section>
    </>
  );
}
