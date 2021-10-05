package com.foodbox.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Purchase {
	@Id
	private long id;
	private float totalcost;
	private Date dop;
	private int quantity;
	private int productid;
	@OneToOne
	private Customer customer;
	
	
	public Purchase(long id, float totalcost, Date dop, int quantity, int productid, Customer customer) {
		super();
		this.id = id;
		this.totalcost = totalcost;
		this.dop = dop;
		this.quantity = quantity;
		this.productid = productid;
		this.customer = customer;
	}
	
	
	public Purchase() {
		super();
	}


	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public float getTotalcost() {
		return totalcost;
	}
	public void setTotalcost(float totalcost) {
		this.totalcost = totalcost;
	}
	public Date getDop() {
		return dop;
	}
	public void setDop(Date dop) {
		this.dop = dop;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getProductid() {
		return productid;
	}
	public void setProductid(int productid) {
		this.productid = productid;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	
}
