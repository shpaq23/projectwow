package com.project.wow.exception;



public class EntityAlreadyExistsException extends RuntimeException {

    private Class aClass;

    public EntityAlreadyExistsException(Class aClass) {
        super("Entity already exists");
        this.aClass = aClass;
    }

    public EntityAlreadyExistsException(String message) {
        super(message);
    }

    public EntityAlreadyExistsException(String message, Class aClass) {
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
