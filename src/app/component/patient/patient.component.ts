import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientModule } from './patient.module';
import { ApiService } from 'src/app/services/api.service';
import { PatientDataServiceService } from 'src/app/services/patient-data-service.service';
import { Router } from '@angular/router';
import { PatientDetailsComponent } from '../patient-details/patient-details.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {
  patientForm!:FormGroup;
  patientData:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  componentModelObj:PatientModule=new PatientModule();
  constructor(private fb:FormBuilder,private api:ApiService,private patientdataservice:PatientDataServiceService,private router: Router){}
  ngOnInit():void{
    this.patientForm=this.fb.group({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      address1:new FormControl('',Validators.required),
      address2:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      zip:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      


    })
    
    this.getAllDetails();
  }
 
  clickAddDetails()
  {
    this.patientForm.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postDataDetails()
  {
    this.componentModelObj.firstname=this.patientForm.value.firstname;
    this.componentModelObj.lastname=this.patientForm.value.lastname;
    this.componentModelObj.address1=this.patientForm.value.address1;
    this.componentModelObj.address2=this.patientForm.value.address2;
    this.componentModelObj.city=this.patientForm.value.city;
    this.componentModelObj.state=this.patientForm.value.state;
    this.componentModelObj.zip=this.patientForm.value.zip;
    this.componentModelObj.gender=this.patientForm.value.gender;
    let patientDataArray = JSON.parse(localStorage.getItem('patientDataArray') || '[]');
    patientDataArray.push(this.componentModelObj);
    localStorage.setItem('patientDataArray', JSON.stringify(patientDataArray));
       this.api.postData(this.componentModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("data added successfully");
      this.patientForm.reset();
      this.router.navigate(['/patient-details']);
    },
    err=>{
      alert("wrong")
    })
      
}

getAllDetails()  
{
  this.api.getData().subscribe
  (res=>{
    this.patientData=res;
  })
}


    }

