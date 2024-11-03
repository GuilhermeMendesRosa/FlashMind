package br.com.roselabs.flashmind.repositories;

import br.com.roselabs.flashmind.entities.Collection;
import br.com.roselabs.flashmind.entities.FlashCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlashCardRepository extends JpaRepository<FlashCard, Long> {
    List<FlashCard> findAllByCollection(Collection collection);

    void deleteAllByCollection(Collection collection);
}
