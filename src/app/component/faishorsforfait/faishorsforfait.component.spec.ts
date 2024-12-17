import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaishorsforfaitComponent } from './faishorsforfait.component';

describe('FaishorsforfaitComponent', () => {
  let component: FaishorsforfaitComponent;
  let fixture: ComponentFixture<FaishorsforfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaishorsforfaitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaishorsforfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
