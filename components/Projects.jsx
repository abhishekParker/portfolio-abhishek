import React from "react";
import Ecommerce from "../public/assets/projects/Ecommerce.png";
import MovieApp from "../public/assets/projects/Movieapp.png";
import netflixImg from "../public/assets/projects/netflix.jpg";
import Analytics from "../public/assets/projects/Data-analytics.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase tracking-widest text-xl text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">{`What I've Built`}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Ecommerce App"
            backgroundImg={Ecommerce}
            projectUrl="/ecommerce"
          />
          <ProjectItem
            title="Movie Details App"
            backgroundImg={MovieApp}
            projectUrl="/movie"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Data-analytics"
            backgroundImg={Analytics}
            projectUrl="/data-analytics"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
