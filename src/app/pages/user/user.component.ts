import { Component, OnInit } from '@angular/core';
import keycloak from 'src/keycloak';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){
    keycloak.login();
  }

  handleLogout(){
    keycloak.logout();
  }

  handleDisplay(){
    console.log( "KC given name: " + keycloak.tokenParsed?.given_name);
    console.log("KC family name: " +keycloak.tokenParsed?.family_name);
    console.log("User email: " +keycloak.tokenParsed?.email);
  }
}
