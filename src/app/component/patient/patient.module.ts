import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Patient {
  id:number;
  firstname: string;
  lastname: string;
  address1: string | number;
  address2: string | number;
  city: string;
  state: string;
  zip: number;
  gender: string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PatientModule { 
  id=0;
  firstname = '';
  lastname = '';
  address1: string | number = '';
  address2: string | number = '';
  city = '';
  state = '';
  zip = 0;
  gender = '';
}
