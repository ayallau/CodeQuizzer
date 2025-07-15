import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
    resetPasswordForm!: FormGroup;
    isLoading = false;
    errorMessage = '';
    successMessage = '';

    constructor(
        private fb: FormBuilder,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.resetPasswordForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    // Getter method for easier access to form control
    get email() {
        return this.resetPasswordForm.get('email');
    }

    onResetPassword() {
        if (this.resetPasswordForm.valid) {
            this.isLoading = true;
            this.errorMessage = '';
            this.successMessage = '';
            
            const { email } = this.resetPasswordForm.value;
            
            this.authService.resetPassword(email).subscribe({
                next: (response) => {
                    console.log('Reset password request sent:', response);
                    this.successMessage = 'Reset password link has been sent to your email.';
                    this.resetPasswordForm.reset();
                },
                error: (error) => {
                    console.error('Reset password failed:', error);
                    this.errorMessage = error.error?.message || 'Failed to send reset password link. Please try again.';
                },
                complete: () => {
                    this.isLoading = false;
                }
            });
        }
    }
}
