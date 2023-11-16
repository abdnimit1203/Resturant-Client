import SectionTitle from "../Titles/SectionTitle";

const ChefRecommends = () => {
  return (
    <div>
      <SectionTitle subHeading={"Should Try"} heading={"CHEF RECOMMENDS"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col bg-slate-100">
          <img
            src="/assets/home/slide5.jpg"
            alt="card-image-salad"
            className="aspect-video object-cover"
          />
          <div className="flex flex-col justify-center text-center py-6 gap-3 p-6">
            <h3 className="font-bold text-xl">Carsar Salad</h3>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="btn btn-wide col-span-2 mx-auto my-2 btn-ghost border-b-4 border-b-[#BB8506] text-[#BB8506] hover:btn-[#BB8506]">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-slate-100">
          <img
            src="/assets/home/slide5.jpg"
            alt="card-image-salad"
            className="aspect-video object-cover"
          />
          <div className="flex flex-col justify-center text-center py-6 gap-3 p-6">
            <h3 className="font-bold text-xl">Carsar Salad</h3>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="btn btn-wide col-span-2 mx-auto my-2 btn-ghost border-b-4 border-b-[#BB8506] text-[#BB8506] hover:btn-[#BB8506]">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-slate-100">
          <img
            src="/assets/home/slide5.jpg"
            alt="card-image-salad"
            className="aspect-video object-cover"
          />
          <div className="flex flex-col justify-center text-center py-6 gap-3 p-6">
            <h3 className="font-bold text-xl">Carsar Salad</h3>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="btn btn-wide col-span-2 mx-auto my-2 btn-ghost border-b-4 border-b-[#BB8506] text-[#BB8506] hover:btn-[#BB8506]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
