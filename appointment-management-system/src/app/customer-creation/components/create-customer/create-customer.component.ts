import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { catchError, map, of, Observable } from 'rxjs';
import { CustomerService } from '../../services/customer.service';

const PHONE_NUMBER_FORMAT = '^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnInit {
  formGroup!: FormGroup;

  accountExistsForEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.customerService.accountExistsForEmail(control.value).pipe(
        map((exists) => (exists ? { accountExists: true } : null)),
        catchError(_ => of(null))
      );
    };
}


  constructor(private fb: FormBuilder, private customerService: CustomerService) { }


  ngOnInit(): void {

    this.formGroup = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [],
      lastName: ['', Validators.required],
      email: ['', {validators: [Validators.required, Validators.email], asyncValidators: this.accountExistsForEmailValidator()}],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(PHONE_NUMBER_FORMAT)],
      ],
      password: ['', Validators.required],
      password1: ['', Validators.required],
    });
  }

}
