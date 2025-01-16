package br.com.roselabs.flashmind.controllers;

import br.com.roselabs.flashmind.dtos.DocumentDTO;
import br.com.roselabs.flashmind.dtos.FindAllDocumentDTO;
import br.com.roselabs.flashmind.services.DocumentService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/documents")
@RestController
@AllArgsConstructor
public class DocumentController {

    private final DocumentService documentService;

    @PostMapping("/create")
    @Transactional
    public ResponseEntity<DocumentDTO> create(@RequestBody DocumentDTO documentDTO) {
        DocumentDTO createdDocument = this.documentService.create(documentDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDocument);
    }

    @GetMapping
    public ResponseEntity<List<FindAllDocumentDTO>> findAll() {
        List<FindAllDocumentDTO> documents = this.documentService.findAll();
        return ResponseEntity.ok(documents);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DocumentDTO> findById(@PathVariable Long id) {
        DocumentDTO document = this.documentService.findById(id);
        return ResponseEntity.ok(document);
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<DocumentDTO> update(@PathVariable Long id, @RequestBody DocumentDTO documentDTO) {
        DocumentDTO updatedDocument = this.documentService.update(id, documentDTO);
        return ResponseEntity.ok(updatedDocument);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> delete(@PathVariable Long id) {
        this.documentService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
