import React from 'react';
import { useSelector } from 'react-redux';
import GameStartPage from './GameStartPage';
import UserList from './UserList';
const HomePage=(props)=> {
    const{isLoggedIn} = useSelector((store)=>{
        return({
            isLoggedIn : store.isLoggedIn
        })
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="mb-1">
                   { isLoggedIn ?<GameStartPage/>:<UserList props={{...props}}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;
