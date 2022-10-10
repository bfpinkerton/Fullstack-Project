package com.Genspark.RedditClone.service;


import com.Genspark.RedditClone.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
}
