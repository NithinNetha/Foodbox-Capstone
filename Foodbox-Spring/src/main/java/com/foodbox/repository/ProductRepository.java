package com.foodbox.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodbox.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	List<Product> findByOrderByCategoryAsc();
}
