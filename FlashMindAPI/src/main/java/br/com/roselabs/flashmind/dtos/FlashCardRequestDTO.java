package br.com.roselabs.flashmind.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FlashCardRequestDTO {
    private String front;
    private String back;
}
