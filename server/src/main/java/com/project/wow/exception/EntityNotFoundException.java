package com.project.wow.exception;


import com.project.wow.enums.ErrorCodes;

public class EntityNotFoundException extends RuntimeException {

    private Class aClass;

    public EntityNotFoundException(String message) {
        super(message);
    }

    public EntityNotFoundException(String message, Class aClass) {
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
