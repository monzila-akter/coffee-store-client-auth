import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";


const Title = () => {
    return (
        <div className="mb-10">
            <p className="text-xl raleway text-[#1B1A1A] mb-2 text-center">--- Sip & Savor ---</p>
            <h3 className="text-[35px] md:text-[55px] text-[#331A15] rancho mb-4 text-center">Our Popular Products</h3>
            <Link to='/addCoffee'>
            <button className="btn block mx-auto flex bg-[#E3B577] border-2 border-[#331A15]">
                <span className="text-xl text-white rancho">Add Coffee</span>
                <FaCoffee className="text-xl text-[#331A15]"></FaCoffee>
            </button>
            </Link>
        </div>
    );
};

export default Title;