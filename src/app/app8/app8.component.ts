import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app8',
  templateUrl: './app8.component.html',
  styleUrls: ['./app8.component.css']
})
export class App8Component implements OnInit {
  info: string
  tab=[]

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.tab.push(this.info)
  }

}
