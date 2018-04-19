import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'contact-component',
    templateUrl: 'contact.html'
})

export class ContactComponent {
    contactForm: FormGroup;

    constructor(private fb: FormBuilder){

        this.createContactForm();
    }

    createContactForm()
    {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            message: ['', Validators.required]
        })
    }

}
