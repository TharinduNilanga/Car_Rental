package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * @author Tharindu Nilanga
 * @created 7/10/2022
 */
@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo repo;

    @Autowired
    private ModelMapper mapper;

    /*@Override
    public String generateCustomerId() {
        if (!repo.getId()==null){
            String id = repo.getId();
            int newId = Integer.parseInt(id.replace("C", ""));
            return String.format("C%03d",newId+1);
        }else {
            return "C001";
        }
    }*/

    @Override
    public void saveCustomer(CustomerDTO dto) {
        if (!repo.existsById(dto.getEMail())){
            repo.save(mapper.map(dto, Customer.class));
        }else {
            throw new RuntimeException("Customer already exists....!");
        }
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if (repo.existsById(dto.getEMail())){
            repo.save(mapper.map(dto,Customer.class));
        }else {
            throw new RuntimeException("Customer Updated failed....!");
        }
    }

    @Override
    public void deleteCustomer(String id) {
        if (repo.existsById(id)){
            repo.deleteById(id);
        }else {
            throw new RuntimeException("Customer "+id+" not exists...Please try again.....!");
        }
    }

    @Override
    public CustomerDTO searchCustomer(String id) {
      if (repo.existsById(id)){
          return mapper.map(repo.findById(id).get(),CustomerDTO.class);
      }else {
          throw new RuntimeException("Customer"+id+"not exists...!");
      }
    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        return mapper.map(repo.findAll(),new TypeToken<List<CustomerDTO>>(){}.getType());
    }
}
