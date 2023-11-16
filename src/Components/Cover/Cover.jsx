import PropTypes from "prop-types";
import { Parallax } from "react-parallax";
// import "./Cover.css"
const Cover = ({ headerText, bgImage }) => {
  return (
    <div className="parallax-banner">


    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={bgImage}
      bgImageAlt="the menu cover"
      strength={-200}
    >
      <div
        className="hero h-fit font-['cingel']"
    //     style={{ backgroundImage: `url(${bgImage})` 
    // }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content bg-[#11111198] text-center text-white px-[20%] py-[10%] my-[100px]">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{headerText}</h1>
            <p className="mb-5 uppercase">Would you like to try a dish?</p>
          </div>
        </div>
      </div>
     
    </Parallax>
    </div>
  );
};
Cover.propTypes = {
  headerText: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
};
export default Cover;
