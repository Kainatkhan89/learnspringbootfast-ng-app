import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {Auth, signInWithEmailAndPassword} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {debounceTime, Subscription} from "rxjs";

@Component({
  selector: 'ldnf-sign-in-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.css'
})
export class SignInFormComponent implements  OnInit, OnDestroy {

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

  signInForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  get emailControl() {
    return this.signInForm.controls['email'];
  }

  get passwordControl() {
    return this.signInForm.controls['password'];
  }

  get emailErrors() {
    return this.emailControl.errors;
  }

  get passwordErrors() {
    return this.passwordControl.errors;
  }

  get showPasswordError(): boolean {
    return this.passwordControl.invalid && this.passwordControl.dirty;
  }

  dismissError(): void {
    this.errorMessage = '';
  }
  async signIn() {
    if (this.signInForm.valid) {
      const email: string = this.emailControl.value ?? '';
      const password: string = this.passwordControl.value ?? '';

      signInWithEmailAndPassword(this._auth, email, password).then(() => {
        this._router.navigate(['/home']);
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
