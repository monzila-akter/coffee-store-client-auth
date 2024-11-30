import { Link, useLoaderData } from "react-router-dom";
import Banner from "./banner/Banner";
import Title from "./Title";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
import { FaUser } from "react-icons/fa6";


const Home = () => {

    const loadedcoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedcoffees);
   

    return (
        <div>
           <Banner></Banner>
           
           <div className="mb-16 md:mb-28" style={{backgroundImage: `url('https://i.ibb.co.com/ZNdvPTF/1.png')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
           <Title></Title>
            <div className="container mx-auto px-6 md:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
               {
                
                coffees.map(coffee =>
                     <CoffeeCard 
                     key={coffee._id}
                     coffees={coffees}
                     setCoffees={setCoffees} 
                     coffee={coffee}></CoffeeCard>)

               }
            </div>
           </div>
          
           <div className="mb-20">
 {/* user button here */}
 <Link to='/users'>
            <button className="btn block mx-auto flex bg-[#E3B577] border-2 border-[#331A15]">
                <span className="text-xl text-white rancho">Users</span>
                <FaUser className="text-xl text-[#331A15]"></FaUser>
            </button>
            </Link>
           </div>
        </div>
    );
};

export default Home;