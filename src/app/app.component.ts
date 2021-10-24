import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  firstNumber: number = 10; //property
  secondNumber: number = 20; //proerty
  parentValue: string = '';
  showComponent: boolean = true;
  showDate: any;
  postData: any;

  //dependency injection...
  constructor(private apiService: MyserviceService) {}

  ngOnInit() {
    this.showDate = this.apiService.getCurrentDate();
    this.apiService.getPostData().subscribe((response) => {
      this.postData = response;
    });
  }

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
