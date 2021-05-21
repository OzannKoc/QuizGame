package com.QuizGame.ws.Entity;

import com.QuizGame.ws.Model.GameModel;

import javax.persistence.*;
import java.util.List;

@Entity
public class GameEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToMany
    @JoinTable(name = "GAME_QUESTIONS",
            joinColumns = @JoinColumn(name = "GAME_ID"),
            inverseJoinColumns = @JoinColumn(name = "QUESTION_ID"))
    private List<Question> questions;

    @ManyToMany
    @JoinTable(name = "GAME_ANSWERS",
            joinColumns = @JoinColumn(name = "GAME_ID"),
            inverseJoinColumns = @JoinColumn(name = "ANSWER_ID"))
    private List<Answer> choosenAnswers;

    private String username;

    private String highScore;

    public GameEntity() {
    }

    public GameEntity(GameModel gameModel) {
        this.questions = gameModel.getQuestions();
        this.choosenAnswers = gameModel.getChoosenAnswers();
        this.username = gameModel.getUsername();
        this.highScore = gameModel.getHighScore();
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
