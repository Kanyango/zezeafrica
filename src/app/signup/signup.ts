import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'signup-component',
    templateUrl: 'signup.html'
})

export class SignUpComponent {
  
     loginForm: FormGroup;
    
    constructor(private fb: FormBuilder)
    {
        this.createForm();
     }
    
    createForm()
    {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password : ['', Validators.required]
      });
    }
    
    onSubmit()
    {
      
    } 

}
