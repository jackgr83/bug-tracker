import React from "react";

const BugSummary = ({ bug }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 class="card-title">{bug.summary}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">{bug.description}</p>
        <a href="#" class="card-link">
          Users
        </a>
      </div>
      {/* <div className="card-content grey text text-darken-3">
        <span className="card-title">{bug.summary}</span>
        <p>{bug.description}</p>
        <p className="grey-text"></p>
      </div> */}
    </div>
  );
};

export default BugSummary;
