package br.com.roselabs.flashmind.controllers;

import br.com.roselabs.flashmind.dtos.DocumentDTO;
import br.com.roselabs.flashmind.dtos.FlashCardRequestDTO;
import br.com.roselabs.flashmind.services.FlashCardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/ai")
@RestController
@RequiredArgsConstructor
public class AIController {

    private final FlashCardService flashCardService;

    @PostMapping("/generate")
    public ResponseEntity<List<FlashCardRequestDTO>> generateFlashCards(@RequestBody DocumentDTO documentDTO) {
        List<FlashCardRequestDTO> flashCardRequestDTOS = this.flashCardService.generateFlashCards(documentDTO);

        return ResponseEntity.ok(flashCardRequestDTOS);
    }

}
