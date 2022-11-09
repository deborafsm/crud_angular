package com.debora.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.debora.model.Course;

// Facilita acesso ao banco de dados
@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
