package br.com.roselabs.flashmind.services;

import br.com.roselabs.flashmind.dtos.DocumentDTO;
import br.com.roselabs.flashmind.entities.Document;
import br.com.roselabs.flashmind.repositories.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepository repository;

    public Document create(DocumentDTO documentDTO) {
        Document document = new Document(documentDTO);
        this.repository.save(document);
        return document;
    }
}