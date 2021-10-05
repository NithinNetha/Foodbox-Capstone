package com.foodbox.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.model.Customer;
import com.foodbox.repository.CustomerRepository;

@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RestController
public class CustomerController {

	@Autowired
	private CustomerRepository customerRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/customers")
	public Customer addCustomer(@RequestBody Customer customer, HttpSession session) {
		session.setAttribute("cust_email", customer.getEmail());
		return customerRepository.save(customer);
	}
	
	@SuppressWarnings("rawtypes")
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/customers/{email}")
	public boolean verifyLogin(@RequestBody Map loginData, @PathVariable(name = "email") String email, HttpSession session) {
		String lemail = (String) loginData.get("email");
		String lpassword = (String) loginData.get("password");
		Customer customer = customerRepository.findByEmail(email);
		if(customer!= null && customer.getEmail().equals(lemail) && customer.getPassword().equals(lpassword)) {
			session.setAttribute("cust_email", lemail);
			return true;
		}else {
			return false; 
		}
	}
}
