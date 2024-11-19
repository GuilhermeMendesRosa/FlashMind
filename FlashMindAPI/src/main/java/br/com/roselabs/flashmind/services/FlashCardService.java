package br.com.roselabs.flashmind.services;

import br.com.roselabs.flashmind.dtos.DocumentDTO;
import br.com.roselabs.flashmind.dtos.FlashCardDTO;
import br.com.roselabs.flashmind.dtos.FlashCardRequestDTO;
import br.com.roselabs.flashmind.entities.Collection;
import br.com.roselabs.flashmind.entities.FlashCard;
import br.com.roselabs.flashmind.entities.User;
import br.com.roselabs.flashmind.repositories.CollectionRepository;
import br.com.roselabs.flashmind.repositories.FlashCardRepository;
import br.com.roselabs.flashmind.utils.FlashMindUtils;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.openai.OpenAiChatClient;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FlashCardService {

    private final FlashCardRepository flashCardRepository;
    private final CollectionRepository collectionRepository;
    private final OpenAiChatClient chatClient;

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

    public List<FlashCardRequestDTO> generateFlashCards(DocumentDTO documentDTO) {
        String prompt = String.format("""
                Eu tenho um documento intitulado %s. Com base no conteúdo desse documento, quero que você crie flashcards no estilo Anki, focados nos principais conceitos, definições e perguntas de compreensão. Cada flashcard deve ser gerado como um objeto JSON com as chaves 'front' e 'back' para a frente e o verso, respectivamente.
                
                Formato de resposta:
                A resposta deve ser EXCLUSIVAMENTE um array JSON neste formato, 
                NÃO RESPONDA NADA ALÉM DISSO:
                
                [
                  {
                    "front": "pergunta ou conceito no lado da frente",
                    "back": "resposta ou explicação breve no verso"
                  }
                ]
                Texto do documento: %s
                """, documentDTO.getTitle(), documentDTO.getContent());

        String json = chatClient.call(prompt);

        Type listType = new TypeToken<List<FlashCardRequestDTO>>() {
        }.getType();
        return new Gson().fromJson(json, listType);
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
