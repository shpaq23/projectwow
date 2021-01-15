package com.project.wow.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
public class EntityAlreadyExists extends RuntimeException {

    private Class aClass;

    public EntityAlreadyExists(String message) {
        super(message);
    }

    public EntityAlreadyExists(String message, Class aClass) {
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
