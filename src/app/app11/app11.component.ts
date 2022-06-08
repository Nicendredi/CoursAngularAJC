import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-app11',
  templateUrl: './app11.component.html',
  styleUrls: ['./app11.component.css']
})
export class App11Component implements OnInit {

  info
  tab: Array<Client>

  constructor() {
    this.info = { nom: '', prenom: '' }
    this.tab = new Array<Client>()
  }

  ngOnInit(): void {
  }

  add() {
    let c: Client = new Client()
    c.nom = this.info.nom
    c.prenom = this.info.prenom

    this.tab.push(c);
    this.tab.sort()
  }

}
