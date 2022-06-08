import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-personnesession1',
  templateUrl: './personnesession1.component.html',
  styleUrls: ['./personnesession1.component.css']
})
export class Personnesession1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let p: Personne = new Personne()
    p.id = 5;
    p.nom = "durand"
    p.prenom = "titi"
    p.age = 12

    let str: string = JSON.stringify(p)
    console.log(str);
    sessionStorage.setItem("p", str)
  }

  f() {
    let p: Personne = new Personne()
    p.id = 10;
    p.nom = "dupond"
    p.prenom = "toto"
    p.age = 10

    let str: string = JSON.stringify(p)
    console.log(str);
    sessionStorage.setItem("p", str)
  }
}
