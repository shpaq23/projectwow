package com.project.wow.exception;


import com.project.wow.enums.ErrorCodes;

public class ApiException extends RuntimeException {

    private final ErrorCodes errorCode;
    private final Throwable exception;
    private final String message;

    public ApiException(String msg, ErrorCodes result) {
        super(msg);
        this.exception = null;
        this.message = msg;
        this.errorCode = result;
    }

    public ApiException(ErrorCodes errorCode, Throwable exception, String message) {
        this.errorCode = errorCode;
        this.exception = exception;
        this.message = message;
    }

}
