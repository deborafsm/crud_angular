package com.debora.spring_crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.debora.spring_crud.model.Course;

// Facilita acesso ao banco de dados
@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
