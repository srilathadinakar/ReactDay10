export default function ReducerAction(state,action){

    switch (action.type){
        case 'Add':{
            return state+action.payload
        }
        case 'Sub':{
            if((state>0)) {
                return state-action.payload
            }            
        }        
        default:{
            return state
        }
    }
}