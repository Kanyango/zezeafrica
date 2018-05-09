import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contacts/contact'
import { SignUpComponent } from './signup/signup';
import { SafariComponent } from './safari/safari';
import { ArtistsComponent } from './artists/artists';
import { CoverageComponent } from './coverage/coverage';
import { SpaComponent } from './spa/spa'
import { PartnersComponent } from './partners/partners';
import { LoginComponent } from './signup/signup';

const routes: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'home', component: HomeComponent},
        { path: 'about', component: AboutComponent},
        { path: 'contact', component: ContactComponent},
        { path: 'signup', component: SignUpComponent},
        { path: 'safari', component: SafariComponent},
        { path: 'artists', component: ArtistsComponent},
        { path: 'locations', component: CoverageComponent},
        { path: 'spa', component: PartnersComponent},
        { path: 'partners', component: CoverageComponent},
        { path: 'sighup', component: SignUpComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
