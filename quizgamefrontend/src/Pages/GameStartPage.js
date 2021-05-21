import React from 'react';
import { Link } from "react-router-dom";
import gameStartIcon from "../Assets/quizGameStarIcon.png";

const GameStartPage = () => {
    
    
    return (
        <div className="card">
            <div className="text-center">
                <img src={gameStartIcon} className=" animate__animated animate__rubberBand animate__slow card-img-top rounded-circle" style={{ objectFit: "cover", width: "125px", height: "125px",marginTop:"1rem" }} height="64" width="64" alt="..." />
            </div>
            <div className="card-body text-center">
                <h5 className="card-title  animate__animated animate__rubberBand animate__slow">Wellcome to the Quiz Game</h5>
                <p className="card-text">Press start to play game!</p>
                <Link to="/game" className="btn btn-primary">Start</Link>
            </div>
        </div>
    );
};

export default GameStartPage;