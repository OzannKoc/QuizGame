import React, { useEffect } from 'react';

const ScoreTable = (props) => {
    const{time,setTime,point,questionIndex,isQuizStart} = props;

    useEffect(() => {
        if (time > 0 && isQuizStart) {
        setTimeout(() => setTime(time-1), 1000);
        } else {
        //gameOver();
        }
    });

    return (
            <div className="card card text-white bg-success" >
                        <div className="card-header text-center">
                            <span className="float-sm-left " style={{paddingLeft : "80px"}} >Questions {questionIndex+1}/10 </span>
                            <span  >{isQuizStart && point} {isQuizStart &&'Points'}</span>
                            <span className="float-sm-right" style={{paddingRight : "80px"}}>{isQuizStart&&"Remainig Time :"}{isQuizStart&&time}</span>
                        </div>
            </div>
    );
};

export default ScoreTable;