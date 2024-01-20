import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {LogoComponent} from "../../../shared/logo/logo.component";
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {Auth, sendPasswordResetEmail} from "@angular/fire/auth";
import {debounceTime, Subscription} from "rxjs";

@Component({
  selector: 'ldnf-forgot-password-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    NgClass

  ],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.css'
})
export class ForgotPasswordFormComponent implements  OnInit, OnDestroy {

  private _formBuilder: FormBuilder = inject(FormBuilder);
  private _auth: Auth = inject(Auth);
  private _router: Router = inject(Router);

  private _emailControlSubscription: Subscription | undefined;

  enabledButtonClasses: string = 'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
  disabledButtonClasses: string = 'flex w-full justify-center rounded-md bg-indigo-600 opacity-50 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm cursor-not-allowed';

  errorMessage: string = '';
  showEmailError: boolean = false;

  ngOnInit(): void {
    this.subscribeToEmailControlValueChange();
  }

  ngOnDestroy(): void {
    this._emailControlSubscription?.unsubscribe();
  }

  get emailControl() {
    return this.forgotPasswordForm.controls['email'];
  }

  get emailErrors() {
    return this.emailControl.errors;
  }

  dismissError(): void {
    this.errorMessage = '';
  }

  forgotPasswordForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });
  async forgotPassword() {
    if (this.forgotPasswordForm.valid) {
      const email: string = this.emailControl.value ?? '';

      sendPasswordResetEmail(this._auth, email).then(() => {
       console.log("email sent");
      }).catch(error => this.errorMessage = error);
    }
  }

  subscribeToEmailControlValueChange(): void {
    this._emailControlSubscription = this.emailControl.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe(() => {
        this.showEmailError = this.emailControl.invalid && this.emailControl.dirty;
      });
  }
}
