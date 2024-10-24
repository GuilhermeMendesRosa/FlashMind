import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {PoMenuItem} from "@po-ui/ng-components";
import {PoPageLogin, PoPageLoginModule} from "@po-ui/ng-templates";
import {User} from "../../models/User";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    PoPageLoginModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService) {
  }

  readonly menus: Array<PoMenuItem> = [
    {label: 'Page', action: this.onClick.bind(this)},
  ];

  private onClick() {
    alert('Clicked in menu item');
  }

  loginSubmit(formData: PoPageLogin) {
    const user: User = {
      email: formData.login,
      password: formData.password
    };
    this.authService.login(user).subscribe(token => {
      localStorage.setItem("jwt", token.jwt)
    })
  }
}
