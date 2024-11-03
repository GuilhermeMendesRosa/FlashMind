package br.com.roselabs.flashmind.dtos;

import br.com.roselabs.flashmind.entities.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class FindAllDocumentDTO {
    private Long id;
    private String title;

    public FindAllDocumentDTO(Document document) {
        this.id = document.getId();
        this.title = document.getTitle();
    }

}
