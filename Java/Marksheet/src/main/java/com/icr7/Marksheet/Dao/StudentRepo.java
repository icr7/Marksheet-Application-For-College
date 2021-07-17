package com.icr7.Marksheet.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.icr7.Marksheet.entity.StudentEntity;

public interface StudentRepo extends JpaRepository<StudentEntity, Integer> {

}
