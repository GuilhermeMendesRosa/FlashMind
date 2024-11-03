import {Component, OnInit} from '@angular/core';
import {PoContainerModule, PoPageModule, PoWidgetModule, PoButtonModule} from "@po-ui/ng-components";
import {Router} from "@angular/router";
import {DocumentService} from "../../../services/document.service";
import {Document} from "../../../models/Document";

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [
    PoPageModule,
    PoWidgetModule,
    PoContainerModule,
    PoButtonModule
  ],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent implements OnInit {
  height: number = 120;
  public documents: Document[] = [];

  constructor(private router: Router,
              private documentService: DocumentService) {
  }

  ngOnInit(): void {
    this.documentService.findAll().subscribe({
      next: (documents) => {
        this.documents = documents;
      },
      error: (err) => {
        console.error('Erro ao carregar documentos:', err);
      }
    });
  }

  public openDocument(): void {
    this.router.navigate(["/page"]);
  }

}
