import { Component } from '@angular/core';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
    email: string = '';

    onResetPassword() {
        // Add reset password logic here
        console.log('Reset password requested for', this.email);
    }
}
