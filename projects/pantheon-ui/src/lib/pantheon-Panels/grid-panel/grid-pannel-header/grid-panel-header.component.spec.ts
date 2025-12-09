import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPanelHeaderComponent } from './grid-panel-header.component';

describe('GridPanelHeaderComponent', () => {
  let component: GridPanelHeaderComponent;
  let fixture: ComponentFixture<GridPanelHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GridPanelHeaderComponent]
    });
    fixture = TestBed.createComponent(GridPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
