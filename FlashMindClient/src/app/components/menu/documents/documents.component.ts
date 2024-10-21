import { Component } from '@angular/core';
import {PoContainerModule, PoPageModule, PoWidgetModule, PoButtonModule} from "@po-ui/ng-components";

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [
    PoPageModule,
    PoWidgetModule,
    PoContainerModule,
    PoButtonModule
  ],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {

}
