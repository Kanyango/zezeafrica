import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contacts/contact'
import { SignUpComponent } from './signup/signup';
import { SafariComponent } from './safari/safari';
import { ArtistsComponent } from './artists/artists';
import { CoverageComponent } from './coverage/coverage';

const routes: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'home', component: HomeComponent},
        { path: 'about', component: AboutComponent},
        { path: 'contact', component: ContactComponent},
        { path: 'signup', component: SignUpComponent},
        { path: 'safari', component: SafariComponent},
        { path: 'artists', component: ArtistsComponent},
        { path: 'locations', component: CoverageComponent}
        // { path: 'about', component: AboutComponent},
        // { path: 'services', component: ServicesComponent},
        // { path: 'cars', component: CarsComponent},
        // { path: 'contact', component: ContactComponent},
        // { path: 'car_detail/:id', component: CarDetailsComponent},
        // { path: 'thankyou', component: ConfirmationComponent},
        // { path: 'rent_car', component: RentYourCarComponent},
        // { path: 'payments/:id', component: PaymentsComponent},
        // { path: 'mpesa/:id', component: MpesaComponent},
        // { path: 'paypal/:id', component: PaypalComponent},
        // { path: 'confirmation', component: PaypalBtnComponent},
        // { path: 'signup', component: SignUpComponent },
        // { path: 'plan', component: PlanComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
