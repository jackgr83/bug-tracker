import React from 'react';
import BugSummary from './BugSummary';
import { connect } from 'react-redux';
import { createBug } from '../../actions/bugActions';

const BugList = ({bugs}) => {
    return (
        <div className="bug-list section">
            { bugs && bugs.map(bug => {
                return (
                    <BugSummary bug={bug} key={bug.id} />
                )
            }) }
        </div>
    )
}

const mapStateToProps = (state) => ({
    bug: state.bug,
});

export default connect(mapStateToProps, createBug)(BugList);