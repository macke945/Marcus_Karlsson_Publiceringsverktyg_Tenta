import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { ProjectsWrapper, SectionCenter, ProjectsButton } from "../elements"
const Projects = ({ projects, title, showLink }) => {
  return (
    <ProjectsWrapper>
      <Title title={title} />
      <SectionCenter>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </SectionCenter>
      {showLink && (
        <ProjectsButton to="/projects">
          Alla projekt
        </ProjectsButton>
      )}
    </ProjectsWrapper>
  )
}

export default Projects
