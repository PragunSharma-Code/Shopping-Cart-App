import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from '../assets/logo.png'

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to='/'>
        <div className="ml-5">
          <img src={logo} className="h-14" alt="Sorry , img not available" />
        </div>
      </NavLink>

      <div className="flex  items-center font-medium text-slate-100 mr-5 space-x-6">
        <p><NavLink to='/'>Home</NavLink></p>
        <div className="relative">
          <NavLink to='/cart'><FaShoppingCart className="text-2xl" /></NavLink>
          {
            (cart.length > 0) ?
              (
                <div className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" >
                  {cart.length}
                </div>
              ) :

              (<div></div>)
          }
        </div>
      </div>
    </div>
  );

};

export default Navbar;
