import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-basin-32976.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="row text-center">
        {packages.map((item) => (
          <div className="col-md-4 ">
            <div className="shadow-sm mx-3 my-3">
              <Card>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Link to={`booking/${item._id}`}>
                    <Button className="custom-btn">Book This Package</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
