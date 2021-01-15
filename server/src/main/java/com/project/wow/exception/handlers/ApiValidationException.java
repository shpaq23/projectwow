package com.project.wow.exception.handlers;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;



@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
class ApiValidationError extends ApiSubErrors{
    private String object;
    private String field;
    private Object rejectedValue;
    private String message;

    ApiValidationError(String object, String message) {
        this.object = object;
        this.message = message;
    }
}