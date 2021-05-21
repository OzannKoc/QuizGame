import React from 'react';
import { Link } from "react-router-dom";
import congratulationsIcon from "../Assets/congratulationsIcon.png";

const GameFinishPage = (props) => {
    const {point} = props;
    return (
        <div className="container">
            <div className="card">
                <div className="text-center">
                    <img src={congratulationsIcon} className=" animate__animated animate__rubberBand animate__slow card-img-top rounded-circle " style={{ objectFit: "fill", width: "200px", height: "200px" }} height="150px" width="150px" alt="..." />
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title  animate__animated animate__rubberBand animate__slow">Congratulations, You win!<br/>Your Total Point :{point}</h5>
                    <p className="card-text">Press start to play new game!</p>
                    <Link to="/" className="btn btn-primary" >Try Again?</Link>
                </div>
            </div>
        </div>
    );
};

export default GameFinishPage;