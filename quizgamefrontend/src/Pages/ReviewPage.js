import React from 'react';
import { useSelector } from 'react-redux';

const ReviewPage = (props) => {
    const reviewQuiz = useSelector((store)=>{ return store.reviewGame});
    const {choosenAnswers} = reviewQuiz;
    return (
        <div className="container">
           {
               reviewQuiz.questions.map((questions)=>{
                    return(
                <div className="card text-center" >
                    <div className="card-header text-white bg-dark ">
                        {questions.questionContent}
                    </div>
                    <div className="bg-light">
                        <ul className="list-group list-group-flush">
                            {questions.answers.map(answer=>{
                                return(<li  className="list-group-item "  key={answer.id} >{answer.answerContent}
                                {answer.id===questions.correctAnswer.id&&<i  className="far fa-check-square float-sm-right"></i>} </li>)
                            })}
                        </ul>
                    </div>
                </div>)
               })
               
           }
           
        </div>
    );
};

export default ReviewPage;