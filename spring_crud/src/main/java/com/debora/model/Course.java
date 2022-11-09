package com.debora.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
    // Diz que é chave primaria
    @Id
    // Incrementa o ID automaticamente pelo bd
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    // A ANOTATION Column tem várias propriedades para colunas do banco de dados, como
    // nome, tamanho maximo para o dado etc
    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 10, nullable = false)
    private String category;

}
