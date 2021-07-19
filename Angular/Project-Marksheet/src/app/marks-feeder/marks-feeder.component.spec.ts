import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksFeederComponent } from './marks-feeder.component';

describe('MarksFeederComponent', () => {
  let component: MarksFeederComponent;
  let fixture: ComponentFixture<MarksFeederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksFeederComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksFeederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
