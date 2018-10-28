import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body1',
  templateUrl: './body1.component.html',
  styleUrls: ['./body1.component.css']
})
export class Body1Component implements OnInit {

 public name = 'Yohan Malshika';
 public image = 'image-block';
 public nameblock = 'name-block';
 public imgCircle = 'img-circle';
 public body1class = 'body-header';

  constructor() { }

  ngOnInit() {
  }

}
