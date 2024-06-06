package com.iamniaina34.studentmanagerserver.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(EtudiantCreationException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public String handleEtudiantCreationException(EtudiantCreationException exception) {
        return exception.getMessage();
    }

    @ExceptionHandler(EtudiantUpdateException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public String handleEtudiantUpdateException(EtudiantUpdateException exception) {
        return exception.getMessage();
    }
}
