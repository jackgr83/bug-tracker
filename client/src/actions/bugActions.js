import axios from "axios";
import { GET_BUGS } from "./types";

export const getBugs = (bug) => {
  return (dispatch, getState) => {
      axios
          .get('/api/bugs')
          .then(bug => dispatch({ type: GET_BUGS, payload: bug.data }));
      // make async call to database
      
  }
};
