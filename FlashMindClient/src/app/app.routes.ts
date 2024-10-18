import {Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {PageComponent} from "./components/page/page.component";
import {MenuComponent} from "./components/menu/menu.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'page', component: PageComponent },
];
