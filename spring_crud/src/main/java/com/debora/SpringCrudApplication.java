package com.debora;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.debora.model.Course;
import com.debora.repository.CourseRepository;

@SpringBootApplication
public class SpringCrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringCrudApplication.class, args);
	}

	// @Bean
	// Gerenciar todo o ciclo de vida;
	// CommandLineRunner initDatabase(CourseRepository courseRepository) {
	// 	return args -> {
	// 		courseRepository.deleteAll();
	// 		Course c = new Course();
	// 		c.setName("Angular");
	// 		c.setCategory("Front-end");
	// 		Course c1 = new Course();
	// 		c1.setName("Spring");
	// 		c1.setCategory("Back-end");
	// 		courseRepository.save(c);
	// 		courseRepository.save(c1);
	// 	};

	// }
}
