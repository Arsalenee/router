import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getdetails } from "../JS/actions/actions";

const Moviecard=({movie})=>{
  const dispatch=useDispatch()  
  return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={movie.posterURL} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Link to={`/description/${movie.id}`}>
            <Button variant="primary" >see details</Button>
            </Link>
          </Card.Body>
        </Card>
      );
    }
export default Moviecard