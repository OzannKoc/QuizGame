import React from 'react';
import correctAnswerIcon from "../Assets/correctAnswerIcon.png";

const CorrectAnswerPage = (props) => {
    const{point,earnedPoint,forwardProcess} = props;
    return (
        <div className="card">
            <div className="text-center">
                <img src={correctAnswerIcon} className=" animate__animated animate__rubberBand animate__slow card-img-top rounded-circle" style={{ objectFit: "cover", width: "125px", height: "125px",marginTop:"1rem"  }} height="64" width="64" alt="..." />
            </div>
            <div className="card-body text-center">
                <h5 className="card-title  animate__animated animate__rubberBand animate__slow" style={{wordSpacing:"5px"}}>Correct!<br/>You earned {earnedPoint} point.</h5>
                <p className="card-text" style={{wordSpacing:"5px"}}>Total : {point}</p>
                <button onClick={forwardProcess}
                    className="btn btn-secondary">{"Next Question"}</button>
            </div>
        </div>
    );
};

export default CorrectAnswerPage;