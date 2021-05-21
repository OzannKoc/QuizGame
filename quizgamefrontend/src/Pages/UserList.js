import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers, getGameResultsByUsername } from "../Api/apiCall";
import {reviewQuiz} from "../Redux/authAction";

const UserList = (props) => {
    const [firstRender, setFirstRender] = useState(false);
    const store = useSelector((store)=>{ return store});
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const [userGames, setUserGames] = useState([]);
    const[currentUsername,setCurrentUsername]= useState();
    const[resultClicked,setResultClicked]=useState(false);
    useEffect(() => {
        setFirstRender(true);
        loadGameResults();
    }, []);
    useEffect(() => {
        console.log(userGames);
        if (firstRender) {
            const findResultByUsername = async (username) => {
                const response = await getGameResultsByUsername(username);
                console.log(response.data);
                setUserGames(response.data);
                console.log(userGames);
            }
            findResultByUsername(currentUsername);
        }
    }, [currentUsername]);
    const loadGameResults = async () => {
        try {
            const usersResponse = await getUsers();
            console.log(usersResponse.data);
            setUsers(usersResponse.data);
        } catch (error) {

        }
    }
    const resultButtonClicked = (e, username) => {
        e.preventDefault();
        setCurrentUsername(username);
        setResultClicked(!resultClicked);
    }
    const pushReviewQuiz = (e,game)=>{
        e.preventDefault();
       dispatch(reviewQuiz(store,game));
       const {history} = props.props;
        const {push} = history;
        push("/review");
    }
    
    return (
        <div className="container">
            <div className="card" >
                <ul className="list-group list-group-flush ">
                    {

                        users.map(user => {
                            
                            return (<><li className="list-group-item d-flex justify-content-between" key={user.username}>
                                <h5 style={{ paddingLeft: "20px" }} >{user.username}</h5>
                                <Link style={{ color: "black", paddingRight: "20px",wordSpacing:"40px" }} onClick={(e) => { resultButtonClicked(e, user.username) }} >| Results</Link>
                                {(currentUsername===user.username&&resultClicked&&userGames.length!==0)&&<><ul className="list-group list-group-flush ">
                                {userGames.map(game=>{
                                    return(<>
                                    <li className="list-group-item " key={game.id}>
                                <h5  >Score : {game.highScore}</h5>
                                <Link style={{ color: "black"}} to="/review"  onClick={(e)=>pushReviewQuiz(e,game)}>{game.username }Game{game.id}</Link></li>
                                    </>)
                                })}
                                    </ul></>}
                            </li>
                            </>)

                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default UserList;
