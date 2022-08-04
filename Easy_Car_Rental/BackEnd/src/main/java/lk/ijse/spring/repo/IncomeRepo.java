package lk.ijse.spring.repo;

import lk.ijse.spring.dto.IncomeDTO;
import lk.ijse.spring.entity.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 8/4/2022
 */
public interface IncomeRepo extends JpaRepository<Income,String> {
    @Query(value = "select date (returnDate),sum(r.totalPayment) from rentals re,returnrentals r where re.renId=r.renId group by date(returnDate)",nativeQuery = true)
    List<Income> getDailyIncome();

    @Query(value = "select month(returnDate),sum(r.totalPayment) from rentals re,returnrentals r where re.renId=r.renId group by month(returnDate)",nativeQuery = true)
    List<Income> getMonthlyIncome();

    @Query(value = "select year(returnDate),sum(r.totalPayment) from rentals re,returnrentals r where re.renId=r.renId group by year(returnDate)",nativeQuery = true)
    List<Income> getAnnalIncome();
}
