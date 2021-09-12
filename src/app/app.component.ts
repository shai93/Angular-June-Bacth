import { PropertyRead } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firstNumber: number = 10;
  secondNumber: number = 20;

  getName() {
    return 'Shailesh Salekar';
  }

  displayName() {
    this.getName();
  }

  add() {
    return this.firstNumber + this.secondNumber;
  }
}

// current instance current class or object
