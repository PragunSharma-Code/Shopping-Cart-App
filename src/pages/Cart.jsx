import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from '../components/CartItem'
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((accumulator, currValue) => accumulator + currValue.price, 0));
  }, [cart]);

  return (
    <div className="flex">

      {
        (cart.length > 0) ?

          (
            <div>
              {
                cart.map((cartItm, index) => (<CartItem key={index} {...cartItm} />))
              }
            </div>)

          :
          (<div className="flex flex-col justify-center items-center w-full h-full relative top-[17rem]">
            <h1 className="font-semibold text-[2rem]">Your Cart is Empty!</h1>
            <Link to='/'><button className="bg-[#51a463] px-36 py-4 mt-[21px] rounded-lg uppercase font-bold text-white shadow-2xl hover:bg-white hover:text-[#51a463] ">shop now </button></Link>
          </div >)
      }
      {
        (cart.length > 0) ? (
          <div className="w-10vw mt-[7rem] ml-[4rem]">
            <div className="text-green-800 font-semibold text-[1.5rem] text-left">YOUR CART</div>
            <div className="text-green-800 font-bold text-[3rem] mt-0">SUMMARY</div>
            <p>
              <span className="text-gray-700 font-semibold text-[1.35rem] text-left truncate w-40 mt-1">Total Items: {cart.length}</span>
            </p>
            <div>
              <p className="text-gray-700 font-semibold text-[1.35rem] text-left  mt-1">Total Amount: <span className="text-black">{`$${totalAmount.toFixed(2)}`}</span></p>
            </div>
            <Link to='/checkout'>
              <button className="bg-[#51a463] px-36 py-4 mt-[21px] rounded-lg uppercase font-bold text-white shadow-2xl hover:bg-green-700 ">
                Checkout Now
              </button>
            </Link>
          </div>) : (<div></div>)
      }


    </div >
  )
};

export default Cart;
