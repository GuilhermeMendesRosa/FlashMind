import {Component} from '@angular/core';
import {PoInfoModule, PoListViewAction, PoListViewModule, PoPageModule, PoButtonModule} from "@po-ui/ng-components";

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [
    PoPageModule,
    PoListViewModule,
    PoInfoModule,
    PoButtonModule
  ],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {
  items: Array<any> = [
    {name: 'Coleção 1', url: '/page'},
    {name: 'Registro 2', url: '/page'}
  ];

  readonly actions: Array<PoListViewAction> = [
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

  private edit(selected: number) {
  }

  private delete(selected: number) {
  }

}
