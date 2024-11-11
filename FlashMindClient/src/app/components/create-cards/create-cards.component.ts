import {Component, OnInit} from '@angular/core';
import {
  PoButtonModule,
  PoContainerModule,
  PoFieldModule,
  PoLoadingModule,
  PoPageModule,
  PoWidgetModule
} from "@po-ui/ng-components";
import {FormsModule} from "@angular/forms";
import {FlashCard} from "../../models/FlashCard";
import {ActivatedRoute, Router} from "@angular/router";
import {CollectionService} from "../../services/collection.service";
import {NgIf} from "@angular/common";
import {AiService} from "../../services/ai.service";

@Component({
  selector: 'app-create-cards',
  standalone: true,
  imports: [
    PoButtonModule,
    PoContainerModule,
    PoPageModule,
    PoWidgetModule,
    PoFieldModule,
    FormsModule,
    PoLoadingModule,
    NgIf
  ],
  templateUrl: './create-cards.component.html',
  styleUrl: './create-cards.component.css'
})
export class CreateCardsComponent implements OnInit {

  private collectionId: number = 0;
  public currentCard: number = 0;
  public flashCards: FlashCard[] = [{
    front: "", back: "", id: 0
  }];
  public loading: boolean = false;

  public constructor(
    private router: Router,
    private route: ActivatedRoute,
    private collectionsService: CollectionService,
    private aiService: AiService) {
  }


  ngOnInit(): void {
    this.collectionId = Number(this.route.snapshot.paramMap.get('id_collection'));

    if (this.aiService.flashCards && this.aiService.flashCards.length > 0) {
      this.flashCards = this.aiService.flashCards;
      this.aiService.flashCards = [];
    }
  }

  public createCard() {
    this.flashCards.push({front: "", back: "", id: 0});
    this.currentCard++;
  }

  public deleteCard() {
    if (this.currentCard >= 0 && this.currentCard < this.flashCards.length) {
      this.flashCards.splice(this.currentCard, 1);
      this.currentCard = Math.max(0, this.currentCard - 1);
    }
  }

  public left() {
    if (this.flashCards.length > 1) this.currentCard--;
  }

  public right() {
    if (this.flashCards.length > this.currentCard + 1) this.currentCard++;
  }

  public addAll() {
    this.loading = true;
    this.collectionsService.addFlashCards(this.collectionId, this.flashCards).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/collections']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Erro ao salvar flashcards:', err);
      }
    });
  }

}
