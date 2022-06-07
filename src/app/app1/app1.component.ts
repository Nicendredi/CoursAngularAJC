import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  m1() {
    this.router.navigate(['/app2'])
  }

}
