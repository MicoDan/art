import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import one from '../assets/one.png';
import two from "../assets/two.png";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";
import six from "../assets/six.jpg";
import seven from "../assets/seven.jpg";
import eight from "../assets/eight.jpg";
import nine from "../assets/nine.png";
import un from '../assets/un.jpg'
import deux from '../assets/deux.jpg'
import trois from '../assets/trois.jpg'
import quatre from '../assets/quatre.jpg'
import cinq from '../assets/cinq.jpg'
import sept from '../assets/sept.jpg'

export default function Marketplace() {

  const [blurImages, setBlurImages] = useState(false);

  // useEffect to start a timer and blur images after 1 minute
  useEffect(() => {
    const timer = setTimeout(() => {
      setBlurImages(true);
    }, 300000); 

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <>
      <Navbar />

      <section className="my-10"></section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {[one, two, three, four, five, six, seven, eight, nine, un, deux, trois, quatre, cinq, sept].map((image, index) => (
          <div key={index} className="bg-white shadow-2xl rounded-md p-4">
            <img
              src={image}
              alt={`item-${index}`}
              className={`w-full h-[300px] object-cover rounded-md transition-all duration-500 ${
                blurImages ? 'blur-md' : ''
              }`} // Apply blur when blurImages is true
            />
            <p className="mt-4 text-center">Contact: +256 758 985249</p>
          </div>
        ))}
      </section>

      <section className="md:hidden">
        {[one, two, three].map((image, index) => (
          <div key={index} className="my-10">
            <img
              src={image}
              alt={`mobile-item-${index}`}
              className={`transition-all duration-500 ${
                blurImages ? 'blur-md' : ''
              }`} 
            />
            <div className="flex items-center justify-between mt-1">
              <p className="uppercase">Contact: +256 758 985249</p>
              <p>$21.00</p>
            </div>
          </div>
        ))}

        <Footer />
      </section>
    </>
  );
}
