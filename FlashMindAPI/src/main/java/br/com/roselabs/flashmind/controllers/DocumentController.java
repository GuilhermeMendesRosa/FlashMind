package br.com.roselabs.flashmind.controllers;

import br.com.roselabs.flashmind.dtos.DocumentDTO;
import br.com.roselabs.flashmind.services.DocumentService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/documents")
@RestController
public class DocumentController {
    @Autowired
    private DocumentService documentService;

    @PostMapping("/create-document")
    @Transactional
    public ResponseEntity<?> create(@RequestBody DocumentDTO documentDTO) {
        this.documentService.create(documentDTO);

        return ResponseEntity.ok().build();
    }
}