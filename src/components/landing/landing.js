import React, { useState } from "react";
import "./landing.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectState, resetState, generateArt } from "../../redux/state/stateActions";
import { Modal, Button } from "react-bootstrap";

function Landing() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.state);
  console.log("state:", state);
  const trait = (e) => {
    dispatch(selectState(e.target.name));
    navigate("/trait");
    localStorage.setItem("traitId", e.target.name);
  };

  const onReset = () => {
    dispatch(resetState());
  };

  const onGenerate = async () => {
    try {
      dispatch(generateArt());
    } catch (ex) {
      console.log(ex);
    }
  };

  const [show, setShow] = useState(false);
  const [showRefresh, setShowRefresh] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onRefresh = () => setShowRefresh(true);
  const handleCloseShowRefresh = () => setShowRefresh(false);
  const handelRefresh = () => {

  }

  const onPreview = () => { navigate('/download')}
  return (
    <div>
      <header>Home</header>
      <div className="grid-container">
        <div className="item5">
          <button className="reset" onClick={() => onRefresh()}>
            Refresh
          </button>
        </div>
        <div className="item1">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {state.uploaded.includes("Head") ? (
            <button className="landing-disabled-button" disabled={true}>
              Head(Uploaded)
            </button>
          ) : (
            <button onClick={trait} name="Head" className="landing-button">
              Head
            </button>
          )}

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {state.uploaded.includes("Eyes") ? (
            <button className="landing-disabled-button" disabled={true}>
              Eyes(Uploaded)
            </button>
          ) : (
            <button onClick={trait} name="Eyes" className="landing-button">
              Eyes
            </button>
          )}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {state.uploaded.includes("Mouth") ? (
            <button className="landing-disabled-button" disabled={true}>
              Mouth(Uploaded)
            </button>
          ) : (
            <button onClick={trait} name="Mouth" className="landing-button">
              Mouth
            </button>
          )}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {state.uploaded.includes("Hands") ? (
            <button className="landing-disabled-button" disabled={true}>
              Hands(Uploaded)
            </button>
          ) : (
            <button onClick={trait} name="Hands" className="landing-button">
              Hands
            </button>
          )}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {state.uploaded.includes("Feet") ? (
            <button className="landing-disabled-button" disabled={true}>
              Feet(Uploaded)
            </button>
          ) : (
            <button onClick={trait} name="Feet" className="landing-button">
              Feet
            </button>
          )}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {state.uploaded.includes("Panel") ? (
            <button className="landing-disabled-button" disabled={true}>
              Panel(Uploaded)
            </button>
          ) : (
            <button onClick={trait} name="Panel" className="landing-button">
              Panel
            </button>
          )}
          {/* <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Background' className="landing-button">Background</button> */}
        </div>
        <div className="item2">
          <img src="1.png" alt="This is sample." width={900} height={800}></img>
        </div>
        <div className="item4">
          <button className="reset" onClick={() => onReset()}>
            Reset
          </button>
        </div>
        <div className="item3">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {state.uploaded.includes("Helmet") ? (
            <button className="landing-disabled-button" disabled={true}>
              Helmet(Uploaded)
            </button>
          ) : (
            <button onClick={trait} name="Helmet" className="landing-button">
              Helmet
            </button>
          )}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {state.uploaded.includes("Weapon") ? (
            <button className="landing-disabled-button" disabled={true}>
              Weapon(Uploaded)
            </button>
          ) : (
            <button onClick={trait} name="Weapon" className="landing-button">
              Weapon
            </button>
          )}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {state.uploaded.includes("Armor") ? (
            <button className="landing-disabled-button" disabled={true}>
              Armor(Uploaded)
            </button>
          ) : (
            <button onClick={trait} name="Armor" className="landing-button">
              Armor
            </button>
          )}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {/* <button onClick={trait} name='Ability' className="landing-button">Ability</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br> */}
          <button className="generate" onClick = {()=>onGenerate()}>Generate</button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button className="generate" onClick = {()=>onPreview()}>Preview & Download</button>
        </div>
        <Modal show={state.onGenerate}  backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Wait a miniute</Modal.Title>
          </Modal.Header>
          <Modal.Body>Art is being generated!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showRefresh}  backdrop="static">
          <Modal.Header>
            <Modal.Title>Alert</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you going to delete all the uploaded files and generated images?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseShowRefresh}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Landing;
