import { Component, HostListener, ViewChild } from '@angular/core';
import { SocialTrayComponent } from './social-tray/social-tray.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ikartikgautam';

  @ViewChild(SocialTrayComponent, { static: false }) child;

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    if (window.pageYOffset >= 100) {
      // console.log("hide")
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.child.hide();
    }
    if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
      this.child.reappear();
    }
  }

}