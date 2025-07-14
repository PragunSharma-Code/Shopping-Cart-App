import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = (props) => {
  const dispatch = useDispatch();

  function removeFromCartHandler() {
    dispatch(remove(props.id));
    toast.success('Item Removed from Cart!');
  }

  return (
    <div className="m-10 w-[40rem] ml-[12rem]">
      <div className="flex  border-b-2 border-grey gap-10 pb-5">
        <img src={props.image} alt="Sorry, img not available!" className="h-[250px] w-[250px]" />
        <div className="flex flex-col w-[30rem]">
          <h1 className="text-gray-700 font-semibold text-[1.25rem] text-left ">{props.title}</h1>
          <h1 className="text-gray-500 font-normal text-[12px] text-left mt-5">{`${props.description.substring(0, 120)}...`}</h1>
          <div className="flex justify-between mt-7">
            <p className="text-green-600 font-semibold text-[1.1rem]">{props.price}</p>
            <div onClick={removeFromCartHandler} className="bg-red-200 w-[40px] h-[40px] p-2 rounded-full hover:bg-red-400 shadow-md">
              <MdDelete className="cursor-pointer text-red-700 size-5 relative left-[2px] top-[1px] hover:bg-red-400"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
