package com.project.wow.exception.handlers;

import com.auth0.jwt.exceptions.TokenExpiredException;
import com.project.wow.exception.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);


    @ExceptionHandler(EntityNotFoundException.class)
    protected ResponseEntity<Object> handleEntityNotFound(EntityNotFoundException ex) {
        ApiError apiError = new ApiError(NOT_FOUND, ex.getMessage(), ex.getaClass().getSimpleName());
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(EntityAlreadyExistsException.class)
    protected ResponseEntity<Object> handleEntityNotFound(EntityAlreadyExistsException ex) {
        ApiError apiError = new ApiError(HttpStatus.UNPROCESSABLE_ENTITY, ex.getMessage(), ex.getaClass().getSimpleName());
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(InvalidLoginOrPasswordEception.class)
    protected ResponseEntity<Object> handleEntityNotFound(InvalidLoginOrPasswordEception ex) {
        ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, ex.getMessage(), ex.getaClass().getSimpleName());
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(InvalidRequestException.class)
    protected ResponseEntity<Object> handleEntityNotFound(InvalidRequestException ex) {
        ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, ex.getMessage());
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(TokenExpiredException.class)
    protected ResponseEntity<Object> handleEntityNotFound(TokenExpiredException ex) {
        ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, ex.getMessage());
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(CannotCreateCharacterException.class)
    protected ResponseEntity<Object> handleEntityNotFound(CannotCreateCharacterException ex) {
        ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, ex.getMessage());
        return buildResponseEntity(apiError);
    }


    private ResponseEntity<Object> buildResponseEntity(ApiError apiError) {
        logger.error(apiError.getMessage());
        return new ResponseEntity<>(apiError, apiError.getStatus());
    }


}
