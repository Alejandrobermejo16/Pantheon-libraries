import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantheonUi } from './pantheon-ui';

describe('PantheonUi', () => {
  let component: PantheonUi;
  let fixture: ComponentFixture<PantheonUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantheonUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantheonUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
