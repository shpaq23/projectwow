package com.project.wow.exception.handlers;

import com.project.wow.exception.EntityAlreadyExists;
import com.project.wow.exception.EntityNotFoundException;
import com.project.wow.exception.InvalidLoginOrPasswordEception;
import com.project.wow.exception.InvalidRequestException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {


    @ExceptionHandler(EntityNotFoundException.class)
    protected ResponseEntity<Object> handleEntityNotFound(EntityNotFoundException ex) {
        ApiError apiError = new ApiError(NOT_FOUND, ex.getMessage(), ex.getaClass().getSimpleName());
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(EntityAlreadyExists.class)
    protected ResponseEntity<Object> handleEntityNotFound(EntityAlreadyExists ex) {
        ApiError apiError = new ApiError(HttpStatus.UNPROCESSABLE_ENTITY, ex.getMessage(), ex.getaClass().getSimpleName());
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(InvalidLoginOrPasswordEception.class)
    protected ResponseEntity<Object> handleEntityNotFound(InvalidLoginOrPasswordEception ex) {
        ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, ex.getMessage(), ex.getaClass().getSimpleName());
        return buildResponseEntity(apiError);
    }








    private ResponseEntity<Object> buildResponseEntity(ApiError apiError) {
        return new ResponseEntity<>(apiError, apiError.getStatus());
    }


}
