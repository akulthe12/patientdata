import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { PatientModule } from '../component/patient/patient.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientDataServiceService {
  private patientData = new BehaviorSubject<PatientModule[]>([]);
  currentPatientData = this.patientData.asObservable();

  constructor(private http:HttpClient) { }
  changePatientData(data: PatientModule[]) {
    this.patientData.next(data);
  }
}
