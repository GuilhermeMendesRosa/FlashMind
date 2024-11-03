import { Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { PageComponent } from "./components/page/page.component";
import { CollectionsComponent } from "./components/menu/collections/collections.component";
import { DocumentsComponent } from "./components/menu/documents/documents.component";
import { CardsComponent } from "./components/cards/cards.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'page/:id_documento', component: PageComponent },  // Define a rota com parâmetro
  { path: 'collections', component: CollectionsComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'cards', component: CardsComponent },
];
