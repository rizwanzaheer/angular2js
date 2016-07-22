import { ControlGroup, Control } from '@angular/common';

/**
 * UsernameValidators
 */
export class UsernameValidators {
    static shouldBeUnique(control:Control) {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                if (control.value == "Rizwan") {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 4000);
        });
    }
    static cannotContainSpace(control: Control) {
        if (control.value.indexOf(' ') >= 0 ){
            return { cannotContainSpace: true}
        }
        return null; 
    }
}