import bannerImg from '../../assets/bannerImg.json'
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center   pt-16">
      <div className="flex-1 space-y-4">
        <p className="title">Contacts Management</p>
        <p className="subtitle">
        Effortlessly Organize Your Contacts with Ease
        </p>
        <button className="btn">Explore</button>
       
      </div>
      <div className="flex-1 ">
        <Lottie animationData={bannerImg}></Lottie>
      </div>
    </div>
  );
};
export default Banner;
