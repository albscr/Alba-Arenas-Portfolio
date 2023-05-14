import React from "react";
import { Project } from "../Components/Project";
import { Title } from "../Components/Title";
import projectsData from "../data/ProjectsData";

function Projects() {
  return (
    <div >
        <Title title="Projects" />
      {projectsData.map((project) => {
        return (
         <Project
         key={project.id} 
         id={project.id} 
         title={project.title}
         photo={project.photo}
         description={project.description}
         links={project.links}
         library={project.library}
         plus={project.plus}
         /> 
         
        );
      })}
    </div>
  );
}

export { Projects };
