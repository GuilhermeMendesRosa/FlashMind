import {Component, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {
  PoButtonModule,
  PoFieldModule,
  PoInfoModule,
  PoListViewAction,
  PoListViewModule,
  PoLoadingModule,
  PoModalComponent,
  PoModalModule,
  PoPageModule
} from "@po-ui/ng-components";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {CollectionService} from "../../../services/collection.service";

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [
    PoPageModule,
    PoListViewModule,
    PoInfoModule,
    PoButtonModule,
    PoFieldModule,
    PoLoadingModule,
    PoModalModule,
    FormsModule
  ],
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal!: PoModalComponent;

  public items: Array<any> = [];
  public newCollectionTitle: string = "";
  public loading: boolean = false;

  public readonly actions: Array<PoListViewAction> = [
    {
      label: '',
      action: this.edit.bind(this),
      icon: 'ph ph-note-pencil'
    },
    {
      label: '',
      action: this.create.bind(this),
      icon: 'ph ph-plus'
    },
    {
      label: '',
      action: this.delete.bind(this),
      type: 'danger',
      icon: 'ph ph-trash'
    }
  ];

  constructor(
    private router: Router,
    private collectionService: CollectionService
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refresh();
  }

  private refresh() {
    this.loading = true;
    this.collectionService.findAll().subscribe({
      next: (collections) => {
        this.items = collections.map(collection => ({
          name: collection.title,
          url: `cards/${collection.id}`,
          id: collection.id
        }));
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error('Erro ao carregar documentos:', err);
      }
    });
  }

  private edit(collection: any) {
    this.router.navigate([`/collections/edit-cards/${collection.id}`]);
  }

  private create(collection: any) {
    this.router.navigate([`/collections/create-cards/${collection.id}`]);
  }

  private delete(collection: any) {
    this.loading = true;
    this.collectionService.delete(collection.id).subscribe({
      next: () => {
        this.refresh();
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error('Erro ao carregar coleções:', err);
      }
    });
  }

  public createCollection() {
    if (!this.newCollectionTitle.trim()) {
      alert('O título não pode estar vazio.');
      return;
    }

    this.loading = true;

    this.collectionService.create(this.newCollectionTitle).subscribe({
      next: (collection) => {
        this.loading = false;
        this.newCollectionTitle = "";
        this.refresh();
        this.modal.close(); // Fechar modal ao concluir
        this.openCollection(collection.id);
      },
      error: (err) => {
        this.loading = false;
        console.error('Erro ao criar coleção:', err);
      }
    });
  }

  private openCollection(id: number) {
    this.router.navigate([`/cards/${id}`]);
  }
}
