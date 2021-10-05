package com.foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodbox.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, String> {
	Customer findByEmail(String email);
}
