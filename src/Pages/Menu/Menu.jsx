import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../../Components/MenuCategory/MenuCategory";
import pizzaBG from "/assets/menu/pizza-bg.jpg"
import dessertBG from "/assets/menu/dessert-bg.jpeg"
import saladBG from "/assets/menu/salad-bg.jpg"
import soupBG from "/assets/menu/soup-bg.jpg"
import PopularMenu from "../../Components/PopularMenu/PopularMenu";

const Menu = () => {
    const [menu] = useMenu()
    // console.log(menu)
    const desserts = menu.filter(item=>item.category ==="dessert")
    console.log(desserts);
    const pizzas = menu.filter(item=>item.category ==="pizza")
    console.log(pizzas);
    const salads = menu.filter(item=>item.category ==="salad")
    console.log(salads);
    const soups = menu.filter(item=>item.category ==="soup")
    console.log(soups);
    const drinks = menu.filter(item=>item.category ==="drinks")
    console.log(drinks);
    const offered = menu.filter(item=>item.category ==="offered")
    console.log(offered);
    return (
        <div className="flex flex-col gap-10">
            <Helmet>
                <title>Bistro Cafe | Menu</title>
            </Helmet>
            <Cover bgImage={"/assets/menu/banner3.jpg"} headerText={"OUR MENU"} />
            <div className="mx-auto w-[80%]">
                <PopularMenu/>
            </div>
            <div>
                <MenuCategory items={desserts} title={"Desserts"} image={dessertBG}></MenuCategory> 
            </div>
            <div>
                <MenuCategory items={pizzas} title={"Pizzas"} image={pizzaBG}></MenuCategory> 
            </div>
            <div>
                <MenuCategory items={salads} title={"Salads"} image={saladBG}></MenuCategory> 
            </div>
            <div>
                <MenuCategory items={soups} title={"Soups"} image={soupBG}></MenuCategory> 
            </div>
            <div>
                <MenuCategory items={drinks} title={"Drinks"} image={soupBG}></MenuCategory> 
            </div>
           
        </div>
    );
};

export default Menu;