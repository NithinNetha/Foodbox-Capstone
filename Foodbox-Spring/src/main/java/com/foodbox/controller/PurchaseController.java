package com.foodbox.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.exception.ResourceNotFoundException;
import com.foodbox.model.Purchase;
import com.foodbox.repository.PurchaseRepository;

@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RestController
public class PurchaseController {
	
	@Autowired
	private PurchaseRepository purchaseRepository;
	
	@GetMapping("/purchase/byEmail/{email}")
	public List<Purchase> customerOrders(@PathVariable String email) {
		return purchaseRepository.getByEmail(email);
	}
	
	@GetMapping("/purchase")
	public List<Purchase> getAllPurchase(){
		return purchaseRepository.findAllByOrderByTransactionidAsc();
	}
	
	@DeleteMapping("/purchase/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePurchase(@PathVariable Long id) {
		Purchase purchase = purchaseRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Purchase Id not found with "+id));
		purchaseRepository.delete(purchase);
		Map<String, Boolean> map = new HashMap<>();
		map.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(map);
	}
	
	@GetMapping("/purchase/search/{keyword}")
	public List<Purchase> searchPurchase(@PathVariable String keyword){
		return purchaseRepository.searchPurchase(keyword);
	}
}
