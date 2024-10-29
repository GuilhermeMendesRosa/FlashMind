package br.com.roselabs.flashmind.services;

import br.com.roselabs.flashmind.dtos.FlashCardDTO;
import br.com.roselabs.flashmind.dtos.FlashCardRequestDTO;
import br.com.roselabs.flashmind.entities.Collection;
import br.com.roselabs.flashmind.entities.FlashCard;
import br.com.roselabs.flashmind.entities.User;
import br.com.roselabs.flashmind.repositories.CollectionRepository;
import br.com.roselabs.flashmind.repositories.FlashCardRepository;
import br.com.roselabs.flashmind.utils.FlashMindUtils;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FlashCardService {

    private final FlashCardRepository flashCardRepository;
    private final CollectionRepository collectionRepository;

    public FlashCardDTO createFlashCard(Long collectionId, FlashCardRequestDTO flashCardRequestDTO) {
        Collection collection = findCollectionByIdAndUser(collectionId);
        FlashCard flashCard = new FlashCard(flashCardRequestDTO.getFront(), flashCardRequestDTO.getBack(), collection);
        return toDTO(flashCardRepository.save(flashCard));
    }

    public FlashCardDTO getFlashCard(Long id) {
        FlashCard flashCard = findFlashCardByIdAndUser(id);
        return toDTO(flashCard);
    }

    public List<FlashCardDTO> getAllFlashCards(Long collectionId) {
        Collection collection = findCollectionByIdAndUser(collectionId);
        return flashCardRepository.findAllByCollection(collection).stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public FlashCardDTO updateFlashCard(Long id, FlashCardRequestDTO flashCardRequestDTO) {
        FlashCard flashCard = findFlashCardByIdAndUser(id);
        flashCard.setFront(flashCardRequestDTO.getFront());
        flashCard.setBack(flashCardRequestDTO.getBack());
        return toDTO(flashCardRepository.save(flashCard));
    }

    public void deleteFlashCard(Long id) {
        FlashCard flashCard = findFlashCardByIdAndUser(id);
        flashCardRepository.delete(flashCard);
    }

    private Collection findCollectionByIdAndUser(Long id) {
        User user = FlashMindUtils.getLoggedUser();
        return collectionRepository.findById(id).get();
    }

    private FlashCard findFlashCardByIdAndUser(Long id) {
        User user = FlashMindUtils.getLoggedUser();
        return flashCardRepository.findById(id)
                .filter(fc -> fc.getCollection().getUser().equals(user))
                .orElseThrow(() -> new EntityNotFoundException("FlashCard not found"));
    }

    private FlashCardDTO toDTO(FlashCard flashCard) {
        FlashCardDTO dto = new FlashCardDTO();
        dto.setId(flashCard.getId());
        dto.setFront(flashCard.getFront());
        dto.setBack(flashCard.getBack());
        return dto;
    }
}
