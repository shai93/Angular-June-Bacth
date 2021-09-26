import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss'],
})
export class ReactiveformsComponent implements OnInit {
  //dependency injection.
  constructor(private fb: FormBuilder) {}
  formSubmitted: boolean = false;

  UserRegistrationForm = this.fb.group({
    userName: ['', Validators.required],
    password: [],
    confirmPassword: [],
  });

  ngOnInit(): void {}

  submitForm() {
    this.formSubmitted = true;
  }
}

// service->class file
