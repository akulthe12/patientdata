import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/operators';
import { PatientModule } from '../component/patient/patient.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isLoggedIn() {
    throw new Error('Method not implemented.');
  }
 
  constructor(private http:HttpClient) { }
  
  postData(data:any)
  {
    return this.http.post<any>("http://localhost:3000/patientData/",data)
    .pipe(map((res)=>{
      return res;
    
    }))
  }
  getData()
  {
    return this.http.get<any>("http://localhost:3000/patientData/")
    
  }
  updateData(data:any,id:number)
  {
    return this.http.put<any>("http://localhost:3000/patientData/"+id,data)
  }
  deleteData(id:number)
  {
      return this.http.delete<any>("http://localhost:3000/patientData/"+id)
  }

    
}
