import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mongodb from "../../assets/mongodb.png";
import express from "../../assets/express.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import tmdb from "../../assets/project1.png";
import pets from "../../assets/project2.png";
import Button from "../../components/Button";

import "./Tech.css";

const Tech = () => {
  return (
    <div className="tech flex flex-col justify-center items-center max-w-screen-xl mx-auto space-y-4">
      <h1 className="text-5xl mb-5">Technology Stack</h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={true}
        swipeable={true}
        emulateTouch={true}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-3xl">MongoDb</h2>
          <p className="text-2xl max-w-xl">
            MongoDB is a general purpose, document-based, distributed database
            built for modern application developers and for the cloud era.
          </p>
          <img
            className="w-full h-64 object-contain object-center max-w-[500px]"
            src={mongodb}
            alt="mongodb"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl">Express</h2>
          <p className="text-2xl max-w-xl">
            Express is a minimal and flexible Node.js web application framework
            that provides a robust set of features for web and mobile
            applications.
          </p>
          <img
            className="w-full h-64 object-contain object-center max-w-[500px]"
            src={express}
            alt="express"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl">React</h2>
          <p className="text-2xl max-w-xl">
            React is a JavaScript library for building user interfaces. It is
            maintained by Facebook and a community of individual developers and
            companies.
          </p>
          <img
            className="w-full h-64 object-contain object-center max-w-[500px]"
            src={react}
            alt="react"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl">Node.js</h2>
          <p className="text-2xl max-w-xl">
            Node.js is an open-source, cross-platform, back-end JavaScript
            runtime environment that runs on the V8 engine and executes
            JavaScript code outside a web browser.
          </p>
          <img
            className="w-full h-64 object-contain object-center max-w-[500px]"
            src={node}
            alt="node"
          />
        </div>
      </Carousel>
      <h1 className="text-5xl pt-20">Check out my Work!</h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={true}
        swipeable={true}
        emulateTouch={true}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-3xl">TMDB Clone</h2>
          <p className="text-2xl max-w-xl">
            Created a TMDB clone using React, the TMDB Api, and Tailwind CSS with the DaisyUI library.
          </p>
          <img
            className="w-full h-64 object-contain object-center max-w-[500px]"
            src={tmdb}
            alt="tmdb-clone"
          />
          <div className="flex flex-col justify items-center pb-5 xl:flex-row xl:space-x-4">
          <Button href="https://tmdb-like.netlify.app/">View Project</Button>
          <Button href="https://github.com/RyanGuinchard/TMDB-Clone">View Code</Button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl">Safe Snacks For Special Pets</h2>
          <p className="text-2xl max-w-xl">
          Discover what's safe for your pet! Our single-page web app lets you quickly find out what your pet can or can't have based on their type and the food you input. Keep your furry friend healthy with ease.
          </p>
          <img
            className="w-full h-64 object-contain object-center max-w-[500px]"
            src={pets}
            alt="safe pet foods"
          />
          <div className="flex flex-col justify items-center pb-5 xl:flex-row xl:space-x-4">
          <Button href="https://petfoodsafety.netlify.app/">View Project</Button>
          <Button href="https://github.com/RyanGuinchard/pet-food-safety">View Code</Button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Tech;
