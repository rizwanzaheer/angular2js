import { Component } from '@angular/core';
import { ControlGroup, Control, Validators, FormBuilder } from '@angular/common';
import { PasswordValidators } from './passwordValidators';

@Component({
    selector: 'change-password',
    templateUrl : 'app/change-password.template.html' 
})

export
/**
 * ChangePasswordComponent
 */
class ChangePasswordComponent {
    form: ControlGroup;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            oldpassword: ['', Validators.compose([
                Validators.required
            ])],
            newpassword: ['', Validators.compose([
                Validators.required,
                PasswordValidators.complexPassword
            ])],
            confirmpassword: ['', Validators.compose([
                Validators.required                
            ])]
        },{    validator:PasswordValidators.passwordShouldMatch });
    }
    Changepassword() {
        var oldpassword = this.form.find('oldpassword');
        if (oldpassword.value != '1234') {
            oldpassword.setErrors({
                validOldPassword: true
            });
        }
        if (this.form.valid) {
            alert("Password Successfully Changed!");
        }
    }
}