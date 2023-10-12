import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import search from "../assets/Search-icon.svg";
import filter from "../assets/Frame 34.svg";
import down from "../assets/Frame 37.svg";
import up from "../assets/Frame 6.svg";
import one from "../assets/Rectangle 251.png";
import two from "../assets/Rectangle 299.png";
import three from "../assets/Rectangle 49.png";
import four from "../assets/Rectangle 53.png";
import five from "../assets/Rectangle 54.png";
import six from "../assets/Rectangle 50.png";
import seven from "../assets/Rectangle 48.png";
import eight from "../assets/Rectangle 52.png";
import nine from "../assets/Rectangle 55.png";
import ten from "../assets/Rectangle 65.png";
import eleven from "../assets/Rectangle 66.png";
import twelve from "../assets/image2.png";
import mobileOne from "../assets/Rectangle 308.png";
import mobileTwo from "../assets/Rectangle 62.png";
import mobileThree from "../assets/Rectangle 62b.png";
import mobileFour from "../assets/Rectangle 62c.png";
import mobileFive from "../assets/Rectangle 62d.png";
import direction from "../assets/Group 502.svg";
import { Link } from "react-router-dom";

export default function Marketplace() {
  const [appear, setAppear] = useState(false);
  const [price, setPrice] = useState(false);
  const [artist, setArtist] = useState(false);

  const handleClick = () => setAppear(!appear);
  const handleClickPrice = () => setPrice(!price);
  const handleClickArtist = () => setArtist(!artist);

  return (
    <>
      <Navbar />

      <section className="my-10 flex items-center justify-between">
        <div className="hidden md:flex items-center relative">
          <img src={search} alt="" className="w-6 absolute top-2 left-1" />
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-300 rounded-md p-2 pl-10 w-40"
          />
        </div>

        <div className="hidden md:flex justify-between items-center w-[60rem] rounded-md p-2 border-[1px]  shadow-2xl">
          <p>See 1-6 of 15 results</p>
          <select
            name="sort"
            id="sort"
            aria-placeholder="Sort by..."
            className="border-[1px] border-gray-500 p-2 px-4"
          >
            <option value="sort">Sort by</option>
          </select>
        </div>
      </section>

      <section className="flex justify-between">
        <div className="w-44 hidden md:block">
          <div className="flex items-center gap-2">
            <img src={filter} alt="" className="w-10" />
            <p className="font-bold text-2xl font-abel">Filter</p>
          </div>
          <hr className="my-10" />
          <div className="flex items-center font-abel justify-between">
            <p>By category</p>
            <div onClick={handleClick}>
              {appear ? (
                <img src={up} alt="" className="w-8" />
              ) : (
                <img src={down} alt="" className="w-8" />
              )}
            </div>
          </div>
          <div className={appear ? "mt-8" : "mt-8 hidden"}>
            <div className="flex items-center gap-3 my-1">
              <input type="checkbox" name="" id="editorial" />
              <p className="font-abel text-lg">Editorials</p>
            </div>
            <div className="flex items-center gap-3 my-1">
              <input type="checkbox" name="" id="fashion" />
              <p className="font-abel text-lg">Fashion</p>
            </div>
            <div className="flex items-center gap-3 my-1">
              <input type="checkbox" name="" id="optics" />
              <p className="font-abel text-lg">Optics</p>
            </div>
            <div className="flex items-center gap-3 my-1">
              <input type="checkbox" name="" id="arts" />
              <p className="font-abel text-lg">Arts & Museum</p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" name="" id="nature" />
              <p className="font-abel text-lg">Nature</p>
            </div>
          </div>
          <div className="flex font-abel items-center justify-between mt-10">
            <p>By price</p>
            <div onClick={handleClickPrice}>
              {price ? (
                <img src={up} alt="" className="w-8" />
              ) : (
                <img src={down} alt="" className="w-8" />
              )}
            </div>
          </div>
          <div
            className={price ? "mt-5 flex flex-col items-start" : "mt-5 hidden"}
          >
            <p className="text-xl font-bellefair">$100.00 - $150.00</p>
            <input
              type="range"
              name=""
              id="price"
              className="h-1 mt-2 bg-gray-300 rounded-full appearance-none"
            />
          </div>
          <div className="flex font-abel items-center justify-between mt-10">
            <p>By artist</p>
            <div onClick={handleClickArtist}>
              {artist ? (
                <img src={up} alt="" className="w-8" />
              ) : (
                <img src={down} alt="" className="w-8" />
              )}
            </div>
          </div>
          <div
            className={
              artist
                ? "flex flex-col items-start mt-5 gap-2"
                : "hidden flex-col items-start mt-5 gap-2"
            }
          >
            <p>All</p>
            <p>Below $100</p>
            <p>$100.00 - $150.00</p>
            <p>$160.00 - $200.00</p>
            <p>Above $200.00</p>
          </div>

          <div className="flex items-center mt-5 justify-between">
            <p>Collection year</p>
            <img src={down} alt="" className="w-8" />
          </div>
        </div>
        <div className="hidden md:flex items-center flex-wrap w-[60rem] gap-12">
          <div className="text-start bg-white shadow-2xl p-1 rounded-md">
            <img src={one} alt="" className="w-48 h-48" />
            <p className="mb-2">PHILOMENA ‘22</p>
            <p className="font-bold font-abel">$3.90</p>
          </div>
          <Link to="/boolean">
            <div className="text-start bg-white shadow-2xl p-1 rounded-md">
              <img src={two} alt="" className="w-48 h-48" />
              <p className="mb-2">BOOLEAN EGYPTIAN</p>
              <p className="font-bold font-abel">$3.90</p>
            </div>
          </Link>
          <div className="text-start bg-white shadow-2xl p-1 rounded-md">
            <img src={three} alt="" className="w-48 h-48" />
            <p className="mb-2">BLANC</p>
            <p className="font-bold font-abel">$3.90</p>
          </div>
          <div className="text-start bg-white shadow-2xl p-1 rounded-md">
            <img src={four} alt="" className="w-48 h-48" />
            <p className="mb-2">ELLIPSIA</p>
            <p className="font-bold font-abel">$3.90</p>
          </div>
          <div className="text-start bg-white shadow-2xl p-1 rounded-md">
            <img src={five} alt="" className="w-48 h-48" />
            <p className="mb-2">THE LAWMAKERS</p>
            <p className="font-bold font-abel">$3.90</p>
          </div>
          <div className="text-start bg-white shadow-2xl p-1 rounded-md">
            <img src={six} alt="" className="w-48 h-48" />
            <p className="mb-2">VIEL</p>
            <p className="font-bold font-abel">$3.90</p>
          </div>
          <div className="text-start bg-white shadow-2xl p-1 rounded-md">
            <img src={seven} alt="" className="w-48 h-48" />
            <p className="mb-2">ALTERNATING</p>
            <p className="font-bold font-abel">$3.90</p>
          </div>
          <div className="text-start bg-white shadow-2xl p-1 rounded-md">
            <img src={eight} alt="" className="w-48 h-48" />
            <p className="mb-2">ROSEMARY ‘22</p>
            <p className="font-bold font-abel">$3.90</p>
          </div>
          <div className="text-start bg-white shadow-2xl p-1 rounded-md">
            <img src={nine} alt="" className="w-48 h-48" />
            <p className="mb-2">BEVERLY</p>
            <p className="font-bold font-abel">$3.90</p>
          </div>
          <div className="text-start bg-white shadow-2xl p-1 rounded-md">
            <img src={ten} alt="" className="w-48 h-48" />
            <p className="mb-2">SASSY</p>
            <p className="font-bold font-abel">$3.90</p>
          </div>
          <div className="text-start bg-white shadow-2xl p-1 rounded-md">
            <img src={eleven} alt="" className="w-48 h-48" />
            <p className="mb-2">ESCAPE</p>
            <p className="font-bold font-abel">$3.90</p>
          </div>
          <div className="text-start bg-white shadow-2xl p-1 rounded-md">
            <img src={twelve} alt="" className="w-48 h-48" />
            <p className="mb-2">WILD</p>
            <p className="font-bold font-abel">$3.90</p>
          </div>
        </div>
      </section>

      <section className="md:hidden">
        <div className="flex items-center justify-between shadow-2xl border-[1px] rounded-lg mb-10 p-2">
          <div className="flex items-center font-abel">
            <p>Filters</p>
            <img src={down} alt="" className="w-6" />
          </div>
          <div className="flex items-center font-abel">
            <p>Sort by</p>
            <img src={down} alt="" className="w-6" />
          </div>
        </div>
        <div>
          <img src={mobileOne} alt="" />
          <div className="flex items-center justify-between mt-1">
            <p className="uppercase">Boolean Egyptian</p>
            <p>$21.00</p>
          </div>
        </div>
        <div className="my-10">
          <img src={mobileTwo} alt="" />
          <div className="flex items-center justify-between mt-1">
            <p className="uppercase">Road to Egypt</p>
            <p>$11.00</p>
          </div>
        </div>
        <div className="my-10">
          <img src={mobileThree} alt="" />
          <div className="flex items-center justify-between mt-1">
            <p className="uppercase">Blanc</p>
            <p>$11.00</p>
          </div>
        </div>
        <div className="my-10">
          <img src={mobileFour} alt="" />
          <div className="flex items-center justify-between mt-1">
            <p className="uppercase">Ellipsia</p>
            <p>$11.00</p>
          </div>
        </div>
        <div className="my-10">
          <img src={mobileFive} alt="" />
          <div className="flex items-center justify-between mt-1">
            <p className="uppercase">The Lawmaker</p>
            <p>$11.00</p>
          </div>
        </div>

        <div className="flex items-center gap-2 justify-end">
          <p className="text-3xl font-abel">Load More</p>
          <img src={direction} alt="" className="w-16" />
        </div>

        <Footer />
      </section>
    </>
  );
}
