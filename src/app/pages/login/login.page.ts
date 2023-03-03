import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import keycloak from 'src/keycloak';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  get authenticated(): boolean {
    return Boolean(keycloak.authenticated);
  }

  constructor(private router: Router) { }
  

  ngOnInit(): void {
      if (keycloak.authenticated) {
        this.router.navigateByUrl("/products");
      }
  }

  

  doLogin(): void {
    keycloak.login();
  }


}
