import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    
    const coffee = useLoaderData();
    const {_id, name, chef, supplier, taste, category, details, photo} = coffee;
    
   const handleUpdate = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name, chef, supplier, taste, category, details, photo}

    console.log(newCoffee)

    // data send to server
    fetch(`https://coffee-store-server-ten-beta.vercel.app/coffee/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCoffee)

    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Success!',
                text: 'Coffee Updated Successfully.',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              form.reset()
        }
    })

   }

    return (
        <div className="" style={{backgroundImage: `url("https://i.ibb.co.com/xCkyX6N/11.png")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <Link to='/'>
        <h2 className="flex space-x-2 items-center container mx-auto px-6 md:px-10 lg:px-14 py-12">
            <FaArrowLeft className="text-xl text-[#374151]"></FaArrowLeft>
            <span className="text-3xl rancho text-[#374151]">Back to home</span>
        </h2>
        </Link>
      <div className="container mx-auto px-6 md:px-10 lg:px-14  pb-16 md:pb-32">
        <div className="bg-[#F4F3F0] rounded-md py-8 md:py-16 px-6 md:px-20 lg:px-28">
            <h3 className="text-[45px] rancho text-[#374151] mb-8 text-center">Update Existing Coffee Details</h3>
            <p className="text-lg text-[#1B1A1AB3] raleway mb-8 text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            {/* form start here */}
            <form onSubmit={handleUpdate}>
                {/* input name and chef */}
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-6 md:space-y-0 mb-6">
                {/* one */}
             <div className="form-control w-full md:w-1/2">
            <label className="label">
            <span className="label-text text-lg font-semibold raleway">Name</span>
             </label>
            <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered" defaultValue={name} required />
            </div>
                  {/* two */}
                  <div className="form-control w-full md:w-1/2">
            <label className="label">
            <span className="label-text text-lg font-semibold raleway">Chef</span>
             </label>
            <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered" defaultValue={chef} required />
            </div>
                </div>
                     {/* input supplier and taste */}
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-6 md:space-y-0 mb-6">
                {/* one */}
             <div className="form-control w-full md:w-1/2">
            <label className="label">
            <span className="label-text text-lg font-semibold raleway">Supplier</span>
             </label>
            <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered" defaultValue={supplier} required />
            </div>
                  {/* two */}
                  <div className="form-control w-full md:w-1/2">
            <label className="label">
            <span className="label-text text-lg font-semibold raleway">Taste</span>
             </label>
            <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered" defaultValue={taste} required />
            </div>
                </div>
                            {/* input category and details*/}
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-6 md:space-y-0 mb-8">
                {/* one */}
             <div className="form-control w-full md:w-1/2">
            <label className="label">
            <span className="label-text text-lg font-semibold raleway">Category</span>
             </label>
            <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered" defaultValue={category} required />
            </div>
                  {/* two */}
                  <div className="form-control w-full md:w-1/2">
            <label className="label">
            <span className="label-text text-lg font-semibold raleway">Details</span>
             </label>
            <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered" defaultValue={details} required />
            </div>
                </div>
                                 {/* input photo url*/}
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-6 md:space-y-0 mb-6">
                {/* one */}
             <div className="form-control w-full">
            <label className="label">
            <span className="label-text text-lg font-semibold raleway">Photo</span>
             </label>
            <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered" defaultValue={photo} required />
            </div>
                </div>
                <input className="text-2xl text-[#331A15] rancho btn btn-block bg-[#D2B48C] border-2 border-[#331A15]" type="submit" value="Update Coffee Details" />
            </form>

        </div>

      </div>
    </div>
    );
};

export default UpdateCoffee;