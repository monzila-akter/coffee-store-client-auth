
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, photo, email, password)

        createUser(email, password)
        .then(result => {
            console.log(result.user)

            const createdAt = result?.user?.metadata?.creationTime;


            const newUser = {name, photo, email, createdAt}

            fetch('https://coffee-store-server-ten-beta.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "User Added Successfully",
                        showConfirmButton: false,
                        timer: 2000
                      });
                      event.target.reset();
                }
            })
        })
        .catch(error => {
            console.log(error.message)
        })
    }


    return (
        <div className="" style={{backgroundImage: `url("https://i.ibb.co.com/xCkyX6N/11.png")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        
      <div className="container mx-auto px-6 md:px-10 lg:px-48  py-16 md:py-32">
        <div className="bg-[#F4F3F0] rounded-md py-8 md:py-16 px-6 md:px-20 lg:px-28">
            <h3 className="text-[45px] rancho text-[#374151] mb-8 text-center">Sign Up Now!</h3>
            <p className="text-lg text-[#1B1A1AB3] raleway mb-8 text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            {/* form start here */}
            <form onSubmit={handleSignUp}>
                {/* input name field */}
           
             <div className="form-control">
            <label className="label">
            <span className="label-text text-lg font-semibold raleway">Name</span>
             </label>
            <input type="text" name="name" placeholder="Enter coffee name" className="input      input-bordered" required />
            </div>
             {/* input photo url field */}
           
             <div className="form-control">
            <label className="label">
            <span className="label-text text-lg font-semibold raleway">Photo</span>
             </label>
            <input type="text" name="photo" placeholder="Enter photo url" className="input      input-bordered" required />
            </div>
             {/* input email field */}
           
             <div className="form-control">
            <label className="label">
            <span className="label-text text-lg font-semibold raleway">Email</span>
             </label>
            <input type="email" name="email" placeholder="Enter your email" className="input      input-bordered" required />
            </div>
             {/* input name field */}
           
             <div className="form-control mb-8">
            <label className="label">
            <span className="label-text text-lg font-semibold raleway">Password</span>
             </label>
            <input type="password" name="password" placeholder="Enter password" className="input      input-bordered" required />
            </div>
                <input className="text-2xl text-[#331A15] rancho btn btn-block bg-[#D2B48C] border-2 border-[#331A15]" type="submit" value="Sign Up" />
                <p className="mt-3">Already have an account? Please <Link className="text-lg text-[#331A15] font-semibold" to='/signin'>Sign In</Link>.</p>
            </form>
            <div className="divider divider-neutral mt-6">OR</div>
            <button className="text-2xl text-[#331A15] rancho btn btn-block bg-[#D2B48C] border-2 border-[#331A15] space-x-3">
                <FaGoogle></FaGoogle>
                <span>Continue with Google</span></button>
        </div>

      </div>
    </div>
    );
};

export default SignUp;