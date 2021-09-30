import React from 'react';

const Projects = ({ data, color }) => {
  const projects = data.projects;
  const projects_link = data.projects_link;
  return (
    <div className='projects'>
      <p className='heading' style={{ color: `${color.primary}` }}>
        Projects
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      {projects.map((item, index) => (
        <ul key={index} className='row-table'>
          <div className='right-column'>
          <li>
            <span className='title'>{item.title}</span>
            {item.link && (
              <span className='link'>
                <a
                  href={item.link}
                  style={{ color: `${color.primary}` }}
                >
                  {item.link}
                </a>
              </span>
            )}
          </li>
          <p className='description'>{item.description}</p>
        </div>
        </ul>
      ))}
      {projects_link.length > 0 && (
        <li className='repo_link'>
          More projects on:
          <a
            href={projects_link}
            style={{ color: `${color.primary}` }}
          >
            {projects_link}
          </a>
        </li>
      )}
    </div>
  );
};

export default Projects;
