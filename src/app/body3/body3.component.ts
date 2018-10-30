import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body3',
  templateUrl: './body3.component.html',
  styleUrls: ['./body3.component.css']
})
export class Body3Component implements OnInit {

  public body3class = 'body-header';
  public tittle = 'tittle-block';
  public skill = 'skill-block';

  constructor() { }

  ngOnInit() {
  }

}
