import {Component} from '@angular/core';
import {PoPageLogin, PoPageLoginCustomField, PoPageLoginModule} from "@po-ui/ng-templates";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-signup',
  standalone: true,
    imports: [
        PoPageLoginModule
    ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  public nameField: PoPageLoginCustomField = {
    property: "fullName",
    placeholder: "Insira o seu nome",
  }

  constructor(private router: Router,
              private authService: AuthService) {
  }

  signup(formData: PoPageLogin) {
    this.authService.signup(formData).subscribe(authentication => {
      this.router.navigate([`/login`]);
    })
  }

}
