package com.QuizGame.ws.Service;

import com.QuizGame.ws.Entity.User;
import com.QuizGame.ws.Model.UserModel;

import java.util.List;

public interface UserService {
    void save(User user) throws Exception;

    List<UserModel> getUsers() throws Exception;

    User getUser(String username) throws Exception;
}
