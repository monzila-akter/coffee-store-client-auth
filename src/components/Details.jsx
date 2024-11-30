import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const Details = () => {

    const coffeeDetails = useLoaderData();
    const {_id, name, chef, supplier, taste, category, details, photo} = coffeeDetails;

    return (
        <div className="" style={{backgroundImage: `url("https://i.ibb.co.com/xCkyX6N/11.png")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
           <Link to='/'>
        <h2 className="flex space-x-2 items-center container mx-auto px-6 md:px-10 lg:px-14 py-12">
            <FaArrowLeft className="text-xl text-[#374151]"></FaArrowLeft>
            <span className="text-3xl rancho text-[#374151]">Back to home</span>
        </h2>
        </Link>

       <div className="container mx-auto px-6 md:px-10 lg:px-14 mb-10 md:mb-24">
       <div className="bg-[#F5F4F1] px-5  md:px-20 lg:px-32 py-5 md:py-16 flex items-center space-x-6 md:space-x-24 lg:space-x-40 rounded-lg">
            <div className="">
                <img className="w-full" src={photo} alt="" />
            </div>
            <div>
                <h3 className="mb-6 text-4xl text-[#331A15] rancho">Niceties</h3>
                <h2><span className="text-lg text-[#1B1A1A] raleway font-semibold">Name:</span> <span className="text-[#5C5B5B]">{name}</span></h2>
                <p><span className="text-lg text-[#1B1A1A] raleway font-semibold">Chef:</span> <span className="text-[#5C5B5B]">{chef}</span></p>
                <p><span className="text-lg text-[#1B1A1A] raleway font-semibold">Supplier:</span> <span className="text-[#5C5B5B]">{supplier}</span></p>
                <p><span className="text-lg text-[#1B1A1A] raleway font-semibold">Taste:</span> <span className="text-[#5C5B5B]">{taste}</span></p>
                <p><span className="text-lg text-[#1B1A1A] raleway font-semibold">Category:</span> <span className="text-[#5C5B5B]">{category}</span></p>
                <p><span className="text-lg text-[#1B1A1A] raleway font-semibold">Details:</span> <span className="text-[#5C5B5B]">{details}</span></p>
            </div>
        </div>
       </div>
        </div>
    );
};

export default Details;