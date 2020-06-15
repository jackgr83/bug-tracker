import { CREATE_BUG } from '../actions/types';

const initState = {
    bugs: [
        {id: '1', summary: 'bug 1', description: 'description 1'},       
        {id: '2', summary: 'bug 2', description: 'description 2'},       
        {id: '3', summary: 'bug 3', description: 'description 3'},       
    ]
}

const bugReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_BUG':
            console.log('create bug', action.bug);
            return state;
    }
    return state
}

export default bugReducer;