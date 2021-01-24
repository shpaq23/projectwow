package com.project.wow.configuration.rest.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class CustomRequestLoggingInterceptor extends HandlerInterceptorAdapter {

    private static final Logger log = LoggerFactory.getLogger(CustomRequestLoggingInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        log.info("REQUEST: method=[{}], path = [{}]", request.getMethod(), request.getRequestURI());
        return true;
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        log.info("RESPONSE: status= [{}] code = [{}]", HttpStatus.resolve(response.getStatus()).name(), response.getStatus());
    }
}