package br.com.roselabs.flashmind.controllers;

import br.com.roselabs.flashmind.dtos.CollectionDTO;
import br.com.roselabs.flashmind.dtos.CollectionRequestDTO;
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
    public ResponseEntity<CollectionDTO> createCollection(@RequestBody CollectionRequestDTO collectionRequestDTO) {
        return ResponseEntity.ok(collectionService.createCollection(collectionRequestDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CollectionDTO> getCollection(@PathVariable Long id) {
        return ResponseEntity.ok(collectionService.getCollection(id));
    }

    @GetMapping
    public ResponseEntity<List<CollectionDTO>> getAllCollections() {
        return ResponseEntity.ok(collectionService.getAllCollections());
    }

    @PutMapping("/{id}")
    public ResponseEntity<CollectionDTO> updateCollection(@PathVariable Long id, @RequestBody CollectionRequestDTO collectionRequestDTO) {
        return ResponseEntity.ok(collectionService.updateCollection(id, collectionRequestDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCollection(@PathVariable Long id) {
        collectionService.deleteCollection(id);
        return ResponseEntity.noContent().build();
    }
}
