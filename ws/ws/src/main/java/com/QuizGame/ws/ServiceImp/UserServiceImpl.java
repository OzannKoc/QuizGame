package com.QuizGame.ws.ServiceImp;

import com.QuizGame.ws.Entity.User;
import com.QuizGame.ws.Error.NotFoundExceptions;
import com.QuizGame.ws.Model.UserModel;
import com.QuizGame.ws.Repository.UserRepository;
import com.QuizGame.ws.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@Transactional(rollbackFor = Exception.class)
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void save(User user) throws Exception {
        try {
            user.setPassword(this.passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
        } catch (Exception e) {
            throw new Exception(e.getMessage(),e.getCause());
        }

    }

    @Override
    public List<UserModel> getUsers() throws Exception {
        try {
            return userRepository.findAll().stream().map(UserModel::new).collect(Collectors.toList());
        }catch (Exception e){
            throw new Exception(e.getMessage(),e.getCause());
        }

    }

    @Override
    public User getUser(String username) {
        User inDB = userRepository.findByUsername(username);
        if (inDB == null) {
            throw new NotFoundExceptions();
        }
        return inDB;
    }


}
