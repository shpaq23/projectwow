package com.project.wow.dto.auth;

public class TokenDetails {

    private String accessToken;


    public TokenDetails(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
