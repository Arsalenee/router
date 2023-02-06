import { ADDMOVIE, FILTTERBYNAME, GETDETAILS } from "../actiontypes/actionTypes"

export const addmovie=(newmovie)=>{
    return{
        type:ADDMOVIE,
        payload:newmovie
        
    }
}
export const fillterbyname=(name)=>{
    return{
        type:FILTTERBYNAME,
        payload:name
        
    }
}
export const getdetails=(id)=>{
    return {
        type:GETDETAILS
        ,payload:id
    }
}