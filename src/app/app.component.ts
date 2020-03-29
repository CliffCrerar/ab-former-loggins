import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pageTitle: string;
  subTitle: string;
  @Input() save = new EventEmitter();


  constructor(private ts: Title) {

    this.pageTitle = 'Template Driven Forms';
    this.subTitle = 'Validation Demo';
    this.ts.setTitle(this.pageTitle);

  }

  ngOnInit() {

  }

  submit(ev: string) {
    console.log('save ev', ev);
    console.log('SAVE EVENT: App Component');
  }
}
