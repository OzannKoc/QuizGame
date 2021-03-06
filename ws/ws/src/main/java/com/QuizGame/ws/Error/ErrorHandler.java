package com.QuizGame.ws.Error;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ErrorHandler implements ErrorController{
	
	
	@Autowired
	private ErrorAttributes errorAttributes ;
	
	@RequestMapping("/error")
	public ApiError handlerErrors(WebRequest webRequest) {
		Map<String, Object> att =  errorAttributes.getErrorAttributes(webRequest,ErrorAttributeOptions.of(ErrorAttributeOptions.Include.STACK_TRACE, ErrorAttributeOptions.Include.MESSAGE, ErrorAttributeOptions.Include.EXCEPTION, ErrorAttributeOptions.Include.BINDING_ERRORS));
		String message = (String)att.get("message");
		String path  = (String)att.get("path");
		int status = (Integer)att.get("status");
		
		ApiError apiError = new ApiError(status, message, path); 
		
		if(att.containsKey("errors")) {

			List<FieldError>errors = (List<FieldError>)att.get("errors");
			Map<String,String> validationErrors = new HashMap<>();
			for (FieldError fieldError : errors) {
				validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
			}
			apiError.setValidationErrors(validationErrors);
		}
		
		return apiError;
			
	}
		
	
	@Override
	public String getErrorPath() {
		// TODO Auto-generated method stub
		return "/error";
	}

}
