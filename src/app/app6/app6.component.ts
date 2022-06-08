import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-app6',
  templateUrl: './app6.component.html',
  styleUrls: ['./app6.component.css']
})
export class App6Component implements OnInit {
  pe: Personne = new Personne();

  constructor() { }

  ngOnInit(): void {
  }

  create() {
    console.log(this.pe);
  }

}
