
import { FaPen } from "react-icons/fa";
import { FaEye, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, name, chef, supplier, taste, category, details, photo} = coffee;

  

    const handleDelete = _id =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure that you want to delete it?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                Swal.fire({
                title: "Good Luck!!!",
                text: "Deleted coffee details.",
                icon: "success"
              });
              const remaining = coffees.filter(cof => cof._id !== _id)
              setCoffees(remaining);
                }
            })
            }
          });
    }

    return (
        <div className="bg-[#F5F4F1] p-5 md:p-7 flex flex-col md:flex-row items-center space-x-0 md:space-x-8 rounded-lg">
            <div className="w-1/3">
                <img className="w-full" src={photo} alt="" />
            </div>
            <div className="flex justify-between w-2/3 items-center">
            <div>
                <h2><span className="text-lg text-[#1B1A1A] raleway font-semibold">Name:</span> <span className="text-[#5C5B5B]">{name}</span></h2>
                <p><span className="text-lg text-[#1B1A1A] raleway font-semibold">Chef:</span> <span className="text-[#5C5B5B]">{chef}</span></p>
                <p><span className="text-lg text-[#1B1A1A] raleway font-semibold">Supplier:</span> <span className="text-[#5C5B5B]">{supplier}</span></p>
                <p><span className="text-lg text-[#1B1A1A] raleway font-semibold">Taste:</span> <span className="text-[#5C5B5B]">{taste}</span></p>
                
            </div>
            <div className="flex flex-col space-y-4">
                <Link to={`/details/${_id}`}><button className="btn bg-[#D2B48C] border-none text-white text-lg  px-5"><FaEye></FaEye></button></Link>
                <Link to={`/updateCoffee/${_id}`}><button className="btn bg-[#3C393B] border-none text-white text-lg  px-5"><FaPen></FaPen></button></Link>
                <button
                 onClick={()=> handleDelete(_id)}
                 className="btn bg-[#EA4744] border-none text-white text-lg  px-5"><FaTrash></FaTrash></button>
            </div>
            </div>
        </div>
    );
};

export default CoffeeCard;