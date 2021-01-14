package com.project.wow.exception;

public class EntityNotFoundException extends RuntimeException {

  public EntityNotFoundException(Long id, Class tClass) {
    super(String.format("Could not find entity of type %s with id %d", tClass.getSimpleName(), id));
  }
}
