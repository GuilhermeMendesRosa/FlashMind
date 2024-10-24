package br.com.roselabs.flashmind.entities;

import br.com.roselabs.flashmind.dtos.DocumentDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "documents")
@EqualsAndHashCode(of = "id")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(insertable = false, updatable = false)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    public Document(DocumentDTO documentDTO) {
        this.title = documentDTO.getTitle();
        this.content = documentDTO.getContent();
    }
}