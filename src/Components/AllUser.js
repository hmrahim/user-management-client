import React from "react";
import Nav from "./Nav";
import UserRow from "./UserRow";
import { useQueries, useQuery } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllUser = () => {
    const { data, isLoading, refetch } = useQuery("todos", () =>
    fetch("https://ancient-sierra-21215.herokuapp.com/user").then((res) =>
      res.json()
    )
  );
  if(isLoading){
    return <h1>Loading...</h1>
  }
  refetch()
  return (
    <div className="w-full  md:w-3/4 mx-auto   bg-neutral p-5  pt-0 rounded-xl ">
      
      <h1 className="text-4xl my-5 font-bold text-center text-white">
          All user
        </h1>
        <hr className="my-5 md:mx-5 " />
      <div>
        <div class="overflow-x-auto overflow-y-auto">
          <table class="table table-zebra w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            
          {
            data.map((user,index)=> <UserRow key={user._id} user={user} refetch={refetch} index={index} />)
          }
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
