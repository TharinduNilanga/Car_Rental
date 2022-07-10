package lk.ijse.spring.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * @author Tharindu Nilanga
 * @created 7/10/2022
 */
@EnableWebMvc
@Configuration
@ComponentScan(basePackages = "lk.ijse.spring")
public class WebAppConfig {

    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
