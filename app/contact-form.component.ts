import { Component } from '@angular/core';

@Component({
    selector: 'contact-form',
    templateUrl : 'app/contact-form.component.html' 
})

export /**
 * ContactFormComponent
 */
class ContactFormComponent {
    log(x:any) {
        console.log(x);
    }
    onSubmit(form:any) {
        console.log(form);
    }
    frequencies = [
        { id: 1, label: 'Daily' }, 
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];
    
    onSubscribe(form:any){
        console.log(form.value);
    }
}