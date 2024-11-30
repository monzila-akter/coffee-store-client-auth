import { FaArrowLeft } from "react-icons/fa6";
import { Link, useRouteError } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";


const ErrorPage = () => {

    const error = useRouteError();
    // console.log(error)
    return (
        <div className="">
           
           {
            error.status === 404 && <div className="flex flex-col justify-center">
                <Navbar></Navbar>
                <Link to='/'>
        <h2 className="flex space-x-2 items-center justify-center mt-12">
            <FaArrowLeft className="text-xl text-[#374151]"></FaArrowLeft>
            <span className="text-3xl rancho text-[#374151]">Back to home</span>
        </h2>
        </Link>
               <img className="container mx-auto" src="https://i.ibb.co.com/JxW8gGJ/404.gif" alt="" />
                <Footer></Footer>
            </div>
           } 
        </div>
    );
};

export default ErrorPage;