import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.scss'],
})
export class TemplatedrivenComponent implements OnInit {
  constructor() {}
  courses: string[] = ['Angular', 'React', 'Nodejs', 'Python', 'Java'];
  hasSelectError: boolean = false;
  ngOnInit(): void {}

  //method
  submitForm(formvalue: any) {
    this.validateSelectBox(formvalue.selectcourse);
    console.log(formvalue);
  }

  validateSelectBox(value: string) {
    if (value === '*' || value === '') {
      this.hasSelectError = true;
    }
  }
}
