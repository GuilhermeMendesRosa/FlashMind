import {Component} from '@angular/core';
import {PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule, PoWidgetModule} from "@po-ui/ng-components";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-cards',
  standalone: true,
  imports: [
    PoButtonModule,
    PoContainerModule,
    PoPageModule,
    PoWidgetModule,
    PoFieldModule,
    FormsModule
  ],
  templateUrl: './create-cards.component.html',
  styleUrl: './create-cards.component.css'
})
export class CreateCardsComponent {
  public answer!: string;
  public response!: string;

}