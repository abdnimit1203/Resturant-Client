import Swal from "sweetalert2";
import Cover from "../../Components/Cover/Cover";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
 

 const handleOrderNow = (itemId)=>{
    Swal.fire(`${itemId} on the way to delivery! 🚚`)
 }
  return (
    <div>
      <Cover bgImage="/assets/shop/banner2.jpg" headerText="YOUR CART 🛒"></Cover>

      <div className="my-10 ">
 
        <div className="overflow-x-auto rounded-xl w-[90%] border mx-auto">
          <table className="table ">
            {/* head */}
            <thead >
              <tr className="font-bold text-xl bg-success text-white">
                <th></th>
                <th>Item</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {
                cart?.map(item=>(
                    
                    <tr key={item._id} >
                <th><img src={item.image} alt="image"  className="w-16 rounded-lg"/></th>
                <td className="font-semibold">{item.name}</td>
                <td>${item.price}</td>
                <td><button onClick={()=>handleOrderNow(item._id)} className="btn btn-sm btn-success capitalize">Order Now</button></td>
              </tr>
                    
                ))
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
