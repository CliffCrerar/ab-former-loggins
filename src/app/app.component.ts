import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageTitle: string;

  constructor(private ts: Title) {

    this.pageTitle = 'AP Former Loggins';
    this.ts.setTitle(this.pageTitle);

  }

  ngOnInit() {

  }

  submit(ev:string){
    console.log('SAVE EVENT: App Component');
  }
}
