import { Component } from '@angular/core';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {PoButtonModule, PoContainerModule, PoPageModule, PoWidgetModule} from "@po-ui/ng-components";

@Component({
  selector: 'app-cards',
  standalone: true,
    imports: [
        CKEditorModule,
        PoButtonModule,
        PoContainerModule,
        PoPageModule,
        PoWidgetModule
    ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

}
