import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Auth, createUserWithEmailAndPassword} from "@angular/fire/auth";
import {NgClass, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'ldnf-sign-up-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent {
  private _formBuilder: FormBuilder = inject(FormBuilder);
  private _auth: Auth = inject(Auth);
  private _router: Router = inject(Router);

  enabledButtonClasses: string = 'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
  disabledButtonClasses: string = 'flex w-full justify-center rounded-md bg-indigo-600 opacity-50 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm cursor-not-allowed';

  signUpForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  errorMessage: string = '';

  get emailControl() {
    return this.signUpForm.controls['email'];
  }

  get passwordControl() {
    return this.signUpForm.controls['password'];
  }

  get emailErrors() {
    return this.emailControl.errors;
  }

  get passwordErrors() {
    return this.passwordControl.errors;
  }

  get emailIsInvalid() {
    return this.emailControl.invalid && (this.emailControl.dirty || this.emailControl.touched);
  }

  get passwordIsInvalid() {
    return this.passwordControl.invalid && (this.passwordControl.dirty || this.passwordControl.touched);
  }

  async signUp() {
    if (this.signUpForm.valid) {
      const email: string = this.emailControl.value ?? '';
      const password: string = this.passwordControl.value ?? '';

      createUserWithEmailAndPassword(this._auth, email, password).then(() => {
        this._router.navigate(['/home']);
      }).catch(error => this.errorMessage = error);
    }
  }
}
