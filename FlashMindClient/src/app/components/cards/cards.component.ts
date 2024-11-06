import {Component, OnInit} from '@angular/core';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {PoButtonModule, PoContainerModule, PoInfoModule, PoPageModule, PoWidgetModule} from "@po-ui/ng-components";
import {NgIf} from "@angular/common";
import {CollectionService} from "../../services/collection.service";
import {Collection} from "../../models/Collection";
import {ActivatedRoute} from "@angular/router";
import {FlashCard} from "../../models/FlashCard";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CKEditorModule,
    PoButtonModule,
    PoContainerModule,
    PoPageModule,
    PoWidgetModule,
    NgIf,
    PoInfoModule
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  public answered: boolean = false;
  public loading: boolean = false;
  public collection: Collection = {id: 0, title: "", flashCards: []};

  public constructor(
    private route: ActivatedRoute,
    private collectionsService: CollectionService) {
  }

  ngOnInit(): void {
    const collectionId = Number(this.route.snapshot.paramMap.get('id_collection'));

    if (collectionId) {
      console.log("oi")
      this.loadCollection(collectionId);
    }
  }

  private loadCollection(id: number): void {
    this.loading = true;
    this.collectionsService.findById(id).subscribe({
      next: (collection) => {
        this.loading = false;
        this.collection = collection;
      },
      error: (error) => {
        this.loading = false;
        console.error('Erro ao carregar o documento:', error);
      }
    });
  }

  public showResponse() {
    this.answered = true;
  }

  public rightAnswer() {
    this.collection.flashCards.pop();
    this.answered = false;
  }

  public wrongAnswer() {
    this.collection.flashCards.push(<FlashCard>this.collection.flashCards.shift());
    this.answered = false;
  }
}
