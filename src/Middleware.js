export default function middleware({dispatch,getState}){
    return (next) => action => {
        if(typeof action === "function"){
            return action(dispatch,getState);
        }
        return next(action);
    };
} 
