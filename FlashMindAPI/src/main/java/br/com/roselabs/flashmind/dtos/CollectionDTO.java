package br.com.roselabs.flashmind.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class CollectionDTO {
    private Long id;
    private String title;
    private List<FlashCardDTO> flashCards;
}
