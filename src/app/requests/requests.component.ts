import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
 // declare the global variable
 section: any = [];
  constructor() { }

  ngOnInit() {
  }

}
