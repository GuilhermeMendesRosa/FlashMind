package br.com.roselabs.flashmind.controllers;

import br.com.roselabs.flashmind.dtos.CollectionDTO;
import br.com.roselabs.flashmind.dtos.CreateCollectionDTO;
import br.com.roselabs.flashmind.dtos.FlashCardDTO;
import br.com.roselabs.flashmind.dtos.SimpleCollectionDTO;
import br.com.roselabs.flashmind.services.CollectionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/collections")
@RequiredArgsConstructor
public class CollectionController {

    private final CollectionService collectionService;

    @PostMapping
    public ResponseEntity<CollectionDTO> createCollection(@RequestBody CreateCollectionDTO createCollectionDTO) {
        return ResponseEntity.ok(collectionService.createCollection(createCollectionDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CollectionDTO> getCollection(@PathVariable Long id) {
        return ResponseEntity.ok(collectionService.getCollection(id));
    }

    @GetMapping
    public ResponseEntity<List<SimpleCollectionDTO>> getAllCollections() {
        List<SimpleCollectionDTO> allCollections = collectionService.getAllCollections();
        return ResponseEntity.ok(allCollections);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CollectionDTO> updateCollection(@PathVariable Long id, @RequestBody CreateCollectionDTO createCollectionDTO) {
        return ResponseEntity.ok(collectionService.updateCollection(id, createCollectionDTO));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<CollectionDTO> addFlashCards(@PathVariable Long id, @RequestBody List<FlashCardDTO> flashCardDTOS) {
        return ResponseEntity.ok(collectionService.addFlashCards(id, flashCardDTOS));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCollection(@PathVariable Long id) {
        collectionService.deleteCollection(id);
        return ResponseEntity.noContent().build();
    }
}
