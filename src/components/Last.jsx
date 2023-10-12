import { Link } from "react-router-dom";
import direction from "../assets/Group 502.svg";
import bg from "../assets/Rectangle 298.svg";
import pro from "../assets/Top Creators Animation.svg";

export default function Last() {
  return (
    <>
      <section className="my-32">
        <hr />
        <div className="flex items-center justify-between my-10">
          <h2 className="text-4xl">Explore Marketplace</h2>
          <Link to="/marketplace">
            <img src={direction} alt="" className="w-10" />
          </Link>
        </div>
        <hr />
        <div className="flex items-center justify-between my-10">
          <h2 className="text-4xl">See auctions</h2>
          <Link to="/auctions">
            <img src={direction} alt="" className="w-10" />
          </Link>
        </div>
        <hr />
      </section>

      <section
        style={{ backgroundImage: `url('${bg}')` }}
        className="p-8 md:p-32 relative"
      >
        <div className="text-start">
          <h2 className="font-semibold text-2xl md:text-5xl uppercase font-abel w-96">
            top creators of the week
          </h2>
          <p className="md:w-[40rem] mt-5 text-black/50">
            “Everything always looked better in black and white. Everything
            always as if it were the first time; there’s always more people in a
            black and white photograph. It just makes it seem that there were
            more people at a gig, more people at a football match, than with
            colour photography. Everything looks more exciting.”– Jack Lowden
          </p>
        </div>
        <img
          src={pro}
          alt=""
          className="md:w-96 md:h-96 w-48 h-48 absolute top-28 left-32 md:left-[30rem]"
        />
      </section>
    </>
  );
}
