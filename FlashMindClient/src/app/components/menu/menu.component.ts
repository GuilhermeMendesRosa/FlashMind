import {Component} from '@angular/core';
import {PoMenuItem, PoMenuModule} from "@po-ui/ng-components";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PoMenuModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menus: Array<PoMenuItem> = [
    {
      label: 'Documentos',
      icon: 'ph ph-article',
      shortLabel: 'Documentos',
    action: this.openDocuments.bind(this)
    },
    {
      label: 'Coleções',
      icon: 'ph ph-folder',
      shortLabel: 'Coleções',
      action: this.openCollections.bind(this)
    }
  ];

  public openDocuments(): void {

  }

  public openCollections() {

  }

}
