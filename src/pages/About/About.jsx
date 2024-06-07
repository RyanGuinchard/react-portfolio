import "./About.css";

const About = () => {
  return (
    <div className="about flex flex-col items-center h-screen p-4">
      <h1 className="text-5xl mb-5 text-[#D4ADFC]">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:max-w-4xl mx-auto">
        <p className=" text-[#D4ADFC] text-xl mb-5 md:mb-0 md:mr-5 text-center md:text-left md:w-1/2">
          Hey, I’m Ryan Guinchard, a software development student from
          Newfoundland and Labrador, Canada. I am currently attending Keyin
          College, focusing on front-end development. I love diving into
          different projects, like this app I’ve been working on. It
          helps users determine which foods are safe for their pets or not,
          blending my organizing skills with my love for animals.
        </p>
        <iframe
          className="w-full md:w-1/2"
          height="300"
          src="https://github-readme-stats.vercel.app/api?username=RyanGuinchard&show_icons=true&theme=cobalt"
          frameborder="0"
          title="GitHub Stats"
        ></iframe>
      </div>
    </div>
  );
};

export default About;