import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutDetailComponent } from './fut-detail.component';

describe('FutDetailComponent', () => {
  let component: FutDetailComponent;
  let fixture: ComponentFixture<FutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
