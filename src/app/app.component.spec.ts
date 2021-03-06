import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { CookieService } from 'ngx-cookie-service';
import { Api } from './services/api';
import { Http, HttpModule } from '@angular/http';
import { DocumentService } from './services/document.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        CookieService,
        Api
      ],
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        NgxPageScrollModule,
        HttpModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
