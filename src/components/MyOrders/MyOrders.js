import React, { useEffect, useState } from "react";
import Usefirebase from "../Hooks/UseFirebase";

const MyOrders = () => {
  const [tours, setTours] = useState([]);
  const { user } = Usefirebase();
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://murmuring-basin-32976.herokuapp.com/booking/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
      })
      .finally(() => setIsLoading(false));
  }, [user?.email, isDeleted]);
  console.log(tours);

  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you want to delete this package?");

    if (confirm) {
      fetch(`https://murmuring-basin-32976.herokuapp.com/deleteOrders/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            setIsDeleted(!isDeleted);
            alert("successfully Deleted");
          }
        });
    }
  };
  if (isLoading) {
    return <h1 className="my-5 text-center">Loading..........</h1>;
  }
  return (
    <div className="container">
      <h2>
        <span className="custom-top ">Tour Booked by </span> {user.displayName}
      </h2>
      <div className="row">
        {tours.map((single) => (
          <div className="mt-5 col-md-6 col-12">
            <img src={single.packageImg} alt="" />
            <h1>{single.packageName}</h1>
            <p className="custom-top">Date:{single.Date}</p>
            <div>
              <p>{single.status}</p>
            </div>
            <button
              onClick={() => handleDelete(single._id)}
              className="custom-btn"
            >
              Cancel
              <i className="far fa-trash-alt ms-2"></i>
            </button>
          </div>
        ))}
        <p>{tours.packageImg}</p>
      </div>
    </div>
  );
};

export default MyOrders;
