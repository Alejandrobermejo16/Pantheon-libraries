import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideActionPanelComponent } from './side-action-panel.component';

describe('side-action-panel', () => {
  let component: SideActionPanelComponent;
  let fixture: ComponentFixture<SideActionPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SideActionPanelComponent]
    });
    fixture = TestBed.createComponent(SideActionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
