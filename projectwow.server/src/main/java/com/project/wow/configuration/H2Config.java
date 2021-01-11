package com.project.wow.configuration;

import org.h2.tools.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.sql.SQLException;

@Configuration
public class H2Config {

    @Bean
    public Server createServer() throws SQLException {
        return Server.createTcpServer("-tcp");
    }
}
