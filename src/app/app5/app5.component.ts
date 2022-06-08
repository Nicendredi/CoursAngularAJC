import { Component, OnInit } from '@angular/core';
import { Personne } from "../personne";

@Component({
  selector: 'app-app5',
  templateUrl: './app5.component.html',
  styleUrls: ['./app5.component.css']
})
export class App5Component implements OnInit {
  pe: Personne = new Personne();
  id: number
  nom: string
  prenom: string
  age: number

  constructor() { }

  ngOnInit(): void {
  }

  create() {
    this.pe.id = this.id
    this.pe.nom = this.nom
    this.pe.prenom = this.prenom
    this.pe.age = this.age
    console.log(this.pe);
  }

}
