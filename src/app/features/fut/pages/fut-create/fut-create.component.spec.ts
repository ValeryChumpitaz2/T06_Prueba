import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutCreateComponent } from './fut-create.component';

describe('FutCreateComponent', () => {
  let component: FutCreateComponent;
  let fixture: ComponentFixture<FutCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
