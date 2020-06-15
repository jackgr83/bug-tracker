import axios from 'axios';
import { CREATE_BUG } from './types';

export const createBug = (bug) => {
    return (dispatch, getState) => {
        axios
            .get('/api/bugs')
            .then(res => dispatch({ type: 'CREATE_BUG', bug }))
        // make async call to database
        
    }
};
