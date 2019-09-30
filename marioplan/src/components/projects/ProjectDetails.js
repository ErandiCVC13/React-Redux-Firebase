import React from "react";

const ProjectDetails = props => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Base on my experienced, even though I'm working with React . The
            detected language on my VSCode is still vanilla JavaScript. And
            emmet did not work.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>29 September</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
