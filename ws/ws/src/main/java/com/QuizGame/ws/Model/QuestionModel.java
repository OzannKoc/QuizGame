package com.QuizGame.ws.Model;

import com.QuizGame.ws.Entity.Answer;
import com.QuizGame.ws.Entity.Question;

import java.util.Collections;
import java.util.List;

public class QuestionModel {

    private long id ;

    private String questionContent;

    private Answer correctAnswer;

    private List<Answer> answers;

    public QuestionModel(Question question) {
        this.id = question.getId();
        this.questionContent = question.getQuestionContent();
        this.correctAnswer = question.getCorrectAnswer();
        this.answers = question.getAnswers();
        Collections.shuffle(answers);
    }

    public QuestionModel() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getQuestionContent() {
        return questionContent;
    }

    public void setQuestionContent(String questionContent) {
        this.questionContent = questionContent;
    }

    public Answer getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(Answer correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }
}
