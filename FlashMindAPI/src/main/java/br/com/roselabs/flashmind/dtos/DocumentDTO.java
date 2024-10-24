package br.com.roselabs.flashmind.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class DocumentDTO {
    private Long id;
    private String title;
    private String content;
}
