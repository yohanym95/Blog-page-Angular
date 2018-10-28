import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.css']
})
export class Body2Component implements OnInit {

  public body2class = 'body-header';
  public Aboutme = 'aboutme-block';
  public title = 'title-block';
  public details = 'details-block';
  public quote = 'quote-block';



  constructor() { }

  ngOnInit() {
  }

}
