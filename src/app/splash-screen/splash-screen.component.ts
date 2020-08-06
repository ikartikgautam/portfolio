import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var splash = document.getElementById("splash");
    setTimeout(() => {
      splash.classList.add("remove-splash")
    }, 2000);
    
  }

}
