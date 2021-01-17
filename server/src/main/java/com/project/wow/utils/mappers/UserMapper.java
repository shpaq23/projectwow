package com.project.wow.utils.mappers;


import com.project.wow.dao.entity.User;
import com.project.wow.dao.UserDetails;
import com.project.wow.dto.RegisterRequest;
import org.mapstruct.Mapper;

@Mapper
public interface UserMapper {

  User sourceToDestination(RegisterRequest request);

  UserDetails toDetailsDTO(User user);

  User toEntityFromRequest(RegisterRequest request);
}
