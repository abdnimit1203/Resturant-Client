import PropTypes from "prop-types";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div>
      <h3 className="text-center text-[#D99904] font-semibold italic pb-4">
        ---{subHeading}---
      </h3>
      <h1 className="text-center py-2 mb-12  px-10    uppercase border-y-4  w-fit mx-auto ">
        {heading}
      </h1>
    </div>
  );
};
SectionTitle.propTypes = {
  subHeading: PropTypes.string,
  heading: PropTypes.string,
};
export default SectionTitle;
