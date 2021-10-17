package com.foodbox.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.foodbox.model.Purchase;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
	@Query("Select p FROM Purchase p WHERE p.customer.email LIKE %?1%")
	public List<Purchase> getByEmail(String email);
}
