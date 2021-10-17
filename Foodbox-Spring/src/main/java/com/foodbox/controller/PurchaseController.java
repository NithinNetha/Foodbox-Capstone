package com.foodbox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.model.Purchase;
import com.foodbox.repository.PurchaseRepository;

@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RestController
public class PurchaseController {
	
	@Autowired
	private PurchaseRepository purchaseRepository;
	
	@GetMapping("purchase/byEmail/{email}")
	public List<Purchase> customerOrders(@PathVariable String email) {
		return purchaseRepository.getByEmail(email);
	}
}
