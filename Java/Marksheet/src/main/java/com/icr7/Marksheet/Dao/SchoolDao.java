package com.icr7.Marksheet.Dao;

import java.util.List;

import com.icr7.Marksheet.entity.AdminEntity;
import com.icr7.Marksheet.entity.StudentEntity;

public interface SchoolDao {
	public AdminEntity getAdminData(int id);

	public StudentEntity getStudentData(int id);

	public List<StudentEntity> getAllStudentData();

	public void RegisterNewStudent(StudentEntity entity);

	public void updateStudentMarks(StudentEntity entity);

}
