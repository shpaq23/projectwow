package com.project.wow.exception;

public class InvalidRequestException extends RuntimeException {

    private Class aClass;

    public InvalidRequestException(String message) {
        super(message);
    }

    public InvalidRequestException(String message, Class aClass) {
        super(message);
        this.aClass = aClass;
    }

    public Class getaClass() {
        return aClass;
    }

    public void setaClass(Class aClass) {
        this.aClass = aClass;
    }
}
