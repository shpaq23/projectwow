package com.project.wow.exception;

public class InvalidLoginOrPasswordEception extends RuntimeException {

    private Class aClass;

    public InvalidLoginOrPasswordEception(String message) {
        super(message);
    }

    public InvalidLoginOrPasswordEception(String message, Class aClass) {
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
