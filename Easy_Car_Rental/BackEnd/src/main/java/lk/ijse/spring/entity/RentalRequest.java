package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/13/2022
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class RentalRequest {
    @Id
    private String reqId;
    private String cusEmail;
    private String lossDamageWaiverSlip;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "cusEmail",referencedColumnName = "eMail",insertable = false,updatable = false)
    private Customer customer;

    @OneToMany(mappedBy = "rentalRequest",cascade = CascadeType.ALL)
    private List<RentalRequestDetails> rentalRequestDetails;



}
