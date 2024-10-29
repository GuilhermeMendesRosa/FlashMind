package br.com.roselabs.flashmind.controllers;

import br.com.roselabs.flashmind.dtos.DocumentDTO;
import br.com.roselabs.flashmind.services.DocumentService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/documents")
@RestController
public class DocumentController {

    @Autowired
    private DocumentService documentService;

    @PostMapping("/create")
    @Transactional
    public ResponseEntity<DocumentDTO> create(@RequestBody DocumentDTO documentDTO) {
        DocumentDTO createdDocument = this.documentService.create(documentDTO);
        return ResponseEntity.ok(createdDocument);
    }

    @GetMapping
    public ResponseEntity<List<DocumentDTO>> findAll() {
        List<DocumentDTO> documents = this.documentService.findAll();
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