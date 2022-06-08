import { Component, OnInit } from '@angular/core';
import { ignoreElements, queueScheduler, zip } from 'rxjs';
import { Adresse } from '../adresse';
import { InfoPersonne } from '../info-personne';
import { Personne } from '../personne';

@Component({
  selector: 'app-app10',
  templateUrl: './app10.component.html',
  styleUrls: ['./app10.component.css']
})
export class App10Component implements OnInit {
  message: string
  constructor() { }

  ngOnInit(): void {
    let pers: Personne = new Personne()
    pers.id = 10
    pers.nom = "Dupond"
    pers.prenom = "titi"
    pers.age = 10

    let adr: Adresse = new Adresse()
    adr.num = 15
    adr.rue = "a b c d "
    adr.cp = "75012"

    let info: InfoPersonne = new InfoPersonne()
    info.secu = 12345
    info.p = pers
    info.a = adr
    info.getInformation()
    this.message=info.info
  }

}
