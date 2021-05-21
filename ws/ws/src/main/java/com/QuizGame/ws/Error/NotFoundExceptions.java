package com.QuizGame.ws.Error;



import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NotFoundExceptions extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
}
