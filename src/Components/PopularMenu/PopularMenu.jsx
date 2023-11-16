import { useEffect, useState } from "react";
import SectionTitle from "../Titles/SectionTitle";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        if (showAll) {
          const newData = data.filter((item) => item.category === "popular" ||item.category === "drinks"  );
          setMenu(newData);
        } else {
          const popularMenu = data.filter(
            (item) => item.category === "popular"
          );
          setMenu(popularMenu);
        }
      });
  }, [showAll]);
  console.log(menu);
  return (
    <div>
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menu.map((item) => (
            <div
              key={item._id}
              className="flex gap-4 items-center justify-center"
            >
              <div>
                <img
                  src={item.image}
                  alt="menu-item"
                  className="rounded-full rounded-ss-lg aspect-square object-cover w-32"
                />
              </div>
              <div>
                <h2 className="text-xl py-2">{item.name}</h2>
                <p>{item.recipe}</p>
              </div>
              <div>
                <p className="text-[#BB8506]">${item.price}</p>
              </div>
            </div>
          ))}
        <button
          className="btn btn-wide col-span-2 mx-auto my-10 btn-ghost border-b-4 border-b-black hover:btn-neutral"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : "View full menu"}
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
