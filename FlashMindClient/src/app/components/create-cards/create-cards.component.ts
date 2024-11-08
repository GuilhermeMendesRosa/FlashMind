import {Component} from '@angular/core';
import {PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule, PoWidgetModule} from "@po-ui/ng-components";
import {FormsModule} from "@angular/forms";
import {FlashCard} from "../../models/FlashCard";

@Component({
  selector: 'app-create-cards',
  standalone: true,
  imports: [
    PoButtonModule,
    PoContainerModule,
    PoPageModule,
    PoWidgetModule,
    PoFieldModule,
    FormsModule
  ],
  templateUrl: './create-cards.component.html',
  styleUrl: './create-cards.component.css'
})
export class CreateCardsComponent {

  public answer!: string;
  public currentCard: number = 0;

  public response!: string;
  public flashCards: FlashCard[] = [{
    front: "", back: "", id: 0
  }];

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
}
