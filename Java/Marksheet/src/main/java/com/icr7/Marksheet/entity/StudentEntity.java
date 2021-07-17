package com.icr7.Marksheet.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "studenttable")
public class StudentEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column(name = "name")
	private String name;

	@Column(name = "password")
	private String password;

	@Column(name = "english")
	private int english;

	@Column(name = "hindi")
	private int hindi;

	@Column(name = "maths")
	private int maths;

	@Column(name = "science")
	private int science;

	@Column(name = "sst")
	private int sst;

	public StudentEntity() {
		// TODO Auto-generated constructor stub
	}

	public StudentEntity(String name, String password, int english, int hindi, int maths, int science, int sst) {
		super();
		this.name = name;
		this.password = password;
		this.english = english;
		this.hindi = hindi;
		this.maths = maths;
		this.science = science;
		this.sst = sst;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getEnglish() {
		return english;
	}

	public void setEnglish(int english) {
		this.english = english;
	}

	public int getHindi() {
		return hindi;
	}

	public void setHindi(int hindi) {
		this.hindi = hindi;
	}

	public int getMaths() {
		return maths;
	}

	public void setMaths(int maths) {
		this.maths = maths;
	}

	public int getScience() {
		return science;
	}

	public void setScience(int science) {
		this.science = science;
	}

	public int getSst() {
		return sst;
	}

	public void setSst(int sst) {
		this.sst = sst;
	}

	@Override
	public String toString() {
		return "StudentEntity [id=" + id + ", name=" + name + ", password=" + password + ", english=" + english
				+ ", hindi=" + hindi + ", maths=" + maths + ", science=" + science + ", sst=" + sst + "]";
	}

}
