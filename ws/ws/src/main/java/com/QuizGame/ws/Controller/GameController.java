package com.QuizGame.ws.Controller;

import com.QuizGame.ws.Model.GameModel;
import com.QuizGame.ws.Model.QuestionModel;
import com.QuizGame.ws.Service.GameService;
import com.QuizGame.ws.Utils.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class GameController {

    @Autowired
    private GameService gameService;

    @GetMapping("/game")
    public List<QuestionModel> startGame() throws Exception {
        return gameService.startGame();
    }
    @PostMapping("/game/save")
    public GenericResponse saveGame(@Valid @RequestBody GameModel game)throws Exception{
        gameService.saveGame(game);
        return new GenericResponse("Game Saved!");
    }
    @GetMapping("/game/{username}")
    public List<GameModel> findGameByUsername(@PathVariable(name = "username")String username) throws Exception {
        return gameService.findGameByUsername(username);
    }

    @GetMapping("/game/results")
    public Map<String,List<GameModel>> getGameResults() throws Exception {
        return gameService.getGameResults();
    }

}
