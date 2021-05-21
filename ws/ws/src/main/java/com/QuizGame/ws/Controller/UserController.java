package com.QuizGame.ws.Controller;


import com.QuizGame.ws.Entity.User;
import com.QuizGame.ws.Model.UserModel;
import com.QuizGame.ws.Service.UserService;
import com.QuizGame.ws.Utils.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.function.Function;


@RestController
@RequestMapping("/api")
public class UserController {
 
	
	@Autowired	
	private UserService userService;
	
		@PostMapping("/users")
 		public GenericResponse UserSignUp(@Valid @RequestBody User user) throws Exception {
			userService.save(user);
			return new GenericResponse("User created.");
 			
 		}
		
		@GetMapping("/users")
		public List<UserModel> getUsers() throws Exception {
			return userService.getUsers();
		}
		
		@GetMapping("/users/{username}")
		public UserModel getUser(@PathVariable String username) throws Exception {
			User user  = userService.getUser(username);
			
			return new UserModel(user);
		}


}
