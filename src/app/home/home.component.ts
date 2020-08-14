import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skills = [
    { skill: 'PYTHON', pro: '80%' },
    { skill: 'C', pro: '80%' },
    { skill: 'C++', pro: '90%' },
    { skill: 'JAVA', pro: '65%' },
    { skill: 'JAVASCRIPT', pro: '90%' },
    { skill: 'TYPESCRIPT', pro: '60%' },
  ];

}
