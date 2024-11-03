import {Component} from '@angular/core';
import {
  PoButtonModule,
  PoFieldModule,
  PoInfoModule,
  PoListViewAction,
  PoListViewModule,
  PoLoadingModule,
  PoModalModule,
  PoPageModule
} from "@po-ui/ng-components";
import {FormsModule} from "@angular/forms";

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
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {
  public items: Array<any> = [
    {name: 'Coleção 1', url: '/cards'},
    {name: 'Registro 2', url: '/cards'}
  ];

  public readonly actions: Array<PoListViewAction> = [
    {
      label: '',
      action: this.edit.bind(this),
      icon: 'ph ph-note-pencil'
    },
    {
      label: '',
      action: this.delete.bind(this),
      type: 'danger',
      icon: 'ph ph-trash'
    }];

  public newCollectionTitle: string = "";
  public loading: boolean = false;

  private edit(selected: number) {
  }

  private delete(selected: number) {
  }

  public createCollection() {

  }
}
