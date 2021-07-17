package com.icr7.Marksheet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.icr7.Marksheet.Dao.SchoolDao;
import com.icr7.Marksheet.entity.AdminEntity;
import com.icr7.Marksheet.entity.StudentEntity;

@Component
public class LoginService {

	@Autowired
	SchoolDao schoolDao;

	public StudentEntity StudentLogin(int id, String password) {
		if (schoolDao.getStudentData(id).getPassword().equals(password)) {
			return schoolDao.getStudentData(id);
		} else
			return null;
	}

	public AdminEntity AdminLogin(int id, String password) {
		if (schoolDao.getAdminData(id).getPassword().equals(password)) {
			return schoolDao.getAdminData(id);
		} else
			return null;
	}

}
