package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Tharindu Nilanga
 * @created 7/12/2022
 */
public interface CarRepo extends JpaRepository<Car,String> {
}
