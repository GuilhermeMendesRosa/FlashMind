import {Component} from '@angular/core';
import {PoMenuItem, PoMenuModule} from "@po-ui/ng-components";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PoMenuModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  menus: Array<PoMenuItem> = [
    {
      label: 'Documentos',
      icon: 'ph ph-article',
      shortLabel: 'Documentos',
    },
    {
      label: 'Coleções',
      icon: 'ph ph-folder',
      shortLabel: 'Coleções',
    }
  ];

}
