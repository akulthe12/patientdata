import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PatientComponent } from './component/patient/patient.component';
import { HeaderComponent } from './component/header/header.component';
import { ContactComponent } from './component/contact/contact.component';
import { PatientDetailsComponent } from './component/patient-details/patient-details.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutComponent } from './component/logout/logout.component';

const routes: Routes = [
  // { path: '', component:HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'patient-details', component: PatientDetailsComponent},
  { path: 'logout', component:LogoutComponent}
 
  
    
    
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
