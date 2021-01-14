package com.project.wow.enums;

public enum ErrorCodes {

    INVALID_LOGIN_OR_PASSWORD(-1),
    INVALID_EMAIL(-2),

    USER_ALREADY_EXISTS(-10),
    USER_NOT_FOUND(-11);


    private final int number;
    private final String name;

    ErrorCodes(int number) {
        this.number = number;
        this.name = name();
    }

}
