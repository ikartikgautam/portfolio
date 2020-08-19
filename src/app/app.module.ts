import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { SocialTrayComponent } from './social-tray/social-tray.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterBarComponent,
    HomeComponent,
    ErrorComponent,
    SocialTrayComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
