import {Component} from '@angular/core';
import {PoContainerModule, PoPageModule, PoWidgetModule, PoButtonModule} from "@po-ui/ng-components";
import {Router} from "@angular/router";

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
  height: number = 120;

  constructor(private router: Router) {
  }

  public openDocument(): void {
    this.router.navigate(["/page"]);
  }

}
