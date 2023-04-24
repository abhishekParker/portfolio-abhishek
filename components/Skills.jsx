import Image from "next/image";
import React from "react";

const skills = [
  {
    name: "HTML",
    source: "/../public/assets/skills/html.png",
  },
  {
    name: "CSS",
    source: "/../public/assets/skills/css.png",
  },
  {
    name: "JavaScript",
    source: "/../public/assets/skills/javascript.png",
  },

  {
    name: "Python",
    source: "/../public/assets/skills/python.png",
  },

  {
    name: "Tailwind",
    source: "/../public/assets/skills/tailwind.png",
  },
  {
    name: "React",
    source: "/../public/assets/skills/react.png",
  },
  {
    name: "Next",
    source: "/../public/assets/skills/next.png",
  },
  {
    name: "Node",
    source: "/../public/assets/skills/node.png",
  },
  {
    name: "Express",
    source: "/../public/assets/skills/express.png",
  },
  {
    name: "MongoDB",
    source: "/../public/assets/skills/mongo.png",
  },
  {
    name: "Github",
    source: "/../public/assets/skills/github1.png",
  },
  {
    name: "Firebase",
    source: "/../public/assets/skills/firebase.png",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ name, source }) => (
            <div
              key={name}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={source} alt="/" width={64} height={64} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
