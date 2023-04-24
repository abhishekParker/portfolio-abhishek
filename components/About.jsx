import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">I am a MERN Stack developer</p>
          <p className="py-2 text-gray-600">
            As a front-end developer, I have completed several projects, which
            you can check in my project section. I also completed an internship
            at Forcebolt Technologies as a Full-Stack Developer Trainee.
            <Link href="/#skills" className="underline">
              {" "}
              My skills include HTML, CSS, JavaScript, and React more
            </Link>
            , along with other programming languages and technologies. Although
            I am a fresher and do not have extensive professional experience, my
            passion for web development has helped me excel in this field. I am
            determined to achieve my goal of becoming a MERN stack developer and
            contribute to the development of cutting-edge web applications.
          </p>
          <p className="py-2 text-gray-600"></p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">Check out some of my latest projects.</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="logo.png"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
