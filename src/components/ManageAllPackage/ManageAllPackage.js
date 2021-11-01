import React, { useEffect, useState } from "react";

const ManageAllPackage = () => {
  const [allPackage, setAllPackage] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    fetch("https://murmuring-basin-32976.herokuapp.com/allpackage")
      .then((res) => res.json())
      .then((data) => setAllPackage(data));
  }, [isDeleted]);

  const handleDeletePackage = (id) => {
    const confirm = window.confirm("Are you want to delete this package?");
    console.log(id);
    if (confirm) {
      fetch(`https://murmuring-basin-32976.herokuapp.com/deleteOrders/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            setIsDeleted(!isDeleted);
          } else {
            setIsDeleted(false);
          }
        });
    }
  };
  const handleConfirm = (id) => {
    fetch(`https://murmuring-basin-32976.herokuapp.com/confirmOrders/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          setIsDeleted(!isDeleted);
          alert("confirmed success");
        } else {
          setIsDeleted(false);
        }
      });
  };
  console.log(allPackage);
  return (
    <div>
      <h2 className="custom-top">Packages Booked by all visitors</h2>
      <div className="row">
        {allPackage.map((single) => (
          <div className="mt-5 col-md-6 col-12">
            <img src={single.packageImg} alt="" />
            <h1>{single.packageName}</h1>
            <p className="custom-top">Date:{single.Date}</p>
            <p>{single.status}</p>
            <span>
              <button
                onClick={() => handleConfirm(single._id)}
                className="btn btn-sm btn-success"
              >
                Confirm
              </button>
            </span>
            <button
              onClick={() => handleDeletePackage(single._id)}
              className="custom-btn"
            >
              Cancel
              <i className="far fa-trash-alt ms-2"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllPackage;
