import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {
  PoButtonModule,
  PoContainerModule,
  PoFieldModule,
  PoLoadingModule,
  PoModalModule,
  PoPageModule,
  PoWidgetModule
} from "@po-ui/ng-components";
import {Router} from "@angular/router";
import {DocumentService} from "../../../services/document.service";
import {Document} from "../../../models/Document";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [
    PoPageModule,
    PoWidgetModule,
    PoContainerModule,
    PoButtonModule,
    NgForOf,
    PoLoadingModule,
    PoModalModule,
    PoFieldModule,
    FormsModule
  ],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent implements OnInit, OnChanges {
  public height: number = 120;
  public documents: Document[] = [];
    public loading: boolean = false;
  public newDocumentTitle: string = "";

  constructor(
    private router: Router,
    private documentService: DocumentService
  ) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refresh();
  }

  private refresh() {
    this.loading = true;
    this.documentService.findAll().subscribe({
      next: (documents) => {
        this.loading = false;
        this.documents = documents;
      },
      error: (err) => {
        this.loading = false;
        console.error('Erro ao carregar documentos:', err);
      }
    });
  }

  public openDocument(id: number): void {
    this.router.navigate([`/page/${id}`]);
  }

  public deleteDocument(id: number) {
    this.loading = true;
    this.documentService.delete(id).subscribe(value => {
      this.loading = false;
      this.refresh()
    });
  }

  public createDocument() {
    this.loading = true;
    this.documentService.create(this.newDocumentTitle).subscribe({
      next: (document) => {
        this.loading = false;
        this.newDocumentTitle = "";
        this.openDocument(document.id)
      },
      error: (err) => {
        this.loading = false;
        console.error('Erro ao criar documento:', err);
      }
    });
  }

}
