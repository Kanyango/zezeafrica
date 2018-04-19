import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import {
    FormsModule,
    FormGroup,
    FormControl
} from '@angular/forms';
import { AppRoutingModule }   from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { NavbarComponent } from './navbar/navbar';
import { HomeComponent } from './home/home';
import { NgxCarouselModule } from 'ngx-carousel';
import { FooterComponent } from './footer/footer';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contacts/contact';
import { SignUpComponent } from './signup/signup';
import { SafariComponent } from './safari/safari';
import { ArtistsComponent } from './artists/artists';
import { CoverageComponent } from './coverage/coverage';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    SignUpComponent,
    SafariComponent,
    ArtistsComponent,
    CoverageComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
