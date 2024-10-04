import { useEffect, useState } from "react";
import image1 from "../assets/seven.jpg";
import image2 from "../assets/eighteen.png";
import image4 from "../assets/ten.png";
import product from "../assets/one.png";
import product2 from "../assets/three.jpg";
import product3 from "../assets/fifteen.jpg";

const screen = [image1, image2, image4];

export default function Hero() {
  const [blurImages, setBlurImages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlurImages(true);
    }, 300000);

    return () => clearTimeout(timer);
  }, []);

  const imageClass = "w-full md:w-80 h-80 object-cover transition-all duration-500"; // Responsive width for images

  return (
    <>
      <section className="mt-10">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-abel md:w-[50rem] mx-auto text-center">
          Art is not a mirror held up to reality, but a hammer with which to
          shape it
        </h1>
        {/* Subtext */}
        <p className="mt-4 md:mt-12 text-lg md:text-xl md:w-[40rem] mx-auto text-center">
          Explore a vast collection of over 20 vintage artworks, classic
          paintings, and historical masterpieces all in one place. Browse
          through timeless pieces, and experience the rich history of art.
        </p>

        {/* Image Section */}
        <div className="hidden md:flex items-center gap-6 justify-center mt-8 md:mt-16">
          {screen.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className={`${imageClass} ${blurImages ? "blur-md" : ""}`} // Apply blur when blurImages is true
            />
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-start font-abel text-3xl md:text-4xl my-6 md:my-10">
          Featured Products
        </h2>
        <hr />

        {/* Product 1 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:flex-nowrap relative md:static">
          <div className="flex-grow md:w-auto md:max-w-[50%]">
            <h3 className="text-start text-2xl md:text-3xl mb-4 text-black font-bold">
              Radiance of the Forest
            </h3>
            <p className="text-start text-base md:text-lg mb-5">
              This piece captures the ethereal beauty of a forest illuminated by
              radiant sunlight, breaking through the trees and casting long
              shadows. The bright, glowing light in the center symbolizes hope
              or enlightenment, with the natural environment surrounding it in a
              serene yet vibrant atmosphere.
            </p>
          </div>
          <div className="my-10">
            <img
              src={product}
              alt="woman near a window"
              className={`${imageClass} ${blurImages ? "blur-md" : ""}`} // Apply blur and standard size
            />
          </div>
        </div>

        <div className="w-64 bg-gray-300 h-[1px] mt-2 md:hidden"></div>
        <hr className="hidden md:block" />

        {/* Product 2 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:flex-nowrap relative md:static">
          <div className="flex-grow md:w-auto md:max-w-[50%]">
            <h3 className="text-start text-2xl md:text-3xl mb-4 text-black font-bold">
              Elegance in Motion
            </h3>
            <p className="text-start text-base md:text-lg mb-5">
              The artwork presents a poised and graceful figure adorned with
              pearls, draped in a striking blue fabric. The pose and flowing
              lines create a sense of movement and empowerment, with the pearls
              adding an element of sophistication. It portrays both strength and
              beauty in a dynamic fashion.
            </p>
          </div>
          <div className="my-10">
            <img
              src={product2}
              alt="elegant figure"
              className={`${imageClass} ${blurImages ? "blur-md" : ""}`} // Apply blur and standard size
            />
          </div>
        </div>

        <div className="w-64 bg-gray-300 h-[1px] mt-2 md:hidden"></div>
        <hr className="hidden md:block" />

        {/* Product 3 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:flex-nowrap relative md:static">
          <div className="flex-grow md:w-auto md:max-w-[50%]">
            <h3 className="text-start text-2xl md:text-3xl mb-4 text-black font-bold">
              Over the Horizon
            </h3>
            <p className="text-start text-base md:text-lg mb-5">
              The contrasting shades of yellow, red, and green symbolize the
              vibrant energy of life and freedom. The simple yet expressive
              silhouettes evoke a sense of culture, unity, and celebration of
              nature and hope over the horizon.
            </p>
          </div>
          <div className="my-10">
            <img
              src={product3}
              alt="vibrant art"
              className={`${imageClass} ${blurImages ? "blur-md" : ""}`} // Apply blur and standard size
            />
          </div>
        </div>

        <div className="w-64 bg-gray-300 h-[1px] mt-2 md:hidden"></div>
      </section>
    </>
  );
}
