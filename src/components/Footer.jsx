import { Link } from "react-router-dom";
import mail from "../assets/Mail.svg";
import location from "../assets/Location.svg";

export default function Footer() {
  return (
    <>
      <section className="my-20 md:border-2 md:p-8 border-gray-300 md:w-4/5 mx-auto">
        <h2 className="uppercase text-2xl font-bellefair text-start md:text-center">
          newsletter
        </h2>
        <p className="font-abel text-start md:text-center">
          Subscribe to get daily updates on new drops & exciting deals
        </p>
        <form
          action="post"
          className="my-5 flex flex-col md:block items-start gap-2"
        >
          <input
            type="email"
            name="email"
            id="email"
            className="border-2 border-gray-300 p-2 w-96"
            placeholder="Enter your email"
          />
          <button className="ml-2 bg-black uppercase text-white p-2 px-4 w-3/5 md:w-fit items-start">
            Subscribe
          </button>
        </form>
      </section>

      <footer>
        <div className="flex items-center justify-between">
          <div className="hidden md:block">
            <h1 className="font-bold text-3xl">ARTSY.</h1>
          </div>
          <div className="hidden md:flex gap-20 ">
            <div className="flex flex-col text-start gap-4">
              <Link to="/">Home</Link>
              <Link to="/marketplace">Marketplace</Link>
              <Link to="/options">Options</Link>
              <Link to="/drop">Drop</Link>
            </div>
            <div className="flex flex-col text-start gap-4">
              <Link to="/blog">Blog</Link>
              <Link to="/wallets">Wallets</Link>
              <Link to="/rates">Rates</Link>
              <Link to="/high-bids">High Bids</Link>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <img src={mail} alt="" className="w-10" />
              <p>artsystudios@gmail.com</p>
            </div>
            <div className="flex items-center mt-5">
              <img src={location} alt="" className="w-10" />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <div className="mt-10 hidden md:block">
          <p>Artsystudios © 2022. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
