package br.com.roselabs.flashmind.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class CollectionRequestDTO {
    private String title;
    private List<FlashCardRequestDTO> flashCards = new ArrayList<>();
}
