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
import { ScrollSpyModule } from 'ngx-scrollspy';
import { SwiperModule } from 'angular2-useful-swiper';
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
import { SpaComponent } from './spa/spa';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalsComponent } from './about/modal';
import { PartnersComponent } from './partners/partners';


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
    CoverageComponent,
    SpaComponent,
    ModalsComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    //ScrollSpyModule.forRoot(),
    NgbModule.forRoot(),
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCarouselModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
