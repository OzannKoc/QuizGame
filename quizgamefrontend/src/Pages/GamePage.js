import { React, useEffect, useState } from 'react';
import { startGame } from "../Api/apiCall";
import {useSelector} from "react-redux";
import ScoreTable from "../Components/ScoreTable";
import CorrectAnswerPage from "../Components/CorrectAnswerPage";
import WrongAnswerPage from "../Components/WrongAnswerPage";
import GameFinishPage from '../Components/GameFinishPage';
import {saveGameResult} from "../Api/apiCall";

const GamePage = (props) => {
    const username = useSelector((store)=>{
        return store.username
    });
    const [firstRender,setFirstRender] = useState(false);
    const [questions, setQuestions] = useState([]);
    const[questionIndex, setQuestionsIndex]= useState(0);
    const [isQuizStart, setIsQuizStart] = useState(true);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
    const [isWrongAnswer, setIsWrongAnswer] = useState(false);
    const [isQuizFinish,setIsQuizFinish] = useState(false);
    const [quiz, setQuiz]= useState({
        questions : [],
        choosenAnswers : [],
        username,
        highScore : 0 
    });
    const[point, setPoint]= useState(0);
    const[time, setTime] = useState(15);
    const[earnedPoint,setEarnedPoint] = useState(0);

    useEffect(() => {
        setFirstRender(true);
        console.log("first render")
        loadQuestions();
    }, []);
    
    useEffect(()=>{
        if(firstRender){
            console.log("wrong ve finish")
            console.log(quiz);
            const saveGame = async () =>{
                await saveGameResult(quiz);
                console.log("Game saved!");
                
            };
            saveGame();
        }
    },[isWrongAnswer,isQuizFinish])

    useEffect(()=>{
        if(time===0&&isQuizStart){
            setQuiz({
                ...quiz,
                questions : questions,
                highScore : point
            })
            setIsQuizStart(false);
            setIsCorrectAnswer(false);
            setIsWrongAnswer(true);
        }
    },[time]);

    const loadQuestions = async () => {
            const game = await startGame();
            setQuestions(game.data);
        
    };
    
    const forwardProcess = () =>{
        if(questionIndex!==questions.length){
        setQuestionsIndex(questionIndex+1);
        setIsQuizStart(true);
        setIsCorrectAnswer(false);
        setTime(15);
        }else{
            setIsQuizFinish(true);
        }

    };
    const compareAnswers = (e,correctAnswer,answer)=>{
        e.preventDefault();
        console.log(quiz.questions);
        setQuiz({
            questions :[...questions],
            choosenAnswers : [...quiz.choosenAnswers, answer],
            username,
            highScore : point
        });
        console.log(quiz.questions);
        if(correctAnswer===answer.id){
            setIsQuizStart(false);
            setEarnedPoint(time*100);
            setPoint(point+time*100);
            setIsWrongAnswer(false);
            
            if(questions.length===questionIndex+1){
                setIsQuizStart(false);
                setIsCorrectAnswer(false);
                setIsQuizFinish(true);
            }else{
                setIsCorrectAnswer(true);
            }
        }else{
            setIsQuizStart(false);
            setIsCorrectAnswer(false);
            setIsWrongAnswer(true);
        }
        
    }
    let _screen;
    if(isQuizStart){
        _screen=((questions.length!==0)&&
            <div className="card text-center" >
                <div className="card-header text-white bg-dark ">
                    {questions.length!==questionIndex&& questions[questionIndex].questionContent}
                </div>
                <div className="bg-light">
                    <ul className="list-group list-group-flush">
                        {questions.length!==questionIndex&&questions[questionIndex].answers.map(answers=>{
                            return(<button type="button" className="list-group-item list-group-item-action" key={answers.id}  onClick={e =>compareAnswers(e,questions[questionIndex].correctAnswer.id, answers)}>{answers.answerContent}</button>)
                        })}
                    </ul>
                </div>
            </div>);
    }


    return (
        <div className="container">
            {(!isWrongAnswer&&!isQuizFinish)&&<ScoreTable time={time} setTime={setTime} point={point} setPoint={setPoint} questionIndex={questionIndex} isQuizStart={isQuizStart}/>}
            {_screen}
            {isCorrectAnswer&&<CorrectAnswerPage point={point} earnedPoint={earnedPoint} forwardProcess={forwardProcess} />}
            {isWrongAnswer&&<WrongAnswerPage point={point} time={time}/>}
            {isQuizFinish&&<GameFinishPage point={point}/>}
        </div>
    );
};

export default GamePage;