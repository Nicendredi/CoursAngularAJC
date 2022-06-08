import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app7',
  templateUrl: './app7.component.html',
  styleUrls: ['./app7.component.css']
})
export class App7Component implements OnInit {
p={id:0, nom:'', prenom:'',age:0}

  constructor() { }

  ngOnInit(): void {
  }

  create() {
    console.log(this.p);
    
  }

}
