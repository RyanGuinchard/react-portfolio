import "./About.css";

const About = () => {
  return (
    <div className="about flex flex-col items-center h-screen p-4">
      <h1 className="text-5xl mb-5 text-[#D4ADFC]">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:max-w-4xl mx-auto">
        <p className=" text-[#D4ADFC] text-xl mb-5 md:mb-0 md:mr-5 text-center md:text-left md:w-1/2">
          Hey, I’m Ryan Guinchard, a recently graduated Full-Stack Developer
          from Keyin College in St.John&rsquo;s, Newfoundland. With a passion for writing code, I spend most of my
          days working on projects, learning new technologies, and expanding my
          knowledge in the field of software development. I have experience working
          with JavaScript, React, Node.js, Java and more. I am always looking for new
          opportunities to learn and grow as a developer. When I&rsquo;m not coding, you can find me playing video games or spending time with my animals. Lets get connected and working together!
        </p>
        <iframe
          className="w-full md:w-1/2"
          height="300"
          src="https://github-readme-stats.vercel.app/api?username=RyanGuinchard&show_icons=true&theme=cobalt"
          title="GitHub Stats"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
