import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { PatientDataServiceService } from 'src/app/services/patient-data-service.service';
import { PatientModule } from '../patient/patient.module';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent {
  patientData:any[]=[];
  showAdd:boolean=false;
  showEdit:boolean=true;
  showUpdate:boolean=false;
  patientForm:FormGroup;
  searchTerm: string = '';

  componentModelObj:PatientModule=new PatientModule();
  constructor(private api:ApiService,private patientdataservice:PatientDataServiceService,private fb:FormBuilder){
    this.patientForm = this.fb.group({
      id: [null],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.getAllDetails();
    const editedData = localStorage.getItem('editedData');
if (editedData) {
  this.patientForm.patchValue(JSON.parse(editedData));
  localStorage.removeItem('editedData');
}

  }

  getAllDetails() {
    this.api.getData().subscribe((res) => {
      this.patientData = res;
    });
  }
  a:any;

  editData(row:any) {
    this.showAdd=false;
    this.showUpdate=true;
    this.patientForm.patchValue({
      id: row.id,
      firstname: row.firstname,
      lastname: row.lastname,
      address1: row.address1,
      address2: row.address2,
      city: row.city,
      state: row.state,
      zip: row.zip,
      gender: row.gender
    });
  
    this.a=row;
  }
  
  
  
  
  onUpdate()
{
  this.componentModelObj.firstname=this.patientForm.value.firstname;
  this.componentModelObj.lastname=this.patientForm.value.lastname;
  this.componentModelObj.address1=this.patientForm.value.address1;
  this.componentModelObj.address2=this.patientForm.value.address2;
  this.componentModelObj.city=this.patientForm.value.city;
  this.componentModelObj.state=this.patientForm.value.state;
  this.componentModelObj.zip=this.patientForm.value.zip;
  this.componentModelObj.gender=this.patientForm.value.gender;
  this.componentModelObj.id=this.a.id;
  localStorage.setItem('editedData', JSON.stringify(this.componentModelObj));

   this.api.updateData(this.componentModelObj,this.componentModelObj.id)
.subscribe(res=>{
  alert("updated successfully")
  let ref=document.getElementById('cancel')
  ref?.click();
  this.patientForm.reset();
  this.getAllDetails();

})
  }  

  deleteData(row:any)
  {if (confirm("Are you sure to delete?")) {
    this.api.deleteData(row.id).subscribe(res => {
      this.getAllDetails();
      alert("Deleted successfully");
    });
  }
  }
}
