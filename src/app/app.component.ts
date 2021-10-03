import { PropertyRead } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firstNumber: number = 10; //property
  secondNumber: number = 20; //proerty
  parentValue: string = '';
  showComponent: boolean = true;

  getName() {
    //method
    return 'Shailesh Salekar';
  }

  displayName() {
    //method
    this.getName();
  }

  add() {
    //method
    return this.firstNumber + this.secondNumber;
  }

  submitValue(value: string) {
    this.parentValue = value;
  }

  destroyChildCOmponent() {
    this.showComponent = false;
  }
}

// current instance current class or object
