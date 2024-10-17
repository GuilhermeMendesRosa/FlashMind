import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {PageComponent} from "./components/page/page.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'page', component: PageComponent },
];
