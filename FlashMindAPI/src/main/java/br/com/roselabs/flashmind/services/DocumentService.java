package br.com.roselabs.flashmind.services;

import br.com.roselabs.flashmind.dtos.DocumentDTO;
import br.com.roselabs.flashmind.dtos.FindAllDocumentDTO;
import br.com.roselabs.flashmind.entities.Document;
import br.com.roselabs.flashmind.entities.User;
import br.com.roselabs.flashmind.repositories.DocumentRepository;
import br.com.roselabs.flashmind.utils.FlashMindUtils;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepository repository;

    public DocumentDTO create(DocumentDTO documentDTO) {
        Document document = new Document(documentDTO);
        document.setUser(FlashMindUtils.getLoggedUser());
        Document savedDocument = this.repository.save(document);
        return toDTO(savedDocument);
    }

    public List<FindAllDocumentDTO> findAll() {
        User loggedUser = FlashMindUtils.getLoggedUser();
        return repository.findAllByUser(loggedUser).stream()
                .map(FindAllDocumentDTO::new)
                .collect(Collectors.toList());
    }

    public DocumentDTO findById(Long id) {
        User loggedUser = FlashMindUtils.getLoggedUser();
        Document document = repository.findByIdAndUser(id, loggedUser)
                .orElseThrow(() -> new EntityNotFoundException("Document not found with id: " + id));
        return toDTO(document);
    }

    public DocumentDTO update(Long id, DocumentDTO documentDTO) {
        Document existingDocument = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Document not found with id: " + id));

        existingDocument.setTitle(documentDTO.getTitle());
        existingDocument.setContent(documentDTO.getContent());

        Document updatedDocument = repository.save(existingDocument);
        return toDTO(updatedDocument);
    }

    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new EntityNotFoundException("Document not found with id: " + id);
        }
        repository.deleteById(id);
    }

    private DocumentDTO toDTO(Document document) {
        return new DocumentDTO(
                document.getId(),
                document.getTitle(),
                document.getContent()
        );
    }
}