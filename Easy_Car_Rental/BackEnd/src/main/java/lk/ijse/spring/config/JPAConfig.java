package lk.ijse.spring.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.naming.NamingException;
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

/**
 * @author Tharindu Nilanga
 * @created 7/10/2022
 */
@Configuration
@EnableJpaRepositories(basePackages = "lk.ijse.spring.repo")
@EnableTransactionManagement
public class JPAConfig {

        @Bean
        public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource ds, JpaVendorAdapter va){
            LocalContainerEntityManagerFactoryBean bean = new LocalContainerEntityManagerFactoryBean();
            bean.setJpaVendorAdapter(va);//set vendor
            bean.setDataSource(ds);//connection
            bean.setPackagesToScan("lk.ijse.spring.entity");//location of en

            return bean;
        }
        @Bean
        public DataSource dataSource() throws NamingException {
            DriverManagerDataSource dataSource = new DriverManagerDataSource();
            dataSource.setUrl("jdbc:mysql://127.0.0.1:3306/easyCarRental?createDatabaseIfNotExist=true");
            dataSource.setUsername("root");
            dataSource.setPassword("1234");
            dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
            return dataSource;
            /*return (DataSource) new JndiTemplate().lookup("java:/comp/env/jdbc/pool");*/
        }


        @Bean
        public JpaVendorAdapter jpaVendorAdapter(){
            HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
            vendorAdapter.setDatabasePlatform("org.hibernate.dialect.MySQL8Dialect");
            vendorAdapter.setDatabase(Database.MYSQL);
            vendorAdapter.setShowSql(true);
            vendorAdapter.setGenerateDdl(true);
            return vendorAdapter;
        }

        @Bean
        public PlatformTransactionManager transactionManager(EntityManagerFactory emf){
            return new JpaTransactionManager(emf);
        }


}
