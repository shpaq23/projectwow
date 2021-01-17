package com.project.wow.dao.entity;

import com.project.wow.enums.Role;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "USER")
public class User {

    @Id
    @GeneratedValue
    private Long id;

    private String userName;

    private String email;

    private String password;

    private Timestamp lastSuccessfulLogin;

    private Timestamp lastFailedLogin;

    private Role role;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "CHARACTER_ID", referencedColumnName = "id")
    private Character character;


    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Character getCharacter() {
        return character;
    }

    public void setCharacter(Character character) {
        this.character = character;
    }

    public Timestamp getLastFailedLogin() {
        return lastFailedLogin;
    }

    public void setLastFailedLogin(Timestamp lastFailedLogin) {
        this.lastFailedLogin = lastFailedLogin;
    }

    public Timestamp getLastSuccessfulLogin() {
        return lastSuccessfulLogin;
    }

    public void setLastSuccessfulLogin(Timestamp lastLogin) {
        this.lastSuccessfulLogin = lastLogin;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
