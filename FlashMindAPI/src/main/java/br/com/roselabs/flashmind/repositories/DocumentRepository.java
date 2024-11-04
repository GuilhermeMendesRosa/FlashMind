package br.com.roselabs.flashmind.repositories;

import br.com.roselabs.flashmind.entities.Document;
import br.com.roselabs.flashmind.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DocumentRepository extends CrudRepository<Document, Long> {

    List<Document> findAllByUser(User loggedUser);

    Optional<Document> findByIdAndUser(Long id, User loggedUser);
}
