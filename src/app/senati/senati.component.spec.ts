import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatiComponent } from './senati.component';

describe('SenatiComponent', () => {
  let component: SenatiComponent;
  let fixture: ComponentFixture<SenatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenatiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SenatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
