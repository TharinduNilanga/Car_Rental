package lk.ijse.spring.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author Tharindu Nilanga
 * @created 7/10/2022
 */
@EnableWebMvc
@Configuration
@ComponentScan(basePackages = "lk.ijse.spring")
public class WebAppConfig implements WebMvcConfigurer {

    public ModelMapper modelMapper(){
        return new ModelMapper();
    }

    @Bean
    public MultipartResolver multipartResolver(){
        return new StandardServletMultipartResolver();
    }

    public void addResourceHandlers(ResourceHandlerRegistry registry){
        registry.addResourceHandler("/uploads/**").addResourceLocations("/uploads/");
    }
}
