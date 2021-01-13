package com.project.wow.utils.mappers;


import com.project.wow.dao.entity.User;
import com.project.wow.dto.LoginRequest;
import com.project.wow.dto.RegisterRequest;

public interface UserMapper {
  User sourceToDestination(RegisterRequest request);
}
