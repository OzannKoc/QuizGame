package com.QuizGame.ws.ServiceImp;

import com.QuizGame.ws.Entity.GameEntity;
import com.QuizGame.ws.Entity.User;
import com.QuizGame.ws.Model.GameModel;
import com.QuizGame.ws.Model.QuestionModel;
import com.QuizGame.ws.Repository.GameRepository;
import com.QuizGame.ws.Repository.QuestionRepository;
import com.QuizGame.ws.Repository.UserRepository;
import com.QuizGame.ws.Service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Transactional(rollbackFor = Exception.class)
public class GameServiceImpl implements GameService {
    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<QuestionModel> startGame() throws Exception {
        try {
            List<QuestionModel> game = questionRepository.findAll().stream().map(QuestionModel::new).collect(Collectors.toList());
            Collections.shuffle(game);
            return game;
        } catch (Exception e) {
            throw new Exception(e.getMessage(), e.getCause());
        }
    }

    @Override
    public void saveGame(GameModel game) throws Exception {
        try {
            gameRepository.saveAndFlush(new GameEntity(game));
        } catch (Exception e) {
            throw new Exception(e.getMessage(), e.getCause());
        }
    }

    @Override
    public List<GameModel> findGameByUsername(String username) throws Exception {
        try {
            return gameRepository.findByUsername(username).stream().map(GameModel::new).collect(Collectors.toList());
        } catch (Exception e) {
            throw new Exception(e.getMessage(), e.getCause());
        }

    }

    @Override
    public Map<String,List<GameModel>> getGameResults() throws Exception {
        try {
            List<User> users = userRepository.findAll();
            Map<String,List<GameModel>> gameResults= new HashMap<>();
            for (User user : users) {
                List<GameModel> inDbModel = findGameByUsername(user.getUsername());
                if (!inDbModel.isEmpty())
                gameResults.put(user.getUsername(),inDbModel);
            }
            return gameResults;
        } catch (Exception e) {
            throw new Exception(e.getMessage(), e.getCause());
        }
    }
}
