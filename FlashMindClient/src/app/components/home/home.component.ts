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
      label: 'Timekeeping',
      icon: 'ph ph-clock',
      shortLabel: 'Timekeeping',
    },
    {
      label: 'Useful links',
      icon: 'ph ph-share',
      shortLabel: 'Links',
    }
  ];

}
