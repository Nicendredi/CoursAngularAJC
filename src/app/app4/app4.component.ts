import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app4',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.css']
})
export class App4Component implements OnInit {
  message: string
  constructor() {
    this.message = "toto"
  }

  ngOnInit(): void {
  }

  m1(): void {
    this.message = "titi"
  }

}
