package com.project.wow.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {


  @ExceptionHandler(EntityNotFoundException.class)
  public ResponseEntity<Object> entityNotFoundHandler(EntityNotFoundException ex, WebRequest webRequest) {
    return handleExceptionInternal(ex, ex.getMessage(), HttpHeaders.EMPTY, HttpStatus.NOT_FOUND, webRequest);
  }


}
