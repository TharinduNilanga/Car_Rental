package lk.ijse.spring.repo;

import lk.ijse.spring.entity.ReturnRentals;
import lk.ijse.spring.dto.IncomeDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
public interface ReturnRentalsRepo  extends JpaRepository<ReturnRentals,String> {
    @Query(value = "SELECT retId FROM ReturnRentals ORDER BY retId DESC LIMIT 1",nativeQuery = true)
    String getId();

    /*@Query(value = "select date(returnDate),sum(r.totalPayment) from rentals re,returnrentals r where re.renId=r.renId group by date(returnDate)",nativeQuery = true)
    List<ReturnRentals> getDailyIncome();

    @Query(value = "select month(returnDate),sum(r.totalPayment) from rentals re,returnrentals r where re.renId=r.renId group by month(returnDate)",nativeQuery = true)
    List<IncomeDTO> getMonthlyIncome();

    @Query(value = "select year(returnDate),sum(r.totalPayment) from rentals re,returnrentals r where re.renId=r.renId group by year(returnDate)",nativeQuery = true)
    List<IncomeDTO> getAnnalIncome();*/
}
