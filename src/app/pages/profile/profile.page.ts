import { Component, OnInit } from '@angular/core';
import keycloak from 'src/keycloak';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  get fullName(): string {
    if (keycloak.tokenParsed && keycloak.tokenParsed.name) {
      return keycloak.tokenParsed.name;
    }

    return 'No name';
  }

  constructor() {}
}
