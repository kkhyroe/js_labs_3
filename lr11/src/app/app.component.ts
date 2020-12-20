import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MyDet} from "./shared/models/det.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent /** implements  OnInit, AfterViewInit **/ {
  title = 'lr11';

  dets: MyDet[] = [
    { name: 'detector', status: Math.random() >= 0.5 },
    { name: 'detector', status: Math.random() >= 0.5 },
    { name: 'detector', status: Math.random() >= 0.5 },
    { name: 'detector', status: Math.random() >= 0.5 },
    { name: 'detector', status: Math.random() >= 0.5 },
    { name: 'detector', status: Math.random() >= 0.5 },
    { name: 'detector', status: Math.random() >= 0.5 },
    { name: 'detector', status: Math.random() >= 0.5 },
    { name: 'detector', status: Math.random() >= 0.5 },
    { name: 'detector', status: Math.random() >= 0.5 }
  ];

  newDet(inputValue) {
    let det: MyDet = new MyDet();
    det.name = inputValue;
    det.status = Math.random() >= 0.5 ? true : false;
    this.dets.push(det);
  };

  // myNumber = 10;
  // flag = true;
  // buttonEnable = false;
  //
  // blockX = 0;
  // blockY = 0;
  //
  // inputValue = 'test';
  //
  // @ViewChild('someInput') someInputName: ElementRef;
  //
  // someArray: string[] = [
  //   'first', 'second', 'third'
  // ];
  //
  // fontSize = 15;

  constructor() {
    // setTimeout(() => {
    //   this.buttonEnable = true;
    //   this.fontSize = 20;
    // }, 1500);
    // console.log(this.someInputName);
  }

  // ngOnInit() {
  //   console.log(this.someInputName);
  // }
  //
  // ngAfterViewInit() {
  //   console.log(this.someInputName);
  // }
  //
  // hello() {
  //   return 'Hello';
  // }
  //
  // getCoords(e: MouseEvent) {
  //   this.blockX = e.offsetX;
  //   this.blockY = e.offsetY;
  // }
  //
  // getData(elm: HTMLInputElement) {
  //   // console.log(elm.value);
  //   console.log(this.someInputName.nativeElement.value)
  // }
}
