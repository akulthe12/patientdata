import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login!:FormGroup;
  signup!:FormGroup;
  constructor(private formBuilder:FormBuilder,private auth:AuthService,private router:Router){}
    ngOnInit():void{
      this.signup = this.formBuilder.group ({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
    this.login= this.formBuilder.group ({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  
    
    }
    
    
    onLogin() {
      {
        
        if(this.login.valid){
          
             alert("login successfully")
        };
   
            
          
          }
        
}
onSignup()
  {
    if(this.signup.valid)
    {
      console.log(this.signup.value)
    }
  }

}