import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSearchComponentComponent } from './weather-search-component.component';

describe('WeatherSearchComponentComponent', () => {
  let component: WeatherSearchComponentComponent;
  let fixture: ComponentFixture<WeatherSearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherSearchComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
