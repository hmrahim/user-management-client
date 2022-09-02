import React from "react";
import { useForm } from "react-hook-form";
import { useQueries, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav";

const EditUser = () => {
    const navigate = useNavigate()
    const {id} = useParams()
  const { data, isLoading, refetch } = useQuery([id], () =>
    fetch(`https://ancient-sierra-21215.herokuapp.com/user/${id}`).then((res) =>
      res.json()
    )
  );
 

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    fetch(`https://ancient-sierra-21215.herokuapp.com/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => toast.success("User updated Succesfully"));
    reset();
    navigate("/alluser")
  };
  if (isLoading) {
    return <h1 className="text-center">Loading....</h1>;
  }
  refetch();
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
                defaultValue={data.name}
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
                defaultValue={data.username}
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
                defaultValue={data.email}
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
                defaultValue={data.phone}
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

export default EditUser;
