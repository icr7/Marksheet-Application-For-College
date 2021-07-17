package com.icr7.Marksheet.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.icr7.Marksheet.entity.AdminEntity;

public interface AdminRepo extends JpaRepository<AdminEntity, Integer> {

}
