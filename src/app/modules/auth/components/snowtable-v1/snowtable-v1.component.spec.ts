import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowtableV1Component } from './snowtable-v1.component';

describe('SnowtableV1Component', () => {
  let component: SnowtableV1Component;
  let fixture: ComponentFixture<SnowtableV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowtableV1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnowtableV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
