package com.QuizGame.ws.Controller;

import com.QuizGame.ws.Entity.User;
import com.QuizGame.ws.Model.UserModel;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @PostMapping("/api/auth")
    public UserModel handleAuthentication(@AuthenticationPrincipal User user) {

        return new UserModel(user);
    }

}
