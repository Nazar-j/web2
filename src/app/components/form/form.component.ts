import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { AuthService } from '../../services/auth.servece';

@Component({
    standalone: true,
    selector: 'app-name-editor',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    imports: [
        ReactiveFormsModule,
        NgIf
    ],
})
export class NameEditorComponent implements OnInit {
    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.loginForm = new FormGroup({
            login: new FormControl('', [Validators.required, Validators.minLength(3)]),
            password: new FormControl('', [Validators.required]),
        });
    }

    loginForm: FormGroup;

    onSubmit() {
        if (this.loginForm.get('login')?.touched && this.loginForm.get('login')?.errors?.['required']) {
            console.log('Login field is required.');
        }
        else if (this.loginForm.valid) {
            this.authService.loginApi(
                this.loginForm.value.login,
                this.loginForm.value.password
            );
        }
    }

}