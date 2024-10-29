package br.com.roselabs.flashmind.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@ToString
public class FlashCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String front;

    private String back;

    @ManyToOne
    @JoinColumn(name = "collection_id", nullable = false)
    private Collection collection;

    // Construtor adicional para facilitar criação com frente, verso e coleção
    public FlashCard(String front, String back, Collection collection) {
        this.front = front;
        this.back = back;
        this.collection = collection;
    }
}