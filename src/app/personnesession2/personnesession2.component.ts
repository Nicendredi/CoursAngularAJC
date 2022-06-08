import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-personnesession2',
  templateUrl: './personnesession2.component.html',
  styleUrls: ['./personnesession2.component.css']
})
export class Personnesession2Component implements OnInit {
  p: Personne

  constructor() { }

  ngOnInit(): void {
    this.p=JSON.parse(sessionStorage.getItem("p"))
  }

}
