package com.foodbox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.model.Product;
import com.foodbox.repository.ProductRepository;

import com.foodbox.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {
	
	@Autowired
	private ProductRepository productRepositpory;
	
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		return productRepositpory.findIfAvail();
	}
	
	@PostMapping("/products")
	public Product addProduct(@RequestBody Product product) {
		return productRepositpory.save(product);
	}
	
	@GetMapping("products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable long id) {
		Product product=productRepositpory.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Product Not Found with"+id));
		return ResponseEntity.ok(product);
	}
	
	@GetMapping("products/search/{keyword}")
	public List<Product> getSearchProducts(@PathVariable String keyword){
		return productRepositpory.homeSearch(keyword);
	}
	
	@GetMapping("products/chinese")
	public List<Product> getChinese(){
		return productRepositpory.getChinese();
	}
	
	@GetMapping("products/indian")
	public List<Product> getIndian(){
		return productRepositpory.getIndian();
	}
	
	@GetMapping("products/mexican")
	public List<Product> getMexican(){
		return productRepositpory.getMexican();
	}
	
	@GetMapping("products/italian")
	public List<Product> getItalian(){
		return productRepositpory.getItalian();
	}
}