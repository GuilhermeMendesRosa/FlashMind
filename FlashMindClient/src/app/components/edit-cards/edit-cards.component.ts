import {Component} from '@angular/core';
import {PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule, PoWidgetModule} from "@po-ui/ng-components";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-cards',
  standalone: true,
  imports: [
    PoButtonModule,
    PoContainerModule,
    PoPageModule,
    PoWidgetModule,
    PoFieldModule,
    FormsModule
  ],
  templateUrl: './edit-cards.component.html',
  styleUrl: './edit-cards.component.css'
})
export class EditCardsComponent {
  public answer!: string;
  public response!: string;

}
