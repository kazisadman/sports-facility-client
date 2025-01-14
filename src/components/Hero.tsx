import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=" bg-secondaryColor">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-6 lg:py-0">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2">
          <h1 className="text-[64px] font-medium">
            Sweat Zone-Your Path to
            <span className="text-text"> Strength </span> <br /> and
            <span className="text-text"> Fitness!</span>
          </h1>
          <h3 className="text-2xl text-gray-500">Stay Positive, Stay Fit!</h3>
          <div className="btn flex gap-1 items-center justify-center max-w-40 bg-primaryColor text-white ">
            <a href="">Book Now</a>
            <FaArrowRight></FaArrowRight>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            className="max-w-[700px]"
            src="https://i.ibb.co.com/YfTfD4n/undraw-basketball-40ga-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
