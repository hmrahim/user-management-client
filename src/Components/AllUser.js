import React from "react";
import Nav from "./Nav";
import UserRow from "./UserRow";
import { useQueries, useQuery } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const AllUser = () => {
  const [inputvalue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const { data, isLoading, refetch } = useQuery("todos", () =>
    fetch("https://ancient-sierra-21215.herokuapp.com/user").then((res) =>
      res.json()
    )
  );

  const submit = (e) => {
    const term = e.target.value
    fetch(`http://localhost:5000/search?term=${term}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setSearchResult(data));
  };

  if (isLoading) {
    return <h1 className="text-center">Loading...</h1>;
  }
  //   refetch()
  return (
    <div className="w-full mt-5  md:w-3/4 mx-auto   bg-neutral p-5  pt-0 rounded-xl ">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl   font-bold text-center text-white">
          All users
        </h1>
        <div class="form-control mt-4">
          <input
            name="search"
            onChange={submit}
            type="text"
            placeholder="Search by name"
            class="input input-bordered"
          />
         
        </div>
      </div>
      <hr className="my-5 md:mx-5 " />
      <div>
        <div class="overflow-x-auto overflow-y-auto">
          <table class="table table-zebra w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th align="center">No</th>
                <th align="center">Name</th>
                <th align="center">Username</th>
                <th align="center">Email</th>
                <th align="center">Phone</th>
                <th align="center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {searchResult.length == 0
                ? data.map((user, index) => (
                    <UserRow
                      key={user._id}
                      user={user}
                      refetch={refetch}
                      index={index}
                    />
                  ))
                : searchResult.map((user, index) => (
                    <UserRow
                      key={user._id}
                      user={user}
                      refetch={refetch}
                      index={index}
                    />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
