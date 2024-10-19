import { Component } from '@angular/core';
import {PoContainerModule, PoPageModule, PoWidgetModule} from "@po-ui/ng-components";

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [
    PoPageModule,
    PoWidgetModule,
    PoContainerModule
  ],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {

}
