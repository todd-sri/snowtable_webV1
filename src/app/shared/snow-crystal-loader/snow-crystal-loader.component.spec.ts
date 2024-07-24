import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowCrystalLoaderComponent } from './snow-crystal-loader.component';

describe('SnowCrystalLoaderComponent', () => {
  let component: SnowCrystalLoaderComponent;
  let fixture: ComponentFixture<SnowCrystalLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowCrystalLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnowCrystalLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
