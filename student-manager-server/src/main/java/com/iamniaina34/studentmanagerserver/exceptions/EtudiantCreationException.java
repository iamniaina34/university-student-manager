package com.iamniaina34.studentmanagerserver.exceptions;

import org.springframework.dao.DataIntegrityViolationException;

public class EtudiantCreationException extends DataIntegrityViolationException {
    public EtudiantCreationException(String message) {
        super(message);
    }
}
