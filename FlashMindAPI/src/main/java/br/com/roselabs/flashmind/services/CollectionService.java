package br.com.roselabs.flashmind.services;

import br.com.roselabs.flashmind.dtos.CollectionDTO;
import br.com.roselabs.flashmind.dtos.CollectionRequestDTO;
import br.com.roselabs.flashmind.dtos.FlashCardDTO;
import br.com.roselabs.flashmind.entities.Collection;
import br.com.roselabs.flashmind.entities.FlashCard;
import br.com.roselabs.flashmind.entities.User;
import br.com.roselabs.flashmind.repositories.CollectionRepository;
import br.com.roselabs.flashmind.repositories.FlashCardRepository;
import br.com.roselabs.flashmind.utils.FlashMindUtils;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CollectionService {

    private final CollectionRepository collectionRepository;
    private final FlashCardRepository flashCardRepository;

    public CollectionDTO createCollection(CollectionRequestDTO collectionRequestDTO) {
        User user = FlashMindUtils.getLoggedUser();
        Collection collection;
        collection = new Collection(collectionRequestDTO.getTitle(), user);

        List<FlashCard> flashCards = collectionRequestDTO.getFlashCards().stream()
                .map(dto -> new FlashCard(dto.getFront(), dto.getBack(), collection))
                .collect(Collectors.toList());

        collection.setFlashCards(flashCards);
        Collection savedCollection = collectionRepository.save(collection);

        return toDTO(savedCollection);
    }

    public CollectionDTO getCollection(Long id) {
        Collection collection = findCollectionByIdAndUser(id);
        return toDTO(collection);
    }

    public List<CollectionDTO> getAllCollections() {
        User user = FlashMindUtils.getLoggedUser();
        return collectionRepository.findAllByUser(user).stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public CollectionDTO updateCollection(Long id, CollectionRequestDTO collectionRequestDTO) {
        Collection collection = findCollectionByIdAndUser(id);
        collection.setTitle(collectionRequestDTO.getTitle());

        List<FlashCard> flashCards = collectionRequestDTO.getFlashCards().stream()
                .map(dto -> new FlashCard(dto.getFront(), dto.getBack(), collection))
                .collect(Collectors.toList());

        collection.getFlashCards().clear();
        collection.getFlashCards().addAll(flashCards);
        Collection updatedCollection = collectionRepository.save(collection);

        return toDTO(updatedCollection);
    }

    public void deleteCollection(Long id) {
        Collection collection = findCollectionByIdAndUser(id);
        flashCardRepository.deleteAllByCollection(collection);
        collectionRepository.delete(collection);
    }

    private Collection findCollectionByIdAndUser(Long id) {
        User user = FlashMindUtils.getLoggedUser();
        return collectionRepository.findById(id)
                .filter(c -> c.getUser().equals(user))
                .orElseThrow(() -> new EntityNotFoundException("Collection not found"));
    }

    private CollectionDTO toDTO(Collection collection) {
        CollectionDTO dto = new CollectionDTO();
        dto.setId(collection.getId());
        dto.setTitle(collection.getTitle());

        List<FlashCard> shuffledFlashCards = new ArrayList<>(collection.getFlashCards());
        Collections.shuffle(shuffledFlashCards);
        dto.setFlashCards(shuffledFlashCards.stream().map(this::toDTO).collect(Collectors.toList()));

        return dto;
    }


    private FlashCardDTO toDTO(FlashCard flashCard) {
        FlashCardDTO dto = new FlashCardDTO();
        dto.setId(flashCard.getId());
        dto.setFront(flashCard.getFront());
        dto.setBack(flashCard.getBack());
        return dto;
    }
}
