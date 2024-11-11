import {Component, OnInit, ViewChild} from '@angular/core';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {
  Bold,
  ClassicEditor,
  Essentials,
  Font,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  Paragraph,
  Table,
  Undo
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
import {
  PoButtonModule,
  PoContainerModule,
  PoFieldModule,
  PoLoadingModule,
  PoMenuModule,
  PoModalComponent,
  PoModalModule,
  PoPageModule
} from "@po-ui/ng-components";
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentService} from "../../services/document.service";
import {Document} from "../../models/Document";
import {FormsModule} from "@angular/forms";
import {CollectionService} from "../../services/collection.service";
import {state} from "@angular/animations";
import {AiService} from "../../services/ai.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CKEditorModule,
    PoMenuModule,
    PoContainerModule,
    PoButtonModule,
    PoPageModule,
    PoLoadingModule,
    FormsModule,
    PoFieldModule,
    PoModalModule
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit {

  @ViewChild('modal') modal!: PoModalComponent;  // Referência ao modal

  public editor = ClassicEditor;
  public config = {
    toolbar: [
      'undo', 'redo', '|',
      'heading', '|', 'bold', 'italic', '|',
      'link', 'insertTable', 'mediaEmbed', '|',
      'bulletedList', 'numberedList', 'indent', 'outdent',
      'fontColor', 'fontBackgroundColor',  // Adicione os controles de cor
    ],
    plugins: [
      Bold,
      Essentials,
      Heading,
      Indent,
      IndentBlock,
      Italic,
      Link,
      List,
      Paragraph,
      Table,
      Undo,
      Font
    ]
  }

  public loading: boolean = false;
  public document: Document = {title: "", content: "", id: 0};
  public options: { label: string; value: number }[] = [];
  public selectedCollectionId: number = 0;
  protected readonly state = state;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private collectionsService: CollectionService,
    private aiService: AiService
  ) {
  }

  ngOnInit(): void {
    let documentId = Number(this.route.snapshot.paramMap.get('id_document'));

    if (documentId) {
      this.loadDocument(documentId);
    }
  }

  private loadDocument(id: number): void {
    this.loading = true;
    this.documentService.findById(id).subscribe({
      next: (document) => {
        this.loading = false;
        this.document = document;
      },
      error: (error) => {
        this.loading = false;
        console.error('Erro ao carregar o documento:', error);
      }
    });
  }

  public updateDocument() {
    this.loading = true;
    this.documentService.update(this.document).subscribe({
      next: (document) => {
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error('Erro ao criar documento:', err);
      }
    });
  }

  public onContentChange(event: any) {
    this.document.content = event.editor.getData(); // Captura o conteúdo atualizado
  }

  public openModal(): void {
    this.loading = true;

    this.collectionsService.findAll().subscribe({
      next: (value) => {
        this.options = value.map(collection => ({
          label: collection.title,
          value: collection.id
        }));

        this.loading = false;
        this.modal.open();
      },
      error: () => {
        this.loading = false;
        console.error("Erro ao carregar coleções");
      }
    });
  }

  onChange(id: number) {
    this.selectedCollectionId = id;
  }

  public generateFlashCardFromSelection() {
    this.loading = true;
    this.aiService.generateFlashCards(this.document).subscribe(flashCards => {
      this.aiService.flashCards = flashCards;
      if (this.selectedCollectionId != 0) {
        this.loading = false;
        this.router.navigate([`/collections/create-cards/${this.selectedCollectionId}`]);
      }
    });
  }

}
