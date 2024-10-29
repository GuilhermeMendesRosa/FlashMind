package br.com.roselabs.flashmind.repositories;

import br.com.roselabs.flashmind.entities.Collection;
import br.com.roselabs.flashmind.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CollectionRepository extends JpaRepository<Collection, Long> {
    List<Collection> findAllByUser(User user);
}
