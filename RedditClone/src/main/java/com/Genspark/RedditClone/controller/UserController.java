package com.Genspark.RedditClone.controller;

import com.Genspark.RedditClone.model.User;
import com.Genspark.RedditClone.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "new user is added";
    }

    @GetMapping("/getAll")
    public List<User> list(){
        return userService.getAllUsers();
    }
}
