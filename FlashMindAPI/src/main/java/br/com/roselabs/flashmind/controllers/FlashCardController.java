package br.com.roselabs.flashmind.controllers;

import br.com.roselabs.flashmind.dtos.FlashCardDTO;
import br.com.roselabs.flashmind.dtos.FlashCardRequestDTO;
import br.com.roselabs.flashmind.services.FlashCardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/collections/{collectionId}/flashcards")
@RequiredArgsConstructor
public class FlashCardController {

    private final FlashCardService flashCardService;

    @PostMapping
    public ResponseEntity<FlashCardDTO> createFlashCard(@PathVariable Long collectionId, @RequestBody FlashCardRequestDTO flashCardRequestDTO) {
        return ResponseEntity.ok(flashCardService.createFlashCard(collectionId, flashCardRequestDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<FlashCardDTO> getFlashCard(@PathVariable Long id) {
        return ResponseEntity.ok(flashCardService.getFlashCard(id));
    }

    @GetMapping
    public ResponseEntity<List<FlashCardDTO>> getAllFlashCards(@PathVariable Long collectionId) {
        return ResponseEntity.ok(flashCardService.getAllFlashCards(collectionId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FlashCardDTO> updateFlashCard(@PathVariable Long id, @RequestBody FlashCardRequestDTO flashCardRequestDTO) {
        return ResponseEntity.ok(flashCardService.updateFlashCard(id, flashCardRequestDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFlashCard(@PathVariable Long id) {
        flashCardService.deleteFlashCard(id);
        return ResponseEntity.noContent().build();
    }
}
