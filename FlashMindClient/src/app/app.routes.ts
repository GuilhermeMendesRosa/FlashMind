import {Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {PageComponent} from "./components/page/page.component";
import {CollectionsComponent} from "./components/menu/collections/collections.component";
import {DocumentsComponent} from "./components/menu/documents/documents.component";
import {CardsComponent} from "./components/cards/cards.component";
import {CreateCardsComponent} from "./components/create-cards/create-cards.component";
import {EditCardsComponent} from "./components/edit-cards/edit-cards.component";
import {SignupComponent} from "./components/signup/signup.component";

export const routes: Routes = [
  {path: '', redirectTo: 'documents', pathMatch: 'full'}, // Redirecionamento da rota vazia para 'documents'
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'page/:id_document', component: PageComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'collections/cards/:id_collection', component: CardsComponent},
  {path: 'collections/create-cards/:id_collection', component: CreateCardsComponent},
  {path: 'collections/edit-cards/:id_collection', component: EditCardsComponent},
];
