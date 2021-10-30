import React from "react";
import { useForm } from "react-hook-form";

const AddPackage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:8000/addpackage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="my-5">
      <h2 className="custom-top">Add A Package</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 m-2"
          {...register("name")}
          placeholder="Package Name"
        />
        <br />
        <input
          className="p-2 m-2"
          type="number"
          {...register("price", { required: true })}
          placeholder="price"
        />
        <br />
        <input
          className="p-2 m-2"
          {...register("description", { required: true })}
          placeholder="Description"
        />
        <br />
        <input
          className="p-2 m-2"
          {...register("img", { required: true })}
          placeholder="Image Link"
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />

        <input className="custom-btn" type="Submit" />
      </form>
    </div>
  );
};

export default AddPackage;
