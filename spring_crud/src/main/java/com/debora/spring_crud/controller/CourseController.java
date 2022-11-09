package com.debora.spring_crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.debora.spring_crud.repository.CourseRepository;

@RestController
@RequestMapping("/api/courses")
public class CourseController {
    
    @Autowired
    private CourseRepository courseRepository;

    @GetMapping
    public List<Object> list() {
        return null;
    }

}
