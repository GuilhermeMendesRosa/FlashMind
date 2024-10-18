import {Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {PageComponent} from "./components/page/page.component";
import {CollectionsComponent} from "./components/menu/collections/collections.component";
import {DocumentsComponent} from "./components/menu/documents/documents.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'page', component: PageComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'documents', component: DocumentsComponent },
];
