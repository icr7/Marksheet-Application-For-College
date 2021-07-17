package com.icr7.Marksheet.Dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icr7.Marksheet.entity.AdminEntity;
import com.icr7.Marksheet.entity.StudentEntity;

@Service
public class SchoolDaoImpl implements SchoolDao {

	@Autowired
	AdminRepo adminRepo;

	@Autowired
	StudentRepo studentRepo;

	@Override
	public AdminEntity getAdminData(int id) {

		return adminRepo.findById(id).orElse(null);
	}

	@Override
	public StudentEntity getStudentData(int id) {

		return studentRepo.findById(id).orElse(null);
	}

	@Override
	public List<StudentEntity> getAllStudentData() {

		List<StudentEntity> allStudentEntities = studentRepo.findAll();
		System.out.println(allStudentEntities);

		return allStudentEntities;
	}

	@Override
	public void RegisterNewStudent(StudentEntity studentEntity) {
		studentRepo.save(studentEntity);

	}

	@Override
	public void SaveStudentMarks(StudentEntity studentEntity) {
		studentRepo.save(studentEntity);

	}

}
