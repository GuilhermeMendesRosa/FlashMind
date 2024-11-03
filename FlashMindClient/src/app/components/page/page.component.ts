import {Component, OnInit} from '@angular/core';
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
import {PoButtonModule, PoContainerModule, PoLoadingModule, PoMenuModule, PoPageModule} from "@po-ui/ng-components";
import {ActivatedRoute} from "@angular/router";
import {DocumentService} from "../../services/document.service";
import {Document} from "../../models/Document";
import {FormsModule} from "@angular/forms";

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
    FormsModule
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit {
  public Editor = ClassicEditor;
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
  public document: Document = {
    title: "",
    content: "",
    id: 0
  };

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService
  ) {
  }

  ngOnInit(): void {
    const documentId = Number(this.route.snapshot.paramMap.get('id_document'));

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

}
