import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {Auth, signInWithEmailAndPassword} from "@angular/fire/auth";
import {Router, RouterLink} from "@angular/router";
import {debounceTime, Subscription} from "rxjs";
import {AlertPanelComponent} from "../../../shared/alert-panel/alert-panel.component";

@Component({
  selector: 'lsbf-sign-in-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgClass,
    RouterLink,
    AlertPanelComponent
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

  private _errorMessage: string = '';
  showEmailError: boolean = false;

  ngOnInit(): void {
    this.subscribeToEmailControlValueChange();
  }

  ngOnDestroy(): void {
    this._emailControlSubscription?.unsubscribe();
  }

  get errorMessage(): string {
    return this._errorMessage;
  }

  set errorMessage(error: string) {
    if (error.toLowerCase().includes("invalid-credential")) {
      this._errorMessage = "Incorrect email or password.";
    } else if (error.toLowerCase().includes("too-many-requests")) {
      this._errorMessage = "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
    } else {
      this._errorMessage = error;
    }
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

  async signIn() {
    if (this.signInForm.valid) {
      const email: string = this.emailControl.value ?? '';
      const password: string = this.passwordControl.value ?? '';

      signInWithEmailAndPassword(this._auth, email, password).then(() => {
        this._router.navigate(['/home']);
      }).catch(error => this.errorMessage = error.message);
    }
  }

  handleAlertClose() {
    this.errorMessage = '';
    this.signInForm.reset();
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
