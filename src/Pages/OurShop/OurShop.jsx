import { useState } from "react";
import Cover from "../../Components/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../Components/CARDS/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OurShop = () => {
    const categories = ['Salads','Pizzas','Soups','Desserts','Drinks']
    const {category} = useParams()
    console.log(category);
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu,loading] =useMenu()

    const desserts = menu.filter(item=>item.category ==="dessert")
   
    const pizzas = menu.filter(item=>item.category ==="pizza")
   
    const salads = menu.filter(item=>item.category ==="salad")
   
    const soups = menu.filter(item=>item.category ==="soup")
   
    const drinks = menu.filter(item=>item.category ==="drinks")
    
  return (
    <div>
         <Helmet>
                <title>Bistro Cafe | Our Shop</title>
            </Helmet>
      <Cover
        bgImage={"/assets/shop/banner2.jpg"}
        headerText={"OUR Shop"}
      ></Cover>
      <div className="">
        {
            loading? 
            <img src="/assets/others/loader3.gif" alt="loading" className="w-full " />
            :

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
            <TabList className="w-[80%] mx-auto py-10 flex justify-center">
              <Tab value={"Salads"} >SALAD</Tab>
              <Tab>PIZZA</Tab>
              <Tab>SOUPS</Tab>
              <Tab>DESSERTS</Tab>
              <Tab>DRINKS</Tab>
              
            </TabList>
            
            <TabPanel>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
              {
                  salads.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
              }
               </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
              {
                  pizzas.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
              }
               </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
              {
                  soups.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
              }
               </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
              {
                  desserts.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
              }
               </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
              {
                  drinks.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
              }
               </div>
            </TabPanel>
           
            
          </Tabs>
        }
      
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default OurShop;
