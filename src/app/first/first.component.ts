import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name = 'Hello world';
  age: number = 12;
  number: number = 0;
  twowaydatabinding: any = 'Hello Earth';

  src: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png';

  oneWayDataBinding: string = 'One Way Data binding !!!!!';

  showMyName() {
    this.name = 'Shailesh Salekar';
  }

  increment() {
    this.number = this.number + 1;
  }

  decrement() {
    if (this.number > 0) {
      this.number = this.number - 1;
    }
  }

  reset() {
    this.number = 0;
  }
}
