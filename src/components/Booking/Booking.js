import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
const Booking = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:8000/placeorders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  useEffect(() => {
    fetch(`http://localhost:8000/booking/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  console.log(item);
  return (
    <div className="container">
      <h2>{item.name}</h2>
      <img src={item.img} alt="" />
      <p>{item.description}</p>

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
          {...register("Address", { required: true })}
          placeholder="Address"
        />
        <br />
        <input
          className="p-2 m-2"
          type="Date"
          {...register("Date", { required: true })}
          placeholder="Date"
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />

        <input className="custom-btn" type="Submit" />
      </form>
    </div>
  );
};

export default Booking;
