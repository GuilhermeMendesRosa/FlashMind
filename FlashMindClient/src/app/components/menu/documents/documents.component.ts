import { Component } from '@angular/core';
import {PoPageModule} from "@po-ui/ng-components";

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [
    PoPageModule
  ],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {

}
