import {Component, OnInit} from '@angular/core';
import {PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule, PoWidgetModule} from "@po-ui/ng-components";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CollectionService} from "../../services/collection.service";
import {Collection} from "../../models/Collection";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-cards',
  standalone: true,
  imports: [
    PoButtonModule,
    PoContainerModule,
    PoPageModule,
    PoWidgetModule,
    PoFieldModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './edit-cards.component.html',
  styleUrl: './edit-cards.component.css'
})
export class EditCardsComponent implements OnInit {

  private collectionId: number = 0;
  public currentCard: number = 0;
  public loading: boolean = false;
  public collection: Collection = {id: 0, title: "", flashCards: []};

  public constructor(
    private router: Router,
    private route: ActivatedRoute,
    private collectionsService: CollectionService) {
  }

  ngOnInit(): void {
    this.collectionId = Number(this.route.snapshot.paramMap.get('id_collection'));

    this.collectionsService.findById(this.collectionId).subscribe(collection => {
      this.collection = collection;
    });
  }

  public createCard() {
    this.collection.flashCards.push({front: "", back: "", id: 0});
    this.currentCard = this.collection.flashCards.length - 1;
  }

  public deleteCard() {
    if (this.collection.flashCards.length > 0) {
      this.collection.flashCards.splice(this.currentCard, 1);
      this.currentCard = Math.min(this.currentCard, this.collection.flashCards.length - 1);
    }
  }

  public left() {
    if (this.currentCard > 0) {
      this.currentCard--;
    }
  }

  public right() {
    if (this.currentCard < this.collection.flashCards.length - 1) {
      this.currentCard++;
    }
  }

  public save() {
    this.loading = true;
    this.collectionsService.update(this.collection).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/collections']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Erro ao salvar coleção:', err);
      }
    });
  }
}
