import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.scss'],
})
export class TemplatedrivenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //method
  submitForm(formvalue: any) {
    console.log(formvalue);
  }
}
