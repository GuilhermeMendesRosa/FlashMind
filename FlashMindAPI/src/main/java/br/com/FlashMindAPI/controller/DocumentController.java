package br.com.FlashMindAPI.controller;

import br.com.FlashMindAPI.domain.document.DocumentDTO;
import br.com.FlashMindAPI.domain.document.DocumentService;
import br.com.FlashMindAPI.domain.user.UserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("documents")
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
