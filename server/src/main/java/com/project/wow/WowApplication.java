package com.project.wow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class WowApplication {

    public static void main(String[] args) {
        SpringApplication.run(WowApplication.class, args);
    }

}
