import { Component } from '@angular/core';
import keycloak from 'src/keycloak';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  get authenticated(): boolean {
    return Boolean(keycloak.authenticated);
  }

  get isAdmin(): boolean {
    if (!keycloak.authenticated) {
      return false;
    }
    return Boolean(keycloak.hasRealmRole('ADMIN'));
  }

  constructor() {
    if (keycloak.tokenParsed) {
      console.log(keycloak.tokenParsed['roles']);
    }
  }

  onLogoutClick(): void {
    keycloak.logout();
  }
}
