package br.com.FlashMindAPI.domain.document;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Table(name = "documents")
@Entity(name = "Document")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Data
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(insertable = false, updatable = false)
    private Long id;

    private String title;

    private String content;

    public Document(DocumentDTO documentDTO) {
        this.title = documentDTO.getTitle();
        this.content = documentDTO.getContent();
    }
}
