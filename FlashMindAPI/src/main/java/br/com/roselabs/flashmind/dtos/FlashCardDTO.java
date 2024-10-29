package br.com.roselabs.flashmind.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FlashCardDTO {
    private Long id;
    private String front;
    private String back;
}
