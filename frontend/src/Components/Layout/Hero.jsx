import { Link } from "react-router-dom";
import HeroImg from "../../assets/rabbit-hero.webp"

const Hero = () =>{
  return(
    <section className=" relative">
      <img src={HeroImg} alt="mankit" className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover" />
      <div className="absolute inset-0 bg-black/7 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h1 className="text-4xl md:text-9xl font-bold tracking-normal uppercase mb-4 ">
            vacation <br />Ready
            </h1>
            <p className="text-sm tracking-tighter md:text-lg mb-6">
              Explore our vacation-ready outflits with fast worldwide shipping.
            </p>
            <Link to="#" className="bg-white text-gray-950 px-4 py-2 rounded-sm text-lg ">
            Shop Now
            </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;