import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className="my-20 md:border-2 md:p-8 border-gray-300 md:w-4/5 mx-auto">
        <h2 className="uppercase text-2xl font-bellefair text-start md:text-center">
           Call this number for more info :
        </h2>
        <h2 className="uppercase text-2xl font-bellefair text-start md:text-center">
        +256 758 985249
        </h2>
       
      </section>

      <footer>
        <div className="flex items-center justify-between">
          <div className="hidden md:block">
            <h1 className="font-bold text-3xl">UGART</h1>
          </div>
          <div className="hidden md:flex gap-20 ">
            <div className="flex flex-col text-start gap-4">
              <Link to="/">Home</Link>
              <Link to="/marketplace">Marketplace</Link>
            </div>
          </div>
          <div>
            <div className="flex items-center mt-5">
              <img src={location} alt="" className="w-10" />
              <p>Uganda</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
