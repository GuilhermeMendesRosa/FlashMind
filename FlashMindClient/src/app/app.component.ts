import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {PoMenuItem, PoMenuModule} from "@po-ui/ng-components";
import {NavbarComponent} from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoginComponent,
    PoMenuModule,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(
    public router: Router) {
  }

  menus: Array<PoMenuItem> = [
    {
      label: 'Documentos',
      icon: 'ph ph-article',
      shortLabel: 'Documentos',
      link: "/documents",
    },
    {
      label: 'Coleções',
      icon: 'ph ph-folder',
      shortLabel: 'Coleções',
      link: "collections"
    }
  ];

  get showMenu() {
    return !this.router.url.includes('/login') && !this.router.url.includes('/signup');
  }

}
