import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnalystComponent } from './view-analyst.component';

describe('ViewAnalystComponent', () => {
  let component: ViewAnalystComponent;
  let fixture: ComponentFixture<ViewAnalystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAnalystComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
