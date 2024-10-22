package br.com.FlashMindAPI.domain.document;

import br.com.FlashMindAPI.domain.user.UserRepository;
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
