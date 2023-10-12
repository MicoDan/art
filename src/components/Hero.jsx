import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import product from "../assets/Featured product.png";
import product2 from "../assets/Featured product 2.png";
import product3 from "../assets/Featured product 3.png";
import ellipse1 from "../assets/Ellipse 14.svg";
import ellipse2 from "../assets/Ellipse 15.svg";
import ellipse3 from "../assets/Ellipse 16.svg";
import ellipse4 from "../assets/Ellipse 17.svg";
import ellipse5 from "../assets/Ellipse 18.svg";
import direction from "../assets/Group 502.svg";
import ninety from "../assets/Rectangle 90.png";
import ninetyOne from "../assets/Rectangle 91.png";
import dot from "../assets/Ellipse 6.svg";
import { Link } from "react-router-dom";
import variant from "../assets/Variant6.svg";
import component from "../assets/Component 13.png";

const images = [ellipse1, ellipse2, ellipse3, ellipse4, ellipse5];
const screen = [image1, image2, image4, image5];

export default function Hero() {
  return (
    <>
      <section className="mt-10">
        <h1 className="text-5xl font-abel md:w-[50rem] mx-auto">
          Photography is poetry & beautiful untold stories
        </h1>
        <p className="mt-12 md:w-[32rem] mx-auto">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
        <div className="md:hidden">
          <img src={component} alt="" />
        </div>
        <div className="hidden md:flex items-center  gap-4 justify-center mt-16">
          {screen.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="w-96 h-96"
            />
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-start font-abel text-4xl my-10">
          Featured Products
        </h2>
        <hr />
        <div className="flex justify-between items-center flex-col md:flex-row relative md:static">
          <div className="my-10">
            <img src={product} alt="woman near a window" />
          </div>
          <div>
            <h3 className="text-start text-3xl my-10 absolute md:static top-6 text-white md:text-black font-bold">
              The Boolean Egyptian
            </h3>
            <p className="text-start w-96 mb-5 md:my-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index}`}
                      className="w-8 relative -ml-3"
                    />
                  ))}
                </div>
                <p>64 major creators</p>
              </div>
              <img src={direction} alt="" className="w-10 hidden md:block" />
              <img
                src={variant}
                alt=""
                className="md:hidden absolute top-32 left-80 w-20"
              />
            </div>
          </div>
        </div>

        <div className="w-64 bg-gray-300 h-[1px] mt-2 md:hidden"></div>
        <hr className="hidden md:block" />

        <div className="flex items-center flex-col-reverse relative md:static md:flex-row justify-between">
          <div>
            <h3 className="text-start text-3xl my-10 absolute md:static top-8 text-white md:text-black font-bold">
              Are We There Yet?
            </h3>
            <p className="text-start w-96 mb-5 md:my-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index}`}
                      className="w-8 relative -ml-3"
                    />
                  ))}
                </div>
                <p>64 major creators</p>
              </div>
              <img src={direction} alt="" className="w-10 hidden md:block" />
              <img
                src={variant}
                alt=""
                className="md:hidden absolute top-28 right-8 shadow-black"
              />
            </div>
          </div>
          <div className="my-10">
            <img src={product2} alt="ancient egyptian god" />
          </div>
        </div>

        <div className="w-64 bg-gray-300 h-[1px] mt-2 md:hidden"></div>
        <hr className="hidden md:block" />

        <div className="flex items-center flex-col md:flex-row justify-between relative md:static">
          <div className="my-10">
            <img src={product3} alt="ancient egyptian god" />
          </div>
          <div>
            <h3 className="text-start text-3xl my-10 absolute md:static top-8 right-28 font-bold text-white md:text-black">
              Oloibiri 1997
            </h3>
            <p className="text-start w-96 md:my-10 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index}`}
                      className="w-8 relative -ml-3"
                    />
                  ))}
                </div>
                <p>64 major creators</p>
              </div>
              <img src={direction} alt="" className="w-10" />
            </div>
          </div>
        </div>
        <div className="w-64 bg-gray-300 h-[1px] mt-2 md:hidden"></div>
      </section>

      <section
        style={{ backgroundImage: `url('${ninety}')` }}
        className="p-4 md:p-10"
      >
        <h2 className="text-white font-abel text-start text-5xl mb-5 hidden md:block">
          See Upcoming Auction and Exhibitions
        </h2>
        <div className="w-[43.5rem] bg-white h-[1px] hidden md:block "></div>
        <div className="md:mt-5 relative">
          <img src={ninetyOne} alt="" />

          <div className="flex flex-col md:flex-row items-end justify-between absolute top-1 md:top-0 bottom-6 md:w-full p-4">
            <div className="flex items-center gap-2">
              <div className="font-bellefair text-3xl md:text-6xl text-white">
                01
              </div>
              <div className="text-start text-white">
                <div className="flex items-center text-white">
                  <img src={dot} alt="" className="w-3 h-3 md:h-5 md:w-5" />
                  <h3 className="text-md md:text-xl font-bellefair  md:mb-0">
                    MONALISA REDEFINED IN STYLE.
                  </h3>
                </div>
                <p>Start on : 08:00 GTS . Monday </p>
                <p className="md:w-[30rem] text-xs mt-2 md:mt-0 md:text-base">
                  GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                  INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                  HIGHEST AND LOWEST BIDS.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white mt-2 md:mt-0">
              <Link className="underline">See More</Link>
              <button className="border-2 border-white p-2 rounded-lg">
                Set Reminder
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
