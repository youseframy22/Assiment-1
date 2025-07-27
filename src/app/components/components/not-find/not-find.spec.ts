import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFind } from './not-find';

describe('NotFind', () => {
  let component: NotFind;
  let fixture: ComponentFixture<NotFind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFind);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
