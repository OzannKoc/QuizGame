import React from 'react';
import { Link } from "react-router-dom";
import wrongAnswerIcon from "../Assets/wrongAnswerIcon.png";

const WrongAnswerPage = (props) => {
    const {point,time} = props;
    return (
        <div className="container">
            <div className="card">
                <div className="text-center">
                    <img src={wrongAnswerIcon} className=" animate__animated animate__hinge animate__slow card-img-top " style={{ objectFit: "cover", width: "125px", height: "125px",marginTop:"1rem"  }} height="64" width="64" alt="..." />
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title  animate__animated animate__rubberBand animate__slow" >{time!==0?"Wrong Answer":"Time Expired"}, Game is Finihed!<br/>Your Total Point : {point}</h5>
                    <p className="card-text">Press start to play new game!</p>
                    <Link to="/" className="btn btn-primary" >Try Again?</Link>
                </div>
            </div>
        </div>
    );
};

export default WrongAnswerPage;