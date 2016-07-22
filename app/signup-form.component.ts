import {Component} from '@angular/core';
import { ControlGroup, Control, Validators, FormBuilder } from '@angular/common';
import { UsernameValidators } from './usernameValidators' 

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
    // build Model-drivern from through simple ControlGroup
    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)

    // });


    // build Model-drivern from through formBulider class
    form: ControlGroup;
    
    constructor(formBulider: FormBuilder) {
        this.form = formBulider.group({
            username: ['', Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace
            ]), UsernameValidators.shouldBeUnique ],
            password: ['', Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace
            ])]
        })
    }

    signup() {
        // var result = authservie.login(this.form.value);
        this.form.find('username').setErrors({
            invalidLogin: true
        });


        console.log(this.form.value);
        console.log(this.form.valueChanges);
        
    }
}