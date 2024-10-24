package br.com.roselabs.flashmind.repositories;

import br.com.roselabs.flashmind.entities.Document;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepository extends CrudRepository<Document, Integer> {

}
