import React, { useEffect, useState } from "react";
import { ButtonGroup, Card, Button, Carousel } from "react-bootstrap";
import Packages from "../Packages/Packages";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/rbBQ9FJ/photo-1541300613939-71366b37c92e.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="custom-h1 fw-bold">Amazing Tour In Madagaskar</h1>
              <h3 className="fs-1">7 Days,8 Night Tour</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/KsPHkb0/photo-1533587851505-d119e13fa0d7.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1 className="custom-h1 fw-bold">Amazing Tour In Wroclaw </h1>
              <h3 className="fs-1">7 Days,8 Night Tour</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/ry9Gzfg/photo-1491555103944-7c647fd857e6.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className="custom-h1 fw-bold">Amazing Tour In Nepal</h1>
              <h3 className="fs-1">7 Days,8 Night Tour</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* package Section */}
      <section className="mt-5">
        <h4 className="custom-top">Choose Your Package</h4>
        <h1>
          Select Your Best Package <br /> For Your Travel
        </h1>
        <Packages></Packages>
      </section>

      {/* Client Section */}

      <section className="mt-5">
        <h4 className="custom-top">Our Traveller Say</h4>
        <h1>
          What Our Traveller Say <br />
          About Us
        </h1>
        <div className="row g-4 mt-5">
          <div className="col-md-4 custom-box">
            <div>
              <img
                src="https://i.ibb.co/kJJq9zD/reviewer-1-07859027.png"
                alt=""
              />
              <h2>Dina James</h2>
              <p className="custom-p">Traveller</p>
              <p>
                Tour X Tourism always give classy and a huge bunch of tour
                package in a cheap rate.Their Services are always
                mindblowing......
              </p>
            </div>
          </div>
          <div className="col-md-4 custom-box">
            <div>
              <img
                className="custom-img"
                src="https://i.ibb.co/F0cghBB/reviewer-2-52e03342.png"
                alt=""
              />
              <h2>Jahid Hasan</h2>
              <p className="custom-p">Traveller</p>
              <p>
                Tour X Tourism always give classy and a huge bunch of tour
                package in a cheap rate.Their Services are always
                mindblowing......
              </p>
            </div>
          </div>
          <div className="col-md-4 custom-box">
            <div>
              <img
                className="custom-img"
                src="https://i.ibb.co/zGwtsRR/reviewer-3-21d99f5c.png"
                alt=""
              />
              <h2>Shwan Pull</h2>
              <p className="custom-p">Traveller</p>
              <p>
                Tour X Tourism always give classy and a huge bunch of tour
                package in a cheap rate.Their Services are always
                mindblowing......
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="mt-5">
        <h4 className="custom-top">Latest Blog</h4>
        <h1>
          Stay Updated And New <br /> Post Our Blog
        </h1>
        <div className="row custom-card">
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img src="https://i.ibb.co/zRZ6D8w/b-1-64c64476.png" />
              <Card.Body>
                <Card.Title>Dina James</Card.Title>
                <Card.Text>
                  I’ve realized that it’s been a while since I last talked about
                  the best travel blogs out there — the ones I read — so I
                  wanted to take a moment and highlight some of my favorite
                  travel blogs that can also help you travel better, cheaper,
                  and smarter
                </Card.Text>
                <ButtonGroup className="custom-btn" variant="primary">
                  Read More
                </ButtonGroup>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img src="https://i.ibb.co/qNrdPNP/b-2-83389c8c.png" />
              <Card.Body>
                <Card.Title>Lina Paul</Card.Title>
                <Card.Text>
                  I’ve realized that it’s been a while since I last talked about
                  the best travel blogs out there — the ones I read — so I
                  wanted to take a moment and highlight some of my favorite
                  travel blogs that can also help you travel better, cheaper,
                  and smarter
                </Card.Text>
                <ButtonGroup className="custom-btn" variant="primary">
                  Read More
                </ButtonGroup>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img src="https://i.ibb.co/2K1mVgt/b-3-f3e9c0bd.png" />
              <Card.Body>
                <Card.Title>Monica Gonjalez</Card.Title>
                <Card.Text>
                  I’ve realized that it’s been a while since I last talked about
                  the best travel blogs out there — the ones I read — so I
                  wanted to take a moment and highlight some of my favorite
                  travel blogs that can also help you travel better, cheaper,
                  and smarter
                </Card.Text>
                <ButtonGroup className="custom-btn" variant="primary">
                  Read More
                </ButtonGroup>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
