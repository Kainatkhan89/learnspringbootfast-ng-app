import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Auth, createUserWithEmailAndPassword} from "@angular/fire/auth";
import {NgClass, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {debounceTime, Subscription} from "rxjs";
import {AlertPanelComponent} from "../../../shared/alert-panel/alert-panel.component";

@Component({
  selector: 'lsbf-sign-up-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgClass,
    AlertPanelComponent
  ],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent implements OnInit, OnDestroy {
  private _formBuilder: FormBuilder = inject(FormBuilder);
  private _auth: Auth = inject(Auth);
  private _router: Router = inject(Router);

  private _emailControlSubscription: Subscription | undefined;
  private _passwordControlSubscription: Subscription | undefined;


  enabledButtonClasses: string = 'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
  disabledButtonClasses: string = 'flex w-full justify-center rounded-md bg-indigo-600 opacity-50 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm cursor-not-allowed';

  signUpForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  private _errorMessage: string = '';
  showEmailError: boolean = false;
  showPasswordError: boolean = false;

  ngOnInit() {
    this._emailControlSubscription = this.subscribeToEmailControlValueChange();
    this._passwordControlSubscription = this.subscribeToPasswordControlValueChange();
  }

  ngOnDestroy(){
    this._emailControlSubscription?.unsubscribe();
    this._passwordControlSubscription?.unsubscribe();
  }

  get errorMessage(): string {
    return this._errorMessage;
  }

  set errorMessage(error: string) {
    if (error.toLowerCase().includes("already-in-use")) {
      this._errorMessage = "Account already exists. Please sign in.";
    } else {
      this._errorMessage = error;
    }
  }

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

  async signUp() {
    if (this.signUpForm.valid) {
      const email: string = this.emailControl.value ?? '';
      const password: string = this.passwordControl.value ?? '';

      createUserWithEmailAndPassword(this._auth, email, password).then(() => {
        this._router.navigate(['/home']);
      }).catch(error => this.errorMessage = error.message);
    }
  }

  subscribeToEmailControlValueChange(): Subscription {
    return this.emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(value => {
      this.showEmailError = this.emailControl.invalid && this.emailControl.dirty;
    });
  }

  subscribeToPasswordControlValueChange(): Subscription {
    return this.passwordControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(value => {
      this.showPasswordError = this.passwordControl.invalid && this.passwordControl.dirty;
    });
  }

  handleAlertClose() {
    this.errorMessage = '';
    this.signUpForm.reset();
  }
}
