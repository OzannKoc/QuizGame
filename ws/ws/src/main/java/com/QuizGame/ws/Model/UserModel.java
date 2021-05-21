package com.QuizGame.ws.Model;


import com.QuizGame.ws.Entity.User;

public class UserModel {

	private String username ;

	private String displayName ;

	public UserModel() {
	}

	public UserModel(User user) {
		this.setUsername(user.getUsername());
		this.setDisplayName(user.getDisplayName());
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDisplayName() {
		return displayName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}
}
