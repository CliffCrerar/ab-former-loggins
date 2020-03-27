import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';

describe('AppComponent', () => {
  const title = document.getElementsByTagName('title')[0].innerText;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [Title]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));

  it('Should have document title to equal `AP Former Loggins`', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.ts.getTitle() === 'AP Former Loggins').toBeTruthy();
  });
});
