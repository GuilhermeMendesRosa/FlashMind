package br.com.roselabs.flashmind.dtos;

import br.com.roselabs.flashmind.entities.Collection;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SimpleCollectionDTO {
    private Long id;
    private String title;

    public SimpleCollectionDTO(Collection collection) {
        this.id = collection.getId();
        this.title = collection.getTitle();
    }

}
