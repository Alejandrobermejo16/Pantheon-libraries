import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPanelComponent } from './grid-panel.component';

describe('GridPanelComponent', () => {
  let component: GridPanelComponent;
  let fixture: ComponentFixture<GridPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GridPanelComponent]
    });
    fixture = TestBed.createComponent(GridPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
