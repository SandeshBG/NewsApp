import * as action_types from '../actions/action_types';

const initialState = {
    type: "Initial",
    data: []
};

export function getHeadlinesReducer(state = initialState,action){
    switch(action.type){
        case action_types.LOADING:
        case action_types.FAILURE:
            return Object.assign({},state,action);
        case action_types.SUCCESS:
            return Object.assign({},state,action);
        case action_types.UPDATE:            
            return Object.assign({},state,{type:action.type,data:[...state.data,...action.data],page:action.page});
        default:
            return state;        
    }
}