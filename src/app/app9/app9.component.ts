import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-app9',
  templateUrl: './app9.component.html',
  styleUrls: ['./app9.component.css']
})
export class App9Component implements OnInit {
  message: string
  constructor() { }

  ngOnInit(): void {
    let i: Item = new Item("zara", 10)
    this.message = i.getinfo()
  }

}
