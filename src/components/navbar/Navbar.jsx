 
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    return (
        <div className="">
            <div className="navbar flex items-center justify-center space-x-5">              
                <div className=" py-6">
                    <img className="w-20 h-[75px] object-cover" src="https://i.ibb.co.com/6wtpGsV/logo1.png" alt="" />
                    <h2 className="text-3xl md:text-4xl lg:text-6xl rancho text-white">Espresso Emporium</h2>
                </div>
               <Link to="/signin"> <button className='text-2xl text-[#242222] btn bg-[#E3B577] hover:border-2 hover:border-white hover:bg-transparent hover:text-white rancho'>Sign In</button></Link>
            </div>
        </div>
    );
};

export default Navbar;