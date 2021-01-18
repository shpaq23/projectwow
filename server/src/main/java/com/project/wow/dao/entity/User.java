package com.project.wow.dao.entity;

import com.project.wow.enums.Role;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "USER")
public class User {

    @Id
    @GeneratedValue
    private Long id;

    private String email;

    private String password;

    private Timestamp lastSuccessfulLogin;

    private Timestamp lastFailedLogin;

    private Role role;

    @OneToOne
    @JoinColumn(name = "CHARACTER_ID")
    private Character character;


    public void setCharacter(Character character) {
        if (sameAsFormer(character))
            return;
        Character oldAccount = this.character;
        this.character = character;
        if (oldAccount!=null)
            oldAccount.setUser(null);
        if (character!=null)
            character.setUser(this);
    }
    private boolean sameAsFormer(Character newCharacter) {
        return Objects.equals(character, newCharacter);
    }
    public User() {
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Character getCharacter() {
        return character;
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
