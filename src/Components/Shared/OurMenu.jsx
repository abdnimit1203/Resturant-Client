import SectionTitle from "../Titles/SectionTitle";
import featuredImg from "/assets/home/featured.jpg";

const OurMenu = () => {
  return (
    <div className="bg-black bg-opacity-50 py-20">
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src={featuredImg} alt="featuredimage" />
        </div>
        <div className="flex flex-col text-white justify-start gap-4">
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn  col-span-2 w-fit  btn-ghost border-b-4 border-b-white hover:btn-neutral">
            READ More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
