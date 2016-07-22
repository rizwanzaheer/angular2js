import { Control, ControlGroup } from '@angular/common';


export /**
 * PasswordValidators
 */
class PasswordValidators {
    static complexPassword(control: Control) {
        const minLength = 5;

       if (control.value == '') {
           return null; 
        } 
       if (control.value.length < minLength) {
           return { 
                complexPassword: {
                    minLength: minLength
                } 
            };
       } 
       return null;

    }
    

    static passwordShouldMatch(group: ControlGroup) {
        var newPassword = group.find("newpassword").value;
        var confirmPassword = group.find("confirmpassword").value;

        if (newPassword  == '' || confirmPassword == '' ) {
            return null;
        }

        if (newPassword != confirmPassword) {
            return { passwordShouldMatch : true }
        }

        return null;

    }
}