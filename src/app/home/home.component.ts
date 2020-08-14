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
    { skill: 'PHP', pro: '50%' },
    { skill: 'DART', pro: '75%' },
  ];

  techs = [
    { skill: 'ANGULAR', pro: '90%' },
    { skill: 'EXPRESS APP', pro: '80%' },
    { skill: 'NODE JS', pro: '70%' },
    { skill: 'SQL DB', pro: '95%' },
    { skill: 'FLUTTER', pro: '70%' },
    { skill: 'AWS/CLOUD', pro: '65%' },
    { skill: 'WEB SCRAPING', pro: '95%' },
    { skill: 'DATA ANALYSIS', pro: '50%' },
    { skill: 'ML', pro: '45%' },
    { skill: 'IOT', pro: '35%' },
    { skill: 'LINUX', pro: '20%' },
  ]

}
