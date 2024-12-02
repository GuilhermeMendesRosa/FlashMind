import {Component} from '@angular/core';
import {PoButtonModule, PoModalModule} from "@po-ui/ng-components";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    PoModalModule,
    PoButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate([`/login`]);
  }
}
