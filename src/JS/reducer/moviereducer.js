import {movies} from '../../data'
import { ADDMOVIE, FILTTERBYNAME, GETDETAILS } from "../actiontypes/actionTypes"
const initstate={
    liste:movies,feltredname:"",
    moviedetail:{}
}
export const moviereducer=(state=initstate,action)=>{
    switch (action.type) {
        case ADDMOVIE:
            return {...state, liste:[...state.liste,action.payload]}
         case FILTTERBYNAME:
            return{...state,feltredname:action.payload}   
           case GETDETAILS:

            return{...state,moviedetail:state.liste.find((e)=>e.id == action.payload)} 
    
        default:
            return state
    }
}