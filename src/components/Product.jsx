import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";


const Product = (props) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(add(props))
    toast.success('Item Added to Cart')
  }

  const RemoveFromCartHandler = () => {
    dispatch(remove(props.id))
    toast.error('Item Removed from Cart');
  }

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-xl">
      <div>
        <p className="text-gray-700 font-semibold text-[1.35rem] text-left truncate w-40 mt-1">{props.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[12px] text-left">{(props.description.length >= 85)  ? (`${props.description.substring(0, 86)}...`) : (props.description) }</p>
      </div>
      <div >
        <img src={props.image} alt="Sorry, img not available!" className="h-[250px]" />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">{props.price}</p>
        </div>

        <button>
          {(cart.some((p) => p.id === props.id)) ? (<button onClick={RemoveFromCartHandler} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">Remove Item</button>) : (<button onClick={addToCartHandler} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">Add Item</button>)}
        </button>
      </div>
    </div>
  )
};

export default Product;
