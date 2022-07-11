package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author Tharindu Nilanga
 * @created 7/10/2022
 */
public interface CustomerRepo extends JpaRepository<Customer,String> {
    /*@Query(value = "SELECT cusId FROM Customer ORDER BY cusId DESC LIMIT 1",nativeQuery = true)
    String getId();*/
}
