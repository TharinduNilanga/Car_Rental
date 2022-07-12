package lk.ijse.spring.repo;

import lk.ijse.spring.entity.CarDetails;
import lk.ijse.spring.entity.CarDetails_PK;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Tharindu Nilanga
 * @created 7/12/2022
 */
public interface CarDetailsRepo extends JpaRepository<CarDetails, CarDetails_PK> {
}
