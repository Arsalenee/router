import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fillterbyname } from "../JS/actions/actions";

const NavigationBar = () => {
  const dispatch=useDispatch()
  return (
    <nav>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/list">
        <li>Movie list</li>
      </Link>
      <Link to="/add">
        <li>Add</li>
      </Link>
      <input type="text" onChange={(e)=>dispatch(fillterbyname(e.target.value))}/>
      <p>rate</p>
    </nav>
  );
};
export default NavigationBar;
