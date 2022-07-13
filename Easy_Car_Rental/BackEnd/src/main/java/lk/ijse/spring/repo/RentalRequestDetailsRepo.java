package lk.ijse.spring.repo;

import lk.ijse.spring.entity.RentalRequestDetails;
import lk.ijse.spring.entity.RequestDetails_PK;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
public interface RentalRequestDetailsRepo  extends JpaRepository<RentalRequestDetails, RequestDetails_PK> {
}
