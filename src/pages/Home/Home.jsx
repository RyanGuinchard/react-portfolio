import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import self from "../../assets/RyanG.png";

const Home = () => {
  return (
    <div className="home flex flex-col justify-center items-center lg:flex-row lg: mt-10">
      <div className="mb-5 lg:mr-5">
        <h1 className="text-center text-6xl lg:text-7xl">Hi I&apos;m Ryan Guinchard</h1>
        <p className="text-center text-3xl lg:text-4xl">
          I{" "}
          <Typewriter
            words={[" am a Full-Stack Developer.", " love creating intuitive user interfaces.", " am passionate about clean code."]}
            loop={false}
          />
        </p>
      </div>
      <div>
          <img
            src={self}
            alt="Ryan"
            className="rounded-full shadow-lg object-cover w-64"
          />
      </div>
    </div>
  );
};

export default Home;