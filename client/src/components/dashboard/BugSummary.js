import React from 'react';

const BugSummary = ({bug}) => {
    return (
        <div className="card z-depth-0">
            <div className="card-content grey text text-darken-3">
                <span className="card-title">{bug.summary}</span>
                <p>{bug.description}</p>
                <p className="grey-text"></p>
            </div>
        </div>
    )
}

export default BugSummary;