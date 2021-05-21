package com.QuizGame.ws.Model;

import com.QuizGame.ws.Entity.Answer;
import com.QuizGame.ws.Entity.GameEntity;
import com.QuizGame.ws.Entity.Question;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

public class GameModel {

    private long id;

    private List<Question> questions;

    private List<Answer> choosenAnswers;

    @NotNull
    @Size(max = 255)
    private String username;

    @Size(max = 255)
    private String highScore;

    public GameModel() {
    }

    public GameModel(GameEntity gameEntity) {
        this.id = gameEntity.getId();
        this.questions = gameEntity.getQuestions();
        this.choosenAnswers = gameEntity.getChoosenAnswers();
        this.username = gameEntity.getUsername();
        this.highScore = gameEntity.getHighScore();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public List<Answer> getChoosenAnswers() {
        return choosenAnswers;
    }

    public void setChoosenAnswers(List<Answer> choosenAnswers) {
        this.choosenAnswers = choosenAnswers;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getHighScore() {
        return highScore;
    }

    public void setHighScore(String highScore) {
        this.highScore = highScore;
    }
}
