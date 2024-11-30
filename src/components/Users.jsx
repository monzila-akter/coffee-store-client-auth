import { useState } from "react";
import { FaArrowLeft, FaPen, FaTrash } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Users = () => {

   const loadedUsers = useLoaderData();

   const [users, setUsers] = useState(loadedUsers);

   const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You want to delete user!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         
          fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success"
                  });

                  const remainingUsers = users.filter(user => user._id !== id);
                  setUsers(remainingUsers)
            }
          })
        }
      });
   }

    return (
        <div className="container mx-auto px-6 md:px-10 lg:px-14 ">
            <Link to='/'>
            <h2 className="flex space-x-2 items-center container mx-auto px-6 md:px-10 lg:px-14 pt-12">
                <FaArrowLeft className="text-xl text-[#374151]"></FaArrowLeft>
                <span className="text-3xl rancho text-[#374151]">Back to home</span>
            </h2>
            </Link>
            <h2 className="text-4xl text-[#242222] rancho py-12 text-center">Total Users Available: {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table mb-20">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Created At </th>
        <th>Last SignIn Time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
       {
        users.map(user => 
            <tr key={user._id}>
              <th>{1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.lastSignInTime}</td>
              <td className="space-x-2">
              <button className="btn bg-[#3C393B] border-none text-white text-lg "><FaPen></FaPen></button>
              <button
                 onClick={()=> handleDelete(user._id)}
                 className="btn bg-[#EA4744] border-none text-white text-lg  "><FaTrash></FaTrash></button>
              </td>
            </tr>)
       }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;