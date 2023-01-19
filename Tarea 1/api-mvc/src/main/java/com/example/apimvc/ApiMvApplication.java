package com.example.apimvc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import java.util.prefs.AbstractPreferences;


@Configuration
@ComponentScan(basePackages = "uia.com.api")
@Import({AppMvConfig.class})
@EnableAutoConfiguration
public class ApiMvApplication extends SpringBootServletInitializer{

    private static Class applicationClass = ApiMvApplication.class;

    public static void main (String[] args){ SpringApplication.run(ApiMvApplication.class, args); }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application){
        return application.sources(applicationClass);
    }
}
