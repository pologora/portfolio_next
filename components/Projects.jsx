import Project from './Project';
import Section from './Section';


import projects from '../public/data/projects';

const Projects = () => {
  const projectsElement = projects.map((project, index) => {
    return <Project key={index} project={project} />;
  });

  return (
    <Section title={'Projects'} id="projects">
      {projectsElement}
    </Section>
  );
};
export default Projects;
