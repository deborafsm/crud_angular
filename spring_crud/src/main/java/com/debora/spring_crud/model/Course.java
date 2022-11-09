package com.debora.spring_crud.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

// Erquivale ao Getter e Setters
@Data
// Entidade que faz o mapeamento com o banco de dados (Faz uma tabela com esses
// mesmos atributos somente se a table ter o msm nome da entidade)
// Senãp fpr user @Table
// @Table(name = "course")
@Entity
public class Course {

    private Long id;
    private String name;
    private String category;

}
