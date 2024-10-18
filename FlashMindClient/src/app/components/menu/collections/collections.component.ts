import { Component } from '@angular/core';
import {PoPageModule} from "@po-ui/ng-components";

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [
    PoPageModule
  ],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {

}
