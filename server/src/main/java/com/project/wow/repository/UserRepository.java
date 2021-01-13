package com.project.wow.repository;

import com.project.wow.dao.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  User findUserByEmail(String mail);
  User findByUserName(String userName);
}
