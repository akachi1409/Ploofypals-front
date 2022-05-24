import React from 'react'
import './landing.css';
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {selectState} from "../../redux/state/stateActions";

function Landing() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state)=> state.state);
  const trait = (e) => {
      dispatch(selectState(e.target.name))
    navigate("/trait");
    localStorage.setItem("traitId", e.target.name);
  }

  return (
    <div>
        <header>Home</header>
        <div className='grid-container'>
            <div className='item1'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name="Head" className="landing-button"> 
                    Head
                </button>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Eyes' className="landing-button">Eyes</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Mouth' className="landing-button">Mouth</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Hands' className="landing-button">Hands</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Feet' className="landing-button">Feet</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Panel' className="landing-button">Panel</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Background' className="landing-button">Background</button>
            </div>
            <div className='item2'>
                <img src='1.png' alt='This is sample.' width={900} height={800}></img>
            </div>
            <div className='item4'>
                <button className='reset'>Reset</button>
            </div>
            <div className='item3'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Helmet' className="landing-button">Helmet</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Weapon' className="landing-button">Weapon</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Armor' className="landing-button">Armor</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={trait} name='Ability' className="landing-button">Ability</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button className='generate'>Generate</button>
            </div>
        </div>
    </div>
  )
}

export default Landing;