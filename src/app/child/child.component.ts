import {
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
  implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy
{
  @Input('parentvalue') parentvalue: string = '';
  showComponent: boolean = true;
  showDate: any;
  // constructor() {
  //   console.log('Constructor Called');
  // }

  constructor(private apiService: MyserviceService) {}

  //this will get executed when input value gets change.
  ngOnChanges() {
    console.log('ngOnChanges Called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    this.showDate = this.apiService.getCurrentDate();
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterViewInit() {
    console.log('ngAfterContentInit  called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
