import React from "react";
import { useForm } from "react-hook-form";
import { useQueries, useQuery } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav";

const CreateUser = () => {
 

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://ancient-sierra-21215.herokuapp.com/user", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => toast.success("User created Succesfully"));
    reset();
  };
  
  return (
    <div className="w-full  md:w-3/4 mx-auto h-[80vh]  md:px-0 bg-neutral mt-3 rounded-lg  pt-0  overflow-y-auto px-5">
      <div>
        
        <h1 className="text-4xl my-5 font-bold text-center text-white">
          Create user
        </h1>
        <hr className="my-5 md:mx-5 " />
        <div className="w-full md:w-2/4 mx-auto bg-base-100 m-5 text-black rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered text-white w-full "
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label class="label">
                  {errors?.name?.type === "required" && (
                    <span class="label-text-alt text-error">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered text-white w-full "
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Username is required",
                    },
                  })}
                />
                <label class="label">
                  {errors?.username?.type === "required" && (
                    <span class="label-text-alt text-error">
                      {errors.username.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">E-mail</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered text-white w-full "
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                />
                <label class="label">
                  {errors?.email?.type === "required" && (
                    <span class="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered text-white w-full "
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone is required",
                    },
                  })}
                />
                <label class="label">
                  {errors?.phone?.type === "required" && (
                    <span class="label-text-alt text-error">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
