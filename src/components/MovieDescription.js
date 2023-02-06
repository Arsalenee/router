import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getdetails } from "../JS/actions/actions";

const Descreption = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const moviedetail=useSelector(state=>state.moviedetail)
    useEffect(() => {
        dispatch(getdetails(id))
    }, [id])
    
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={moviedetail.trailerURL}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Descreption;
