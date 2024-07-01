import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowtableComponent } from './snowtable.component';

describe('SnowtableComponent', () => {
  let component: SnowtableComponent;
  let fixture: ComponentFixture<SnowtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowtableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnowtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
