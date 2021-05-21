package com.QuizGame.ws.Service;

import com.QuizGame.ws.Model.GameModel;
import com.QuizGame.ws.Model.QuestionModel;

import java.util.List;
import java.util.Map;

public interface GameService {
    List<QuestionModel> startGame() throws Exception;
    void saveGame(GameModel game) throws Exception;
    List<GameModel> findGameByUsername(String username) throws Exception;
    Map<String,List<GameModel>> getGameResults() throws Exception;
}
