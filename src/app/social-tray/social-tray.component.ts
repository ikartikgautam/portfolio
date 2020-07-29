import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-social-tray',
  templateUrl: './social-tray.component.html',
  styleUrls: ['./social-tray.component.scss']
})
export class SocialTrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hide() {
    var tray = document.getElementById("tray");
    // tray.classList.add("ul-hide")
    // tray.classList.remove("ul-appear")
    tray.classList.replace("ul-appear", "ul-hide")
  }
  reappear() {
    var tray = document.getElementById("tray");
    // tray.classList.remove("ul-hide")
    // tray.classList.add("ul-appear");
    tray.classList.replace("ul-hide", "ul-appear");
  }

}
