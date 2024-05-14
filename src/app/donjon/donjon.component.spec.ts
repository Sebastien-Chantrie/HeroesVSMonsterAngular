import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonjonComponent } from './donjon.component';

describe('DonjonComponent', () => {
  let component: DonjonComponent;
  let fixture: ComponentFixture<DonjonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonjonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonjonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
