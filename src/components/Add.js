import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addmovie } from "../JS/actions/actions";

function Add() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newMovie, setnewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
    trailerURL: "",
  });
  const handelchange = (e) => {
    setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handlesubmit = () => {
    const film = { ...newMovie, id: Math.random(), fav: false };
    if (
      !newMovie.title ||
      !newMovie.description ||
      !newMovie.posterURL ||
      !newMovie.rating ||
      !newMovie.trailerURL
    ) {
      return alert("complte add");
    }
    dispatch(addmovie(film));
    navigate("/list");
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Body>
          <form>
            <label htmlFor="">title</label>
            <input type="text" name="title" id="" onChange={handelchange} value={newMovie.title}/>
            <br />
            <label htmlFor="">description</label>
            <input
              type="text"
              name="description"
              id=""
              onChange={handelchange}
              value={newMovie.description}
            />
            <br />
            <label htmlFor="">posterURL</label>
            <input type="url" name="posterURL" id="" onChange={handelchange} value={newMovie.posterURL} />
            <br />
            <label htmlFor="">rating</label>
            <input type="number" name="rating" id="" onChange={handelchange}  value={newMovie.rating}/>
            <br />
            <label htmlFor="">trailerURL</label>
            <input type="url" name="trailerURL" id="" onChange={handelchange}  value={newMovie.trailerURL}/>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>

          <Button variant="primary" onClick={handlesubmit}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Add;
